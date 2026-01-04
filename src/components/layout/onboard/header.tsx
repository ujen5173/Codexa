import Logo from "@/components/common/logo";

const OnboardHeader = () => {
  return (
    <header className="bg-slate-100 dark:bg-slate-950 shadow-sm border-border border-b">
      <nav className="flex justify-center items-center mx-auto px-4 py-4 max-w-385">
        <Logo />
      </nav>
    </header>
  );
};

export default OnboardHeader;
