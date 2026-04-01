import { useState, useEffect, useCallback } from 'react';

const STORAGE_RECENT_KEY = 'md_editor_recent';
const MAX_RECENT = 10;

export function useRecentFiles() {
  const [recentFiles, setRecentFiles] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_RECENT_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_RECENT_KEY, JSON.stringify(recentFiles));
  }, [recentFiles]);

  const addRecentFile = useCallback((doc) => {
    setRecentFiles(prev => {
      const filtered = prev.filter(f => f.id !== doc.id);
      const newRecent = [
        { id: doc.id, title: doc.title, updatedAt: doc.updatedAt },
        ...filtered
      ].slice(0, MAX_RECENT);
      return newRecent;
    });
  }, []);

  return { recentFiles, addRecentFile };
}
