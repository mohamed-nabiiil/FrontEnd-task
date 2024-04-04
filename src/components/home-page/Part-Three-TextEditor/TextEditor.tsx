import { useState, useRef, useEffect } from "react";
import styles from "./TextEditor.module.css";
import ToolbarButton from "./ToolbarButton";

// Define the toolbar button data structure
interface ToolbarButton {
  icon: string;
  alt: string;
  onClick?: () => void;
}

const TextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [history, setHistory] = useState<string[]>([content]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const editorRef = useRef<HTMLDivElement>(null);

  const toggleBold = () => {
    document.execCommand("bold");
  };

  // Function to toggle italic style
  const toggleItalic = () => {
    document.execCommand("italic");
  };

  const updateContent = (newContent: string) => {
    setContent(newContent);
    const newHistory = [...history.slice(0, historyIndex + 1), newContent];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Function to handle undo
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setContent(history[historyIndex - 1]);
    }
  };

  // Function to handle redo
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setContent(history[historyIndex + 1]);
    }
  };

  // Function to handle content change
  const handleContentChange = () => {
    const newContent = editorRef.current!.innerHTML;
    if (newContent !== content) {
      updateContent(newContent);
      // Detect text direction for each character
      const direction = detectTextDirection(newContent);
      editorRef.current!.style.direction = direction;
    }
  };

  // Function to detect text direction based on language
  const detectTextDirection = (text: string) => {
    // Regular expression to match Arabic characters
    const arabicCharacters =
      /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    // Regular expression to match English characters
    const englishCharacters = /^[A-Za-z\s]+$/;

    let hasArabic = false;
    let hasEnglish = false;

    // Iterate through each character in the text
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      // Check if the character is Arabic
      if (arabicCharacters.test(char)) {
        hasArabic = true;
      } else if (englishCharacters.test(char)) {
        hasEnglish = true;
      }
      // If both Arabic and English characters are found, return "auto"
      if (hasArabic && hasEnglish) {
        return "auto";
      }
    }
    // If only Arabic characters are found, return "rtl"
    if (hasArabic) {
      return "rtl";
    }
    // If only English characters are found, return "ltr"
    if (hasEnglish) {
      return "ltr";
    }
    // Default to "auto" if no characters are found
    return "auto";
  };

  // Add event listener for content change
  useEffect(() => {
    const editor = editorRef.current;
    if (editor) {
      editor.addEventListener("input", handleContentChange);
    }
    return () => {
      if (editor) {
        editor.removeEventListener("input", handleContentChange);
      }
    };
  }, []);

  // Define the toolbar buttons data
  const toolbarButtons: ToolbarButton[] = [
    {
      icon: "orderedList.svg",
      alt: "Ordered List",
    },
    {
      icon: "unorderedList.svg",
      alt: "Unordered List",
    },
    {
      icon: "indent.svg",
      alt: "Indent",
    },
    {
      icon: "alignLeft.svg",
      alt: "Align Left",
    },
    {
      icon: "alignCenter.svg",
      alt: "Align Center",
    },
    {
      icon: "alignRight.svg",
      alt: "Align Right",
    },
    {
      icon: "outdent.svg",
      alt: "Outdent",
    },
    {
      icon: "fontFamily.svg",
      alt: "Font Family",
    },
    {
      icon: "bold.svg",
      alt: "Bold",
      onClick: toggleBold,
    },
    {
      icon: "italic.svg",
      alt: "Italic",
      onClick: toggleItalic,
    },
    {
      icon: "underLine.svg",
      alt: "Underline",
    },
    {
      icon: "formatting.svg",
      alt: "formatting",
    },
  ];
  return (
    <div className={styles.textEditor}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        {/* Map over toolbarButtons to render buttons dynamically */}
        {toolbarButtons.map((button, index) => (
          <ToolbarButton
            key={index}
            icon={button.icon}
            alt={button.alt}
            onClick={button.onClick}
          />
        ))}
        {/* Add undo and redo buttons */}
        <ToolbarButton icon="undo.svg" alt="Undo" onClick={handleUndo} />
        <ToolbarButton icon="redo.svg" alt="Redo" onClick={handleRedo} />
      </div>
      {/* Editor content area */}
      <div
        ref={editorRef}
        className={styles.editorContent}
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default TextEditor;
