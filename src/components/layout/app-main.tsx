import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data, platformName } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import {
  Bookmark,
  BookmarkPlus,
  ChevronDown,
  Clock4,
  Compass,
  Dot,
  Home,
  MessageCircleCode,
  Plus,
  Ribbon,
  TrendingUp,
  UserPlus,
  Users,
  WandSparkles,
  X,
} from "lucide-react";
import { Img } from "react-image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const AppMain = () => {
  return (
    <main className="w-full bg-sky-50/50 px-4 py-6">
      <section className="flex gap-6 container mx-auto px-4">
        <section className="h-min sticky top-4 left-0 rounded-md bg-white flex-2 border border-border shadow-sm py-2">
          <ul className="font-inter">
            <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
              <Home
                className="text-slate-800"
                style={{ width: "17px", height: "17px" }}
              />
              <span className="font-medium text-sm text-slate-800">Home</span>
            </li>
            <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
              <Compass
                className="text-slate-800"
                style={{ width: "17px", height: "17px" }}
              />
              <span className="font-medium text-sm text-slate-800">
                Community
              </span>
            </li>
            <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
              <MessageCircleCode
                className="text-slate-800"
                style={{ width: "17px", height: "17px" }}
              />
              <span className="font-medium text-sm text-slate-800">Chat</span>
            </li>
            <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
              <Bookmark
                className="text-slate-800"
                style={{ width: "17px", height: "17px" }}
              />
              <span className="font-medium text-sm text-slate-800">
                Bookmarks
              </span>
            </li>
            <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
              <Plus
                className="text-slate-800"
                style={{ width: "17px", height: "17px" }}
              />
              <span className="font-medium text-sm text-slate-800">
                Write something
              </span>
            </li>
          </ul>
          <div className="px-2">
            <Separator />
          </div>
          <div className="py-4 px-2">
            <div className="flex items-center mb-2 px-2 justify-between gap-4">
              <p className="text-sm text-slate-700 font-semibold">
                Trending tags
              </p>
              <TrendingUp
                className="text-green-600"
                style={{ width: "17px", height: "17px" }}
              />
            </div>
            <ul className="">
              <Link to="/">
                <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
                  <span className="text-sm text-slate-800">Javascript</span>
                  <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                    99+
                  </span>
                </li>
              </Link>
              <Link to="/">
                <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
                  <span className="text-sm text-slate-800">CI/CD</span>
                  <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                    67+
                  </span>
                </li>
              </Link>
              <Link to="/">
                <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
                  <span className="text-sm text-slate-800">Cloudflare</span>
                  <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                    44+
                  </span>
                </li>
              </Link>
              <Link to="/">
                <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
                  <span className="text-sm text-slate-800">Tanstack start</span>
                  <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                    38+
                  </span>
                </li>
              </Link>
              <Link to="/">
                <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
                  <span className="text-sm text-slate-800">Next.js</span>
                  <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                    30+
                  </span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="px-2">
            <Separator className="w-10" />
          </div>
          <div className="px-4 pb-2 pt-3">
            <p className="text-xs text-slate-700">
              &copy; {new Date().getFullYear()} {platformName} LLC
            </p>
          </div>
        </section>

        <section className="rounded-sm space-y-4 font-inter flex-8">
          <div className="flex gap-1">
            <Button
              className="hover:border-transparent hover:bg-blue-300/20 bg-blue-300/20 hover:text-primary font-medium text-primary"
              variant="ghost"
              icon={WandSparkles}
            >
              Personalized
            </Button>
            <Button
              className="hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 font-medium text-slate-700"
              variant="ghost"
              icon={Users}
            >
              Following
            </Button>
            <Button
              className="hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 font-medium text-slate-700"
              variant="ghost"
              icon={Ribbon}
            >
              Featured
            </Button>
            <Button
              className="hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 font-medium text-slate-700"
              variant="ghost"
              icon={Clock4}
            >
              Recent
            </Button>
          </div>
          <div className="space-y-4">
            {data["posts"].map((article, idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-border p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Img
                      src={`/users/${idx + 1}.png`}
                      className="size-10 rounded-full object-cover"
                    />
                    <div className="">
                      <p className="text-base font-semibold text-slate-700">
                        {article.author.name}
                      </p>
                      <div className="flex items-center">
                        <p className="text-sm text-slate-700">
                          {article.author.blog.replace(
                            "hashnode",
                            platformName.toLowerCase()
                          )}
                        </p>
                        <Dot className="text-slate-700" />
                        <span className="text-slate-700 text-sm">
                          {article.published}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl mb-2 font-bold text-slate-800">
                      {article.title}
                    </p>
                    <p className="text-base mb-6 text-slate-600">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">
                        {article.likes && <>{article.likes} likes</>}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {article.tags.map((tag) => (
                            <Link to={`/t/${tag}`}>
                              <Badge
                                key={tag}
                                className="hover:bg-slate-200 bg-slate-100 text-slate-700 border-transparent px-2.5 py-1"
                                variant={"outline"}
                              >
                                {tag}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                        <Separator
                          className="h-[17px!important]"
                          orientation="vertical"
                        />
                        <BookmarkPlus
                          className="text-slate-700 stroke-1"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-4 flex-3">
          <div className="rounded-sm bg-white flex-2 border border-border shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold text-slate-700">
                Changelog
              </h4>
              <Button className="p-0 h-min" variant={"link"}>
                <X
                  className="text-slate-600"
                  style={{ width: "20px", height: "20px" }}
                />
              </Button>
            </div>
            <div className="mb-2 relative">
              <div className="flex items-center border gap-1 w-fit border-zinc-700 bg-zinc-800 px-4 py-2 rounded-full absolute top-1/2 left-1/2 -translate-1/2">
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
                className="w-full h-40 rounded-sm object-cover"
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

          <div className="pro-banner rounded-sm flex-2 p-4">
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
          <div className="rounded-sm bg-white flex-2 border border-border shadow-sm p-4">
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
          <div className="rounded-sm bg-white flex-2 border border-border shadow-sm p-4">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-slate-700">
                Recent Reads
              </h4>
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
          <div className="rounded-sm bg-white flex-2 border border-border shadow-sm p-4">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-slate-700">
                Top Contributor
              </h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Img
                    src={"/users/1.png"}
                    className="size-8 object-cover rounded-full"
                  />
                  <p className="text-base text-slate-700 font-medium">
                    Ramu Ranjit
                  </p>
                </div>
                <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Img
                    src={"/users/2.png"}
                    className="size-8 object-cover rounded-full"
                  />
                  <p className="text-base text-slate-700 font-medium">
                    Yunzen Richardson
                  </p>
                </div>
                <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Img
                    src={"/users/3.png"}
                    className="size-8 object-cover rounded-full"
                  />
                  <p className="text-base text-slate-700 font-medium">Coley</p>
                </div>
                <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Img
                    src={"/users/4.png"}
                    className="size-8 object-cover rounded-full"
                  />
                  <p className="text-base text-slate-700 font-medium">
                    Sujita thapa
                  </p>
                </div>
                <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
              </div>
            </div>
          </div>
          <div className="rounded-sm bg-white flex-2 border border-border shadow-sm p-4">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-slate-700">
                Bookmarks
              </h4>
            </div>
            <div className="flex items-center justify-center h-32">
              <p className="text-sm font-medium text-slate-600 font-inter">
                Save something. You’ll want it later.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AppMain;
