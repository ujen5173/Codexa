import BookmarkSidebar from "./right-sidebar-components/bookmark.sidebar";
import ChangelogSidebar from "./right-sidebar-components/changelog.sidebar";
import PremiumSidebar from "./right-sidebar-components/premium.sidebar";
import RecentReadsSidebar from "./right-sidebar-components/recent-reads.sidebar";
import TopContributorSidebar from "./right-sidebar-components/topcontributor.sidebar";
import TrendingSidebar from "./right-sidebar-components/trending.sidebar";

const RightSidebar = () => {
  return (
    <section className="flex-3 space-y-5 min-w-[250px]">
      <ChangelogSidebar />

      <PremiumSidebar />

      <TrendingSidebar />

      <RecentReadsSidebar />

      <TopContributorSidebar />

      <BookmarkSidebar />
    </section>
  );
};

export default RightSidebar;
