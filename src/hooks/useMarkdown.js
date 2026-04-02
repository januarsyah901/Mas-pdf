import { useState, useEffect } from 'react';
import { DEFAULT_CONTENT } from '../store/documentStore';

const STORAGE_KEY = 'markdown_editor_content';

export function useMarkdown() {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved !== null ? saved : DEFAULT_CONTENT;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, content);
  }, [content]);

  return { content, setContent };
}
