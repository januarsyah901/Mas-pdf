import { v4 as uuidv4 } from 'uuid';

export const createNewDocument = (title = "Untitled", content = "# Untitled\n\nStart writing here...") => {
  return {
    id: uuidv4(),
    title,
    content,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    isPinned: false
  };
};

export const DEFAULT_CONTENT = `# Welcome to your Markdown Editor! ✍️

Start typing on the left, and see the preview on the right. This editor supports real-time rendering, syntax highlighting, and PDF export!

## Features

- **Split-Pane Design**: Seamless editing and previewing experience.
- **Dark Mode**: Switch between light and dark modes instantly.
- **Rich Markdown**: Full support for GitHub Flavored Markdown (\`remark-gfm\`).
- **File Management**: Multiple tabs, saving to .md, opening files, and more!
`;
