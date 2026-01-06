"use client";

import Logo from "@/components/common/logo";
import AdvancedEditor from "@/components/editor/advanced-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import {
  Cancel01Icon,
  ImageAdd01Icon,
  Moon02Icon, SidebarLeft01Icon,
  SidebarRight01Icon,
  Sun03Icon,
  TextIcon,
  ViewIcon
} from "hugeicons-react";
import { useState } from "react";
import { useTheme } from "../theme-provider";
import { CoverImageModal } from "./cover-image-modal";

const WritingEditor = () => {
  const { open, toggleSidebar } = useSidebar();

  const { theme, setTheme } = useTheme();
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isCoverModalOpen, setIsCoverModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [content, setContent] = useState({});

  return (
    <div className="relative flex flex-col w-full h-full min-h-screen animate-in duration-500 fade-in">
      <header className="top-0 z-40 sticky flex justify-between items-center backdrop-blur-md px-4 py-3 border-border dark:border-slate-600/60 border-b">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            className="mr-2 w-8 h-8 text-slate-700 dark:text-slate-100"
            onClick={toggleSidebar}
            icon={open ? SidebarRight01Icon : SidebarLeft01Icon}
          />
          <span className="mr-2 font-medium text-muted-foreground text-sm">
            <span className="hidden sm:inline-block">
              Drafts <span className="mx-2">/</span>
            </span>
            <span className="text-foreground">{title || "Untitled Story"}</span>
          </span>
        </div>

        <div className="hidden lg:block">
          <Logo />
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark")
            }}
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun03Icon className="text-slate-800 dark:text-slate-200" />
              ) : (
                <Moon02Icon className="text-slate-800 dark:text-slate-200" />
              )}
            </motion.span>
          </Button>

          <span className="hidden md:inline lg:inline 2xl:inline 3xl:inline xl:inline text-muted-foreground text-xs">Saved</span>

          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex rounded-full text-muted-foreground hover:text-foreground"
            icon={ViewIcon}
          >
            Preview
          </Button>

          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 px-4 rounded-full font-semibold text-primary-foreground transition-all"
          >
            Publish
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto px-6 py-12 max-w-6xl">
          <div className="space-y-8">
            <div className="group relative transition-all duration-300 ease-in-out">
              {coverImage ? (
                <div className="relative shadow-sm group-hover:shadow-md rounded-xl w-full aspect-[21/10] overflow-hidden transition-all">
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover animate-in duration-500 fade-in zoom-in-50"
                  />
                  <div className="top-4 right-4 absolute flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-background/80 hover:bg-background shadow-sm backdrop-blur text-foreground"
                      onClick={() => setIsCoverModalOpen(true)}
                    >
                      Change
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon-sm"
                      className="shadow-sm w-8 h-8"
                      onClick={() => setCoverImage(null)}
                      icon={Cancel01Icon}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 h-10">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCoverModalOpen(true)}
                    className="-ml-3 text-muted-foreground hover:text-foreground transition-colors"
                    icon={ImageAdd01Icon}
                  >
                    Add Cover
                  </Button>

                  {!showSubtitle && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSubtitle(true)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      icon={TextIcon}
                    >
                      Add Subtitle
                    </Button>
                  )}
                </div>
              )}

              {coverImage && !showSubtitle && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSubtitle(true)}
                  className="mt-2 text-muted-foreground hover:text-foreground transition-colors"
                  icon={TextIcon}
                >
                  Add Subtitle
                </Button>
              )}
            </div>

            <div className="space-y-6">
              <Input
                type="text"
                placeholder="Article Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent dark:bg-transparent shadow-none p-0 border-0 rounded-none focus-visible:ring-0 w-full h-auto font-extrabold text-slate-900 dark:text-slate-100 text-4xl md:text-5xl leading-[1.15] tracking-tight"

              />

              {showSubtitle && (
                <div className="relative slide-in-from-top-2 animate-in duration-300 fade-in">
                  <Input
                    className="bg-transparent dark:bg-transparent shadow-none p-0 border-0 rounded-none focus-visible:ring-0 w-full h-auto font-medium placeholder:text-muted-foreground/40 text-2xl"
                    type="text"
                    placeholder="Article Subtitle..."
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="top-1/2 right-3 absolute text-muted-foreground hover:text-destructive transition-colors -translate-y-1/2"
                    onClick={() => {
                      setShowSubtitle(false);
                      setSubtitle("");
                    }}
                    icon={Cancel01Icon}
                  />
                </div>
              )}
            </div>

            <div className="relative w-full">
              <AdvancedEditor
                initialValue={content ? content : undefined}
                onChange={setContent}
                className="w-full min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      <CoverImageModal
        open={isCoverModalOpen}
        onOpenChange={setIsCoverModalOpen}
        onSelect={setCoverImage}
      />
    </div>
  );
};

export default WritingEditor;
