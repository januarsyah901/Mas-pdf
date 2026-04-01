import { Settings, FileText, ArrowRightLeft, Download, Upload } from 'lucide-react';
import React, { useRef } from 'react';

export default function Footer({ words, chars, charsNoSpace, syncEnabled, toggleSync, onExportModal, onSaveMd, onOpenMd }) {
  const fileInputRef = useRef(null);

  const handleOpenClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onOpenMd(file);
    }
    // clear input
    e.target.value = '';
  };

  return (
    <footer className="flex items-center justify-between px-4 py-2 bg-white dark:bg-dark-800 shadow-sm border-t border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 font-medium z-10 w-full">
      <div className="flex items-center space-x-4">
        <span>Words: {words}</span>
        <span>Chars: {chars}</span>
        <span className="hidden sm:inline">Chars (no space): {charsNoSpace}</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-500">
        <button
          onClick={handleOpenClick}
          className="flex items-center space-x-1.5 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          title="Open .md file"
        >
          <Upload size={14} />
          <span className="hidden sm:inline">Open .md</span>
        </button>
        <input 
          type="file" 
          accept=".md,.txt,text/markdown,text/plain" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileChange} 
        />
        
        <button
          onClick={onSaveMd}
          className="flex items-center space-x-1.5 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          title="Save as .md file"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Save .md</span>
        </button>

        <button
          onClick={toggleSync}
          className={`flex items-center space-x-1.5 px-2 py-1 rounded transition-colors ${
            syncEnabled 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title="Toggle Scroll Sync"
        >
          <ArrowRightLeft size={14} />
          <span className="hidden sm:inline">Scroll Sync: {syncEnabled ? 'ON' : 'OFF'}</span>
        </button>

        <button
          onClick={onExportModal}
          className="flex items-center space-x-1.5 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-blue-600 dark:text-blue-400 font-semibold"
        >
          <Settings size={14} />
          <span className="hidden sm:inline">Export PDF</span>
        </button>
      </div>
    </footer>
  );
}
