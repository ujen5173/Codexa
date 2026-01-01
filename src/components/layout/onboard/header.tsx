import Logo from "@/components/common/logo";

const OnboardHeader = () => {
  return (
    <header className="border-b border-border shadow-sm">
      <nav className="max-w-385 mx-auto px-4 py-4 flex items-center justify-center">
        <Logo />
      </nav>
    </header>
  );
};

export default OnboardHeader;
