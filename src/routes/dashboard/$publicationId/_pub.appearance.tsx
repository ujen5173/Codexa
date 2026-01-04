import { Button } from "@/components/ui/button";
import {
  ColorPicker,
  ColorPickerAlphaSlider,
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerEyeDropper,
  ColorPickerFormatSelect,
  ColorPickerHueSlider,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerTrigger,
} from "@/components/ui/color-picker";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadList,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { CloudUploadIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute(
  "/dashboard/$publicationId/_pub/appearance"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedLayout, setSelectedLayout] = useState<
    "magazine" | "stacked" | "grid"
  >("stacked");
  const [color, setColor] = useState("#f59e0b");
  const [showReadTime, setShowReadTime] = useState(true);
  const [useDefaultBlogTheme, setUseDefaultBlogTheme] = useState(false);
  const [showArticleViews, setShowArticleViews] = useState(true);
  const [enableSubscribePrompt, setEnableSubscribePrompt] = useState(true);

  // File states
  const [logoFiles, setLogoFiles] = useState<File[]>([]);
  const [darkLogoFiles, setDarkLogoFiles] = useState<File[]>([]);
  const [faviconFiles, setFaviconFiles] = useState<File[]>([]);
  const [socialImageFiles, setSocialImageFiles] = useState<File[]>([]);

  return (
    <div className="relative font-inter">
      <div className="mx-auto px-4 py-10 w-full max-w-4xl min-h-screen">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            Appearance
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Customize your publication
          </p>
        </div>

        <Separator className="mb-8" />

        <div className="space-y-12">
          {/* Homepage layout */}
          <section className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg">Homepage layout</h2>
              <p className="text-muted-foreground text-sm">
                Select the layout for your blog
              </p>
            </div>

            <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
              {/* Magazine Layout */}
              <div
                className={cn(
                  "p-4 border-2 hover:border-primary/50 rounded-lg transition-all cursor-pointer",
                  selectedLayout === "magazine"
                    ? "border-primary bg-primary/5"
                    : "border-muted"
                )}
                onClick={() => setSelectedLayout("magazine")}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-sm">Magazine</span>
                  <div
                    className={cn(
                      "border border-primary rounded-full w-4 h-4",
                      selectedLayout === "magazine" && "bg-primary"
                    )}
                  />
                </div>
                <div className="space-y-2 pointer-events-none select-none">
                  <div className="bg-muted/50 rounded-md w-full h-24" />
                  <div className="gap-2 grid grid-cols-2">
                    <div className="bg-muted/50 rounded-md h-16" />
                    <div className="bg-muted/50 rounded-md h-16" />
                  </div>
                  <div className="space-y-1">
                    <div className="bg-muted/50 rounded w-3/4 h-3" />
                    <div className="bg-muted/50 rounded w-1/2 h-3" />
                  </div>
                </div>
              </div>

              {/* Stacked Layout */}
              <div
                className={cn(
                  "p-4 border-2 hover:border-primary/50 rounded-lg transition-all cursor-pointer",
                  selectedLayout === "stacked"
                    ? "border-primary bg-primary/5"
                    : "border-muted"
                )}
                onClick={() => setSelectedLayout("stacked")}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-sm">Stacked (default)</span>
                  <div
                    className={cn(
                      "border border-primary rounded-full w-4 h-4",
                      selectedLayout === "stacked" && "bg-primary"
                    )}
                  />
                </div>
                <div className="space-y-3 pointer-events-none select-none">
                  <div className="space-y-2">
                    <div className="bg-muted/50 rounded-md w-full h-12" />
                    <div className="space-y-1">
                      <div className="bg-muted/50 rounded w-full h-2" />
                      <div className="bg-muted/50 rounded w-2/3 h-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-muted/50 rounded-md w-full h-12" />
                    <div className="space-y-1">
                      <div className="bg-muted/50 rounded w-full h-2" />
                      <div className="bg-muted/50 rounded w-2/3 h-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Layout */}
              <div
                className={cn(
                  "p-4 border-2 hover:border-primary/50 rounded-lg transition-all cursor-pointer",
                  selectedLayout === "grid"
                    ? "border-primary bg-primary/5"
                    : "border-muted"
                )}
                onClick={() => setSelectedLayout("grid")}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-sm">Grid</span>
                  <div
                    className={cn(
                      "border border-primary rounded-full w-4 h-4",
                      selectedLayout === "grid" && "bg-primary"
                    )}
                  />
                </div>
                <div className="gap-2 grid grid-cols-2 pointer-events-none select-none">
                  <div className="space-y-1">
                    <div className="bg-muted/50 rounded-md h-12" />
                    <div className="bg-muted/50 rounded w-full h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="bg-muted/50 rounded-md h-12" />
                    <div className="bg-muted/50 rounded w-full h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="bg-muted/50 rounded-md h-12" />
                    <div className="bg-muted/50 rounded w-full h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="bg-muted/50 rounded-md h-12" />
                    <div className="bg-muted/50 rounded w-full h-2" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Logo and Favicon */}
          <section className="space-y-8">
            <h2 className="font-semibold text-lg">Logo and favicon</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label>Publication logo</Label>
                  <p className="text-muted-foreground text-xs">
                    For the best result, a .png image with a transparent
                    background is recommended.
                  </p>
                </div>
                <FileUpload
                  value={logoFiles}
                  onValueChange={setLogoFiles}
                  accept="image/png"
                  maxFiles={1}
                >
                  <FileUploadDropzone className="bg-muted/5 hover:bg-muted/10 p-8 border-2 border-muted hover:border-primary/50 border-dashed rounded-lg transition-colors cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <CloudUploadIcon className="w-8 h-8 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-semibold text-primary">
                          Click to upload image
                        </span>
                        <p className="mt-1 text-muted-foreground text-xs">
                          Recommended size: 500 x 125 px
                        </p>
                      </div>
                    </div>
                  </FileUploadDropzone>
                  <FileUploadList>
                    {logoFiles.map((file, i) => (
                      <FileUploadItem key={i} value={file} />
                    ))}
                  </FileUploadList>
                </FileUpload>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <Label>Publication logo (dark theme)</Label>
                  <p className="text-muted-foreground text-xs">
                    Logo for dark theme. For the best result, a .png image with
                    a transparent background is recommended.
                  </p>
                </div>
                <FileUpload
                  value={darkLogoFiles}
                  onValueChange={setDarkLogoFiles}
                  accept="image/png"
                  maxFiles={1}
                >
                  <FileUploadDropzone className="bg-muted/5 hover:bg-muted/10 p-8 border-2 border-muted hover:border-primary/50 border-dashed rounded-lg transition-colors cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <CloudUploadIcon className="w-8 h-8 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-semibold text-primary">
                          Click to upload image
                        </span>
                        <p className="mt-1 text-muted-foreground text-xs">
                          Recommended size: 500 x 125 px
                        </p>
                      </div>
                    </div>
                  </FileUploadDropzone>
                  <FileUploadList>
                    {darkLogoFiles.map((file, i) => (
                      <FileUploadItem key={i} value={file} />
                    ))}
                  </FileUploadList>
                </FileUpload>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="space-y-1">
                <Label>Favicon</Label>
                <p className="text-muted-foreground text-xs">
                  For the best result, upload a square logo. This will replace
                  the logo on smaller screens and browser tabs.
                </p>
              </div>
              <div className="max-w-sm">
                <FileUpload
                  value={faviconFiles}
                  onValueChange={setFaviconFiles}
                  accept="image/*"
                  maxFiles={1}
                >
                  <FileUploadDropzone className="bg-muted/5 hover:bg-muted/10 p-8 border-2 border-muted hover:border-primary/50 border-dashed rounded-lg transition-colors cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <CloudUploadIcon className="w-8 h-8 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-semibold text-primary">
                          Click to upload image
                        </span>
                        <p className="mt-1 text-muted-foreground text-xs">
                          Recommended size: 500 x 500 px
                        </p>
                      </div>
                    </div>
                  </FileUploadDropzone>
                  <FileUploadList>
                    {faviconFiles.map((file, i) => (
                      <FileUploadItem key={i} value={file} />
                    ))}
                  </FileUploadList>
                </FileUpload>
              </div>
            </div>
          </section>

          <Separator />

          {/* More customization */}
          <section className="space-y-8">
            <h2 className="font-semibold text-lg">More customization</h2>

            <div className="space-y-4 max-w-sm">
              <Label>Header color</Label>
              <div className="flex items-center gap-2">
                <div className="inline-block p-1 border rounded-md">
                  <ColorPicker
                    defaultFormat="hex"
                    defaultValue={color}
                    onValueChange={setColor}
                  >
                    <ColorPickerTrigger asChild>
                      <ColorPickerSwatch />
                    </ColorPickerTrigger>
                    <ColorPickerContent>
                      <ColorPickerArea />
                      <div className="flex items-center gap-2">
                        <ColorPickerEyeDropper />
                        <div className="flex flex-col flex-1 gap-2">
                          <ColorPickerHueSlider />
                          <ColorPickerAlphaSlider />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ColorPickerFormatSelect />
                        <ColorPickerInput />
                      </div>
                    </ColorPickerContent>
                  </ColorPicker>
                </div>
                <Input
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="space-y-1">
                <Label>Image for social media sharing</Label>
                <p className="text-muted-foreground text-xs">
                  This image will appear when your page is shared on Twitter,
                  Facebook and other social media websites.
                </p>
              </div>
              <div className="max-w-xl">
                <FileUpload
                  value={socialImageFiles}
                  onValueChange={setSocialImageFiles}
                  accept="image/*"
                  maxFiles={1}
                >
                  <FileUploadDropzone className="bg-muted/5 hover:bg-muted/10 p-12 border-2 border-muted hover:border-primary/50 border-dashed rounded-lg transition-colors cursor-pointer">
                    <div className="flex flex-col justify-center items-center gap-2 text-center">
                      <CloudUploadIcon className="w-10 h-10 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-semibold text-primary">
                          Click to upload image
                        </span>
                        <p className="mt-1 text-muted-foreground text-xs">
                          Recommended size: 800 x 420 px
                        </p>
                      </div>
                    </div>
                  </FileUploadDropzone>
                  <FileUploadList>
                    {socialImageFiles.map((file, i) => (
                      <FileUploadItem key={i} value={file} />
                    ))}
                  </FileUploadList>
                </FileUpload>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <Label className="text-base">Read time</Label>
                  <p className="text-muted-foreground text-sm">
                    Show read time on articles.
                  </p>
                </div>
                <Switch
                  checked={showReadTime}
                  onCheckedChange={setShowReadTime}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <Label className="text-base">Default blog theme</Label>
                  <p className="text-muted-foreground text-sm">
                    Set blog theme to dark mode by default.
                  </p>
                </div>
                <Switch
                  checked={useDefaultBlogTheme}
                  onCheckedChange={setUseDefaultBlogTheme}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <Label className="text-base">Article views</Label>
                  <p className="text-muted-foreground text-sm">
                    Show views on article.
                  </p>
                </div>
                <Switch
                  checked={showArticleViews}
                  onCheckedChange={setShowArticleViews}
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <Label className="text-base">
                    Subscribe and follow modal prompts
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Show modal prompts to unauthenticated users when they read
                    your article.
                  </p>
                </div>
                <Switch
                  checked={enableSubscribePrompt}
                  onCheckedChange={setEnableSubscribePrompt}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bottom-0 sticky bg-slate-950/50 backdrop-blur-sm p-4 border-t">
        <div className="flex justify-end mx-auto max-w-4xl">
          <Button size="lg" className="rounded-full">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
