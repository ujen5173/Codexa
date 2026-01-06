"use client";

import "@/content.css";
import { cx } from "class-variance-authority";
import {
  EditorBubble,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorRoot,
  handleCommandNavigation,
  ImageResizer,
  JSONContent,
} from "novel";
import { useState } from "react";
import { LinkSelector } from "./bubble-menu/link-selector";
import { NodeSelector } from "./bubble-menu/node-selector";
import { TextButtons } from "./bubble-menu/text-buttons";
import { defaultExtensions } from "./extensions";
import { slashCommand, suggestionItems } from "./slash-command";

interface EditorProps {
  initialValue?: JSONContent;
  onChange?: (value: JSONContent) => void;
  className?: string;
}

const AdvancedEditor = ({ initialValue, onChange, className }: EditorProps) => {
  const [content, setContent] = useState<JSONContent | undefined>(initialValue);
  const [openNode, setOpenNode] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  return (
    <EditorRoot>
      <EditorContent
        initialContent={initialValue}
        extensions={[...defaultExtensions, slashCommand]}
        className={cx("relative min-h-[500px] w-full bg-background blog-content", className)}
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class: `pb-96 prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
          }
        }}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
          onChange?.(json);
        }}
        slotAfter={<ImageResizer />}
      >
        <EditorCommand className="z-50 bg-background shadow-md px-1 py-2 border border-muted rounded-md w-72 h-auto max-h-[330px] overflow-y-auto transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item?.command!(val)}
                className="flex items-center space-x-2 aria-selected:bg-accent hover:bg-accent px-2 py-1 rounded-md w-full text-sm text-left cursor-pointer"
                key={item.title}
              >
                <div className="flex justify-center items-center bg-background border border-muted rounded-md w-10 h-10">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>

        <EditorBubble
          tippyOptions={{
            placement: "bottom-start",
          }}
          className='flex bg-background shadow-xl border border-muted rounded w-fit max-w-[90vw] overflow-hidden'>
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <TextButtons />
        </EditorBubble>
      </EditorContent>
    </EditorRoot>
  );
};

export default AdvancedEditor;
