import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadList,
} from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { CloudUploadIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/settings/_base/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [profileImageFiles, setProfileImageFiles] = useState<File[]>([]);

  return (
    <div className="relative font-inter">
      <div className="mx-auto px-4 py-6 w-full max-w-4xl">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            General
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Update your profile information.
          </p>
        </div>
        <Separator className="mb-8" />
        <div className="space-y-8">
          {/* Profile Image Section */}
          <div className="space-y-4">
            <div className="space-y-1">
              <Label>Profile Picture</Label>
              <p className="text-muted-foreground text-xs">
                Upload a picture to display on your profile.
              </p>
            </div>
            <div className="max-w-sm">
              <FileUpload
                value={profileImageFiles}
                onValueChange={setProfileImageFiles}
                accept="image/*"
                maxFiles={1}
              >
                <FileUploadDropzone className="bg-muted/5 hover:bg-muted/10 p-8 border-2 border-muted hover:border-primary/50 border-dashed rounded-lg transition-colors cursor-pointer">
                  <div className="flex flex-col justify-center items-center gap-2 text-center">
                    <CloudUploadIcon className="w-8 h-8 text-muted-foreground" />
                    <div className="text-sm">
                      <span className="font-semibold text-primary">
                        Click to upload
                      </span>
                      <p className="mt-1 text-muted-foreground text-xs">
                        Recommended size: 500x500
                      </p>
                    </div>
                  </div>
                </FileUploadDropzone>
                <FileUploadList>
                  {profileImageFiles.map((file, i) => (
                    <FileUploadItem key={i} value={file} />
                  ))}
                </FileUploadList>
              </FileUpload>
            </div>
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="name">Display Name</Label>
            <Input
              id="name"
              placeholder="Your display name"
              defaultValue="John Doe"
              className="rounded-md"
            />
            <p className="text-[0.8rem] text-muted-foreground">
              This is your public display name.
            </p>
          </div>
          <div className="gap-2 grid">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="username"
              defaultValue="johndoe"
              className="rounded-md"
            />
            <p className="text-[0.8rem] text-muted-foreground">
              This is your public username. It will be used in your profile URL.
            </p>
          </div>
          <div className="gap-2 grid">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us a little bit about yourself"
              className="rounded-md resize-none"
              defaultValue="I'm a software engineer based in..."
            />
            <p className="text-[0.8rem] text-muted-foreground">
              You can @mention other users and organizations to link to them.
            </p>
          </div>
          <div className="gap-2 grid">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              placeholder="https://example.com"
              className="rounded-md"
            />
            <p className="text-[0.8rem] text-muted-foreground">
              Add a link to your website or portfolio.
            </p>
          </div>
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
