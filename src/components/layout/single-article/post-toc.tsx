import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface PostTOCProps {
  contentRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}

const PostTOC = ({ contentRef, onClose }: PostTOCProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!contentRef.current) return;

    const headingElements = contentRef.current.querySelectorAll("h2, h3, h4");
    const extractedHeadings: Heading[] = [];

    headingElements.forEach((heading) => {
      const id =
        heading.id ||
        heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
        "";
      if (!heading.id) {
        heading.id = id;
      }

      extractedHeadings.push({
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      });
    });

    setHeadings(extractedHeadings);
  }, [contentRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const headingElements = contentRef.current.querySelectorAll("h2, h3, h4");
      let currentActive = "";

      headingElements.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentActive = heading.id;
        }
      });

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentRef]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block top-1/2 left-24 z-50 fixed -translate-y-1/2">
      <div className="bg-white shadow-xl p-6 border border-slate-200 rounded-2xl w-64 max-h-[60vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-slate-800 text-sm">
            Table of Contents
          </h3>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            className="w-6 h-6"
          >
            <X className="size-4" />
          </Button>
        </div>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                activeId === heading.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              style={{ paddingLeft: `${(heading.level - 2) * 12 + 12}px` }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PostTOC;
