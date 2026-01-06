import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { CloudUploadIcon, Image01Icon, Search01Icon } from "hugeicons-react";
import { useEffect, useState } from "react";

interface CoverImageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (url: string) => void;
}

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
}

export function CoverImageModal({ open, onOpenChange, onSelect }: CoverImageModalProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "unsplash">("upload");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!debouncedQuery.trim()) {
        setImages([]);
        setHasSearched(false);
        return;
      }

      setIsSearching(true);
      setHasSearched(true);
      try {
        const res = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${debouncedQuery}&client_id=K63haBYEs8ZwXwSl7pA2U7TT0zrQGgOR7rfMWZm7akI`
        );
        setImages(res.data.results || []);
      } catch (error) {
        console.error("Failed to fetch images", error);
        setImages([]);
      } finally {
        setIsSearching(false);
      }
    };

    fetchImages();
  }, [debouncedQuery]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onSelect(url);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 bg-background p-0 sm:max-w-2xl overflow-hidden">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="font-medium text-lg">Add a cover image</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-[500px]">
          <div className="flex px-4 border-b">
            <button
              onClick={() => setActiveTab("upload")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "upload"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              Upload
            </button>
            <button
              onClick={() => setActiveTab("unsplash")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "unsplash"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              Unsplash
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden">
            {activeTab === "upload" ? (
              <div className="flex flex-col justify-center items-center p-8 h-full text-center animate-in duration-200 fade-in zoom-in-95">
                <div className="flex flex-col justify-center items-center bg-muted/5 hover:bg-muted/10 p-10 border-2 border-muted-foreground/25 hover:border-primary/50 border-dashed rounded-xl w-full max-w-sm transition-colors">
                  <div className="bg-background shadow-sm mb-4 p-4 rounded-full">
                    <CloudUploadIcon className="size-8 text-muted-foreground" />
                  </div>
                  <h3 className="mb-1 font-medium text-lg">Click to upload</h3>
                  <p className="mb-6 text-muted-foreground text-sm">SVG, PNG, JPG or GIF (max. 5MB)</p>

                  <div className="relative">
                    <Button variant="outline">
                      Choose File
                    </Button>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="slide-in-from-right-4 flex flex-col h-full animate-in duration-200 fade-in">
                <div className="z-10 bg-background p-4 border-b">
                  <div className="relative">
                    <Search01Icon className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
                    <Input
                      placeholder="Search Unsplash..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                  {isSearching ? (
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 pb-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div key={`skeleton-${i}`} className="bg-muted/40 rounded-lg aspect-video animate-pulse" />
                      ))}
                    </div>
                  ) : images.length > 0 ? (
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-3 pb-4">
                      {images.map((img) => (
                        <button
                          key={img.id}
                          className="group relative bg-muted rounded-lg ring-primary hover:ring-2 ring-offset-2 aspect-video overflow-hidden transition-all"
                          onClick={() => {
                            onSelect(img.urls.regular);
                            onOpenChange(false);
                          }}
                        >
                          <img
                            src={img.urls.small}
                            alt={img.alt_description || "Unsplash image"}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                          <div className="bottom-0 left-0 absolute opacity-0 group-hover:opacity-100 p-2 w-full text-left truncate transition-opacity">
                            <span className="drop-shadow-md font-medium text-white text-xs">
                              {img.description || img.alt_description || "Unsplash"}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center py-20 text-muted-foreground">
                      <Image01Icon className="opacity-20 mb-2 size-12" />
                      {hasSearched ? (
                        <p>No results found for "{debouncedQuery}"</p>
                      ) : (
                        <p>Search for an image</p>
                      )}
                    </div>
                  )}
                </ScrollArea>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
