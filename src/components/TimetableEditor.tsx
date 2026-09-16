import React, { useState, useEffect } from 'react';
import { Calendar, Plus, Trash2, RotateCcw, X, Check, HelpCircle, Edit3, Save } from 'lucide-react';
import { TimetableEntry } from '../types';
import { DEFAULT_TIMETABLE, getGradeFromClassName } from '../data/scheduleData';

interface TimetableEditorProps {
  isOpen: boolean;
  onClose: () => void;
  timetable: TimetableEntry[];
  onSaveTimetable: (newTimetable: TimetableEntry[]) => void;
}

export const TimetableEditor: React.FC<TimetableEditorProps> = ({
  isOpen,
  onClose,
  timetable,
  onSaveTimetable,
}) => {
  const [entries, setEntries] = useState<TimetableEntry[]>(timetable);
  const [filterDay, setFilterDay] = useState<string>('all');

  // Synchronize internal state whenever timetable prop changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setEntries(timetable);
      setEditingId(null);
    }
  }, [isOpen, timetable]);

  // Inline edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editThu, setEditThu] = useState<'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu'>('Hai');
  const [editBuoi, setEditBuoi] = useState<'Sáng' | 'Chiều'>('Sáng');
  const [editTiet, setEditTiet] = useState<number>(1);
  const [editLop, setEditLop] = useState<string>('');

  // Add new form state
  const [newThu, setNewThu] = useState<'Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu'>('Hai');
  const [newBuoi, setNewBuoi] = useState<'Sáng' | 'Chiều'>('Sáng');
  const [newTiet, setNewTiet] = useState<number>(1);
  const [newLop, setNewLop] = useState<string>('4B1');

  if (!isOpen) return null;

  const handleStartEdit = (entry: TimetableEntry) => {
    setEditingId(entry.id);
    setEditThu(entry.thu);
    setEditBuoi(entry.buoi);
    setEditTiet(entry.tiet);
    setEditLop(entry.lop);
  };

  const handleSaveEdit = (id: string) => {
    if (!editLop.trim()) return;
    const g = getGradeFromClassName(editLop.trim());
    setEntries(
      entries.map(e => {
        if (e.id === id) {
          return {
            ...e,
            thu: editThu,
            buoi: editBuoi,
            tiet: editTiet,
            lop: editLop.trim().toUpperCase(),
            tenBai: `Chủ đề bài dạy Khối ${g}`,
          };
        }
        return e;
      })
    );
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLop.trim()) return;

    const g = getGradeFromClassName(newLop.trim());
    const newEntry: TimetableEntry = {
      id: `entry_${Date.now()}`,
      thu: newThu,
      buoi: newBuoi,
      tiet: newTiet,
      mon: 'Mĩ thuật',
      lop: newLop.trim().toUpperCase(),
      tenBai: `Chủ đề bài dạy Khối ${g}`,
      thietBi: 'SGK, ĐDDH',
    };

    setEntries([...entries, newEntry]);
    setNewLop('');
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const handleResetDefault = () => {
    if (window.confirm('Bạn có chắc chắn muốn khôi phục Báo bài dạy chuẩn ban đầu (19 tiết / tuần)? Cài đặt sẽ được tự động lưu.')) {
      setEntries(DEFAULT_TIMETABLE);
      setEditingId(null);
    }
  };

  const handleSave = () => {
    onSaveTimetable(entries);
    onClose();
  };

  const filteredEntries = entries.filter(e => filterDay === 'all' || e.thu === filterDay);

  const days: ('Hai' | 'Ba' | 'Tư' | 'Năm' | 'Sáu')[] = ['Hai', 'Ba', 'Tư', 'Năm', 'Sáu'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold">Báo Bài Dạy & Thời Khóa Biểu Tuần</h2>
              <p className="text-xs text-slate-300">
                Lịch dạy thực tế xác định ngày, thứ, lớp và tự động ánh xạ sang MASTER CONTENT từng khối
              </p>
            </div>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-md transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action and Filter bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-slate-700">Lọc theo thứ:</span>
            <button
              onClick={() => setFilterDay('all')}
              className={`px-2.5 py-1 text-xs rounded font-medium transition ${
                filterDay === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Tất cả ({entries.length})
            </button>
            {days.map(d => {
              const count = entries.filter(e => e.thu === d).length;
              return (
                <button
                  key={d}
                  onClick={() => setFilterDay(d)}
                  className={`px-2.5 py-1 text-xs rounded font-medium transition ${
                    filterDay === d
                      ? 'bg-sky-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Thứ {d} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleResetDefault}
              className="inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded hover:bg-slate-100 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Khôi phục mặc định</span>
            </button>
          </div>
        </div>

        {/* Add Class Form */}
        <form onSubmit={handleAdd} className="px-6 py-3 bg-sky-50/50 border-b border-sky-100 flex flex-wrap items-center gap-2.5 text-xs">
          <span className="font-semibold text-sky-900">Thêm tiết dạy:</span>
          
          <select
            value={newThu}
            onChange={e => setNewThu(e.target.value as any)}
            className="px-2 py-1 bg-white border border-slate-300 rounded focus:outline-none"
          >
            {days.map(d => (
              <option key={d} value={d}>Thứ {d}</option>
            ))}
          </select>

          <select
            value={newBuoi}
            onChange={e => setNewBuoi(e.target.value as any)}
            className="px-2 py-1 bg-white border border-slate-300 rounded focus:outline-none"
          >
            <option value="Sáng">Sáng</option>
            <option value="Chiều">Chiều</option>
          </select>

          <select
            value={newTiet}
            onChange={e => setNewTiet(parseInt(e.target.value, 10))}
            className="px-2 py-1 bg-white border border-slate-300 rounded focus:outline-none"
          >
            {[1, 2, 3, 4, 5].map(t => (
              <option key={t} value={t}>Tiết {t}</option>
            ))}
          </select>

          <input
            type="text"
            value={newLop}
            onChange={e => setNewLop(e.target.value)}
            placeholder="Tên lớp (ví dụ: 1B6, 2B1, 4B2)"
            className="px-2.5 py-1 bg-white border border-slate-300 rounded w-44 font-semibold uppercase focus:outline-none focus:ring-1 focus:ring-sky-500"
          />

          <button
            type="submit"
            className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded flex items-center space-x-1 shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm vào TKB</span>
          </button>
        </form>

        {/* Entries Table */}
        <div className="flex-1 overflow-y-auto p-6">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                <th className="p-2.5">Thứ</th>
                <th className="p-2.5">Buổi</th>
                <th className="p-2.5 text-center">Tiết</th>
                <th className="p-2.5">Lớp</th>
                <th className="p-2.5">Tự động nhận diện Khối</th>
                <th className="p-2.5">Tệp Master Content áp dụng</th>
                <th className="p-2.5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredEntries.map(entry => {
                const isEditing = editingId === entry.id;
                const grade = getGradeFromClassName(entry.lop);

                if (isEditing) {
                  return (
                    <tr key={entry.id} className="bg-sky-50/70 border-y border-sky-300">
                      <td className="p-2">
                        <select
                          value={editThu}
                          onChange={e => setEditThu(e.target.value as any)}
                          className="px-2 py-1 bg-white border border-sky-300 rounded text-xs focus:outline-none"
                        >
                          {days.map(d => (
                            <option key={d} value={d}>Thứ {d}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <select
                          value={editBuoi}
                          onChange={e => setEditBuoi(e.target.value as any)}
                          className="px-2 py-1 bg-white border border-sky-300 rounded text-xs focus:outline-none"
                        >
                          <option value="Sáng">Sáng</option>
                          <option value="Chiều">Chiều</option>
                        </select>
                      </td>
                      <td className="p-2 text-center">
                        <select
                          value={editTiet}
                          onChange={e => setEditTiet(parseInt(e.target.value, 10))}
                          className="px-2 py-1 bg-white border border-sky-300 rounded text-xs focus:outline-none"
                        >
                          {[1, 2, 3, 4, 5].map(t => (
                            <option key={t} value={t}>Tiết {t}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={editLop}
                          onChange={e => setEditLop(e.target.value)}
                          className="px-2 py-1 bg-white border border-sky-400 rounded text-xs uppercase font-bold w-24 focus:outline-none focus:ring-1 focus:ring-sky-500"
                          autoFocus
                        />
                      </td>
                      <td className="p-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-sky-100 text-sky-800">
                          Khối {getGradeFromClassName(editLop || '1')}
                        </span>
                      </td>
                      <td className="p-2 text-slate-500 font-mono text-[11px]">
                        KHBD_MT{getGradeFromClassName(editLop || '1')}_KNTT_2026-2027.docx
                      </td>
                      <td className="p-2 text-right">
                        <div className="flex items-center justify-end space-x-1">
                          <button
                            onClick={() => handleSaveEdit(entry.id)}
                            className="p-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded transition shadow-xs"
                            title="Lưu sửa đổi"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="p-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded transition"
                            title="Hủy sửa"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={entry.id} className="hover:bg-slate-50 transition">
                    <td className="p-2.5 font-semibold text-slate-800">Thứ {entry.thu}</td>
                    <td className="p-2.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10pt] font-semibold ${
                          entry.buoi === 'Sáng'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-indigo-100 text-indigo-800'
                        }`}
                      >
                        {entry.buoi}
                      </span>
                    </td>
                    <td className="p-2.5 text-center font-semibold text-slate-700">{entry.tiet}</td>
                    <td className="p-2.5">
                      <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                        {entry.lop}
                      </span>
                    </td>
                    <td className="p-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Khối {grade}
                      </span>
                    </td>
                    <td className="p-2.5 text-slate-600 font-mono text-[11px]">
                      KHBD_MT{grade}_KNTT_2026-2027.docx
                    </td>
                    <td className="p-2.5 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <button
                          onClick={() => handleStartEdit(entry)}
                          className="text-slate-400 hover:text-sky-600 p-1 transition"
                          title="Chỉnh sửa tiết này"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(entry.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 transition"
                          title="Xoá tiết"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-slate-500">
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>Ký tự đầu tiên của tên lớp (1..5) quyết định MASTER CONTENT tương ứng.</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-md transition"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-md shadow-xs transition inline-flex items-center space-x-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Lưu Báo bài & Cập nhật KHBD</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
