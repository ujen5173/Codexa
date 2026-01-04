import { Link } from "@tanstack/react-router";
import { Img } from "react-image";
import { Button } from "../ui/button";

const PageNotFound = () => {
  return (
    <>
      <div className="bg-blue-50 dark:bg-black">
        <div className="flex flex-col justify-center items-center bg-white dark:bg-slate-900 mx-auto px-8 py-16 border-border-light border-x dark:border-border min-h-[calc(100dvh-75px)] container">
          <Img
            className="mb-8 w-9/12 max-w-120 h-full object-cover select-none"
            src={"/pageNotFound.png"}
            alt="404"
            width={500}
            draggable={false}
            height={500}
          />

          <h1 className="mb-4 font-bold text-slate-900 dark:text-slate-100 text-6xl">
            404: Page not found
          </h1>

          <h1 className="mb-10 font-medium text-slate-500 text-2xl">
            We can&apos;t find the page you&apos;re looking for.
          </h1>

          <div className="flex items-center gap-2">
            <Link to="/">
              <Button className="hover:bg-gray-100 shadow-lg px-4 py-2 border border-secondary rounded-full outline-none font-medium text-secondary text-base">
                Take me home
              </Button>
            </Link>
            <Button
              variant={"outline"}
              className="shadow-lg px-4 py-2 rounded-full outline-none font-medium text-base"
            >
              Report
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
