import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/integrations/trpc/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Eye, Image as ImageIcon, Menu, Send, Type, X } from "lucide-react";
import { useEffect, useState } from "react";

interface WritingEditorProps {
  articleId?: string;
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

const WritingEditor = ({
  articleId,
  onSidebarToggle,
  isSidebarOpen,
}: WritingEditorProps) => {
  const trpc = useTRPC();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [content, setContent] = useState<string>("");
  const [contentJson, setContentJson] = useState<any>(null);
  const [focusMode, setFocusMode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const { data: article, isLoading } = useQuery(
    trpc.writing.getById.queryOptions(
      { id: articleId! },
      { enabled: !!articleId }
    )
  );

  const createArticle = useMutation(trpc.writing.create.mutationOptions());
  const updateArticle = useMutation(trpc.writing.update.mutationOptions());

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setDescription(article.description || "");
      setThumbnail(article.thumbnail || "");
      setContent(article.content || "");
      try {
        if (article.content) {
          const parsed =
            typeof article.content === "string"
              ? JSON.parse(article.content)
              : article.content;
          setContentJson(parsed);
        } else {
          setContentJson(null);
        }
      } catch {
        setContentJson(null);
      }
      setShowDescription(!!article.description);
    } else if (!articleId) {
      setTitle("");
      setDescription("");
      setThumbnail("");
      setContent("");
      setContentJson(null);
      setShowDescription(false);
    }
  }, [article, articleId]);

  const handleSave = async (status: "draft" | "published" = "draft") => {
    try {
      const contentToSave = contentJson ? JSON.stringify(contentJson) : content;

      if (articleId) {
        await updateArticle.mutateAsync({
          id: articleId,
          title,
          description: showDescription ? description : undefined,
          content: contentToSave,
          thumbnail: thumbnail || undefined,
          status,
        });
      } else {
        const newArticle = await createArticle.mutateAsync({
          title: title || "Untitled",
          description: showDescription ? description : undefined,
          content: contentToSave,
          thumbnail: thumbnail || undefined,
          status,
        });
        navigate({
          to: "/new",
          search: { id: newArticle.id },
        });
      }
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  if (isLoading && articleId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-slate-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-screen ${focusMode ? "bg-slate-50" : ""}`}>
      <div className="flex justify-between items-center bg-white p-4 border-slate-200 border-b">
        <div className="flex items-center gap-2">
          {!isSidebarOpen && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onSidebarToggle}
              className="w-8 h-8"
            >
              <Menu className="size-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFocusMode(!focusMode)}
            className={focusMode ? "bg-slate-100" : ""}
          >
            {focusMode ? "Exit Focus" : "Focus Mode"}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            icon={Eye}
            onClick={() => setShowPreview(!showPreview)}
          >
            Preview
          </Button>
          <div className="relative">
            <Button
              size="sm"
              onClick={() => handleSave("published")}
              disabled={updateArticle.isPending || createArticle.isPending}
              icon={Send}
            >
              Publish
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto px-6 py-8 max-w-4xl">
          <div className="space-y-6">
            {thumbnail && (
              <div className="group relative">
                <img
                  src={thumbnail}
                  alt="Cover"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="top-2 right-2 absolute opacity-0 group-hover:opacity-100"
                  onClick={() => setThumbnail("")}
                >
                  <X className="size-4" />
                </Button>
              </div>
            )}
            <div className="flex items-center">
              {!thumbnail && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const url = prompt("Enter image URL:");
                    if (url) setThumbnail(url);
                  }}
                  icon={ImageIcon}
                  className="rounded-full"
                >
                  Add Cover Image
                </Button>
              )}
              {!showDescription && (
                <Button
                  className="rounded-full"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDescription(true)}
                  icon={Type}
                >
                  Add Subtitle
                </Button>
              )}
            </div>

            <Input
              type="text"
              placeholder="Article Title"
              value={title}
              variant={"ghost-outline"}
              onChange={(e) => setTitle(e.target.value)}
              size="lg"
              className="p-0 border-0 focus-visible:ring-0 h-auto font-bold text-4xl"
            />

            {showDescription && (
              <Input
                type="text"
                placeholder="Article Subtitle"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-0 border-0 focus-visible:ring-0 h-auto text-slate-600 text-xl"
              />
            )}

            <div className="min-h-[500px]">
              {/* <EditorRoot>
                <EditorContent
                  initialContent={contentJson}
                  onUpdate={({ editor }) => {
                    const json = editor.getJSON();
                    const html = editor.getHTML();
                    setContentJson(json);
                    setContent(html);
                  }}
                  className="max-w-none min-h-[500px] prose prose-slate"
                />
              </EditorRoot> */}
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="z-50 fixed inset-0 bg-white overflow-y-auto">
          <div className="mx-auto px-6 py-8 max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-2xl">Preview</h2>
              <Button variant="ghost" onClick={() => setShowPreview(false)}>
                <X className="mr-2 size-4" />
                Close
              </Button>
            </div>
            {thumbnail && (
              <img
                src={thumbnail}
                alt="Cover"
                className="mb-8 rounded-lg w-full h-64 object-cover"
              />
            )}
            <h1 className="mb-4 font-bold text-4xl">{title || "Untitled"}</h1>
            {showDescription && description && (
              <h2 className="mb-8 text-slate-600 text-xl">{description}</h2>
            )}
            <div
              className="max-w-none prose prose-slate"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WritingEditor;
