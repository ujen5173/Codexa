import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { platformName } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Dot, UserPlus, X } from "lucide-react";
import { Img } from "react-image";

const RightSidebar = () => {
  return (
    <section className="space-y-6 flex-3">
      <div className="rounded-2xl bg-white flex-2 border border-border shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-slate-700">Changelog</h4>
          <Button className="p-0 h-min" variant={"link"}>
            <X
              className="text-slate-600"
              style={{ width: "20px", height: "20px" }}
            />
          </Button>
        </div>
        <div className="mb-2 relative">
          <div className="flex items-center w-max border gap-1 border-zinc-700 bg-zinc-800 px-4 py-2 rounded-full absolute top-1/2 left-1/2 -translate-1/2">
            <Img
              className="select-none object-cover"
              src="/logo-white.svg"
              alt="Codexa white logo"
              draggable={false}
              width={17}
              height={17}
            />
            <Separator
              orientation="vertical"
              className="h-[15px!important] bg-slate-700"
            />
            <span className="text-slate-200 text-sm font-medium">
              Changelog
            </span>
          </div>
          <Img
            src="/changelog-bg.png"
            className="w-full h-40 rounded-2xl object-cover"
            width={200}
            height={70}
          />
        </div>
        <Link to="/">
          <h3 className="hover:underline text-base leading-tight mb-2 font-medium text-slate-700">
            Streamlined workflow management with real-time collaboration,
            analytics, and a sleek, modern interface.
          </h3>
        </Link>
        <div className="flex mb-4 items-center">
          <span className="text-xs text-slate-600">Dec 18, 2025</span>
          <Dot className="text-slate-600" />
          <span className="bg-green-200 px-2 py-0.5 text-xs rounded-full text-green-600">
            New
          </span>
        </div>
        <Button variant={"outline"} className="w-full text-slate-600">
          View previous changelog
        </Button>
      </div>

      <div className="pro-banner rounded-2xl flex-2 p-4">
        <h4 className="text-lg font-semibold text-slate-700 mb-2">
          Introducing {platformName} Pro 🚀
        </h4>
        <p className="text-sm text-slate-600 mb-4">
          Level up your publishing experience with {platformName} Pro with
          powerful AI and premium features.
        </p>
        <div className="flex items-center gap-2">
          <Button effect={"shineHover"} variant={"dark"}>
            Upgrade now
          </Button>
          <Button
            effect="hoverUnderline"
            variant={"outline"}
            className="hover:bg-white"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="rounded-2xl bg-white flex-2 border border-border shadow-sm p-4">
        <div className="flex items-center mb-4 justify-between gap-4">
          <h4 className="text-lg font-semibold text-slate-700">
            Trending Articles
          </h4>
          <Select value={"1_week"}>
            <SelectTrigger className="w-28">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1_week">1 week</SelectItem>
                <SelectItem value="1_month">1 month</SelectItem>
                <SelectItem value="3_month">3 month</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4 mb-4">
          <div className="">
            <h4 className="text-base font-medium text-slate-700">
              When AI Can Pay, Trust Must Follow
            </h4>
            <div className="flex items-center">
              <span className="text-sm text-slate-600">Mary udoudo</span>{" "}
              <Dot className="text-slate-700" />{" "}
              <span className="text-sm text-slate-600">10 reads</span>
            </div>
          </div>
          <div className="">
            <h4 className="text-base font-medium text-slate-700">
              Use Case Diagrams: What They Are and Why They Matter
            </h4>
            <div className="flex items-center">
              <span className="text-sm text-slate-600">Jessica</span>{" "}
              <Dot className="text-slate-700" />{" "}
              <span className="text-sm text-slate-600">81 reads</span>
            </div>
          </div>
          <div className="">
            <h4 className="text-base font-medium text-slate-700">
              AEON: When AI Learns to Pay — Building Trust in the Agentic
              Economy
            </h4>
            <div className="flex items-center">
              <span className="text-sm text-slate-600">Mary udoudo</span>{" "}
              <Dot className="text-slate-700" />{" "}
              <span className="text-sm text-slate-600">35 reads</span>
            </div>
          </div>
        </div>
        <Button
          icon={ChevronDown}
          iconPlacement="right"
          variant={"outline"}
          className="w-full"
        >
          See more
        </Button>
      </div>
      <div className="rounded-2xl bg-white flex-2 border border-border shadow-sm p-4">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-slate-700">Recent Reads</h4>
        </div>
        <div className="space-y-4 mb-4">
          <div className="">
            <h4 className="text-base font-medium text-slate-700">
              When AI Can Pay, Trust Must Follow
            </h4>
            <div className="flex items-center">
              <span className="text-sm text-slate-600">Mary udoudo</span>{" "}
              <Dot className="text-slate-700" />{" "}
              <span className="text-sm text-slate-600">10 reads</span>
            </div>
          </div>
          <div className="">
            <h4 className="text-base font-medium text-slate-700">
              Use Case Diagrams: What They Are and Why They Matter
            </h4>
            <div className="flex items-center">
              <span className="text-sm text-slate-600">Jessica</span>{" "}
              <Dot className="text-slate-700" />{" "}
              <span className="text-sm text-slate-600">81 reads</span>
            </div>
          </div>
          <div className="">
            <h4 className="text-base font-medium text-slate-700">
              AEON: When AI Learns to Pay — Building Trust in the Agentic
              Economy
            </h4>
            <div className="flex items-center">
              <span className="text-sm text-slate-600">Mary udoudo</span>{" "}
              <Dot className="text-slate-700" />{" "}
              <span className="text-sm text-slate-600">35 reads</span>
            </div>
          </div>
        </div>
        <Button
          icon={ChevronDown}
          iconPlacement="right"
          variant={"outline"}
          className="w-full"
        >
          See more
        </Button>
      </div>
      <div className="rounded-2xl bg-white flex-2 border border-border shadow-sm p-4">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-slate-700">
            Top Contributor
          </h4>
        </div>
        <div className="space-y-4 font-inter">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Img
                src={"/users/1.png"}
                className="size-7 object-cover rounded-full"
              />
              <p className="text-sm text-slate-700 font-medium">
                Ramu Ranjit
              </p>
            </div>
            <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Img
                src={"/users/2.png"}
                className="size-7 object-cover rounded-full"
              />
              <p className="text-sm text-slate-700 font-medium">
                Yunzen Richardson
              </p>
            </div>
            <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Img
                src={"/users/3.png"}
                className="size-7 object-cover rounded-full"
              />
              <p className="text-sm text-slate-700 font-medium">Coley</p>
            </div>
            <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Img
                src={"/users/4.png"}
                className="size-7 object-cover rounded-full"
              />
              <p className="text-sm text-slate-700 font-medium">
                Sujita thapa
              </p>
            </div>
            <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white flex-2 border border-border shadow-sm p-4">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-slate-700">Bookmarks</h4>
        </div>
        <div className="flex items-center justify-center h-32">
          <p className="text-sm font-medium text-slate-600 font-inter">
            Save something. You’ll want it later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
