import {
  AIHighlight,
  HorizontalRule,
  Placeholder,
  StarterKit,
  TaskItem,
  TaskList,
  TiptapImage,
  TiptapLink,
  UpdatedImage,
  UploadImagesPlugin,
} from "novel";

// TODO: Implement actual image upload
const onUpload = (file: File) => {
  return Promise.resolve({
    src: URL.createObjectURL(file),
    alt: file.name,
  });
};

export const defaultExtensions = [
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc list-outside leading-3 -mt-2",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal list-outside leading-3 -mt-2",
      },
    },
    listItem: {
      HTMLAttributes: {
        class: "leading-normal -mb-2",
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: "border-l-4 border-primary pl-4 italic",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class:
          "rounded-md bg-muted text-muted-foreground p-5 font-mono font-medium",
      },
    },
    code: {
      HTMLAttributes: {
        class:
          "rounded-md bg-muted px-1.5 py-1 font-mono font-medium text-foreground",
        spellcheck: "false",
      },
    },
    horizontalRule: false,
    dropcursor: {
      color: "#DBEAFE",
      width: 4,
    },
    gapcursor: false,
  }),
  // patch to fix horizontal rule
  HorizontalRule.configure({
    HTMLAttributes: {
      class: "mt-4 mb-6 border-t border-muted-foreground",
    },
  }),
  TiptapLink.configure({
    HTMLAttributes: {
      class:
        "text-primary underline underline-offset-[3px] hover:text-primary/80 transition-colors cursor-pointer font-medium",
    },
  }),
  TiptapImage.extend({
    addProseMirrorPlugins() {
      return [
        UploadImagesPlugin({
          imageClass: "rounded-lg border border-muted",
        }),
      ];
    },
  }).configure({
    allowBase64: true,
    HTMLAttributes: {
      class: "rounded-lg border border-muted",
    },
  }),
  UpdatedImage.configure({
    HTMLAttributes: {
      class: "rounded-lg border border-muted",
    },
  }),
  Placeholder.configure({
    placeholder: ({ node }: { node: any }) => {
      if (node.type.name === "heading") {
        return `Heading ${node.attrs.level}`;
      }
      return "Press '/' for commands...";
    },
    includeChildren: true,
  }),
  AIHighlight,
  TaskList.configure({
    HTMLAttributes: {
      class: "not-prose pl-2",
    },
  }),
  TaskItem.configure({
    HTMLAttributes: {
      class: "flex gap-2 items-start my-4",
    },
    nested: true,
  }),
];
