// toolbarButtonData.ts
interface ToolbarButtonData {
  icon: string;
  alt: string;
  onClick?: () => void;
}
const toggleBold = () => {
  document.execCommand("bold");
};

// Function to toggle italic style
const toggleItalic = () => {
  document.execCommand("italic");
};
export const toolbarButtonData: ToolbarButtonData[] = [
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

// Define toggleBold and toggleItalic functions here if needed
