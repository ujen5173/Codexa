const BookmarkSidebar = () => {
  return (
    <div className="flex-2 bg-white dark:bg-slate-900 shadow-sm p-4 border border-border dark:border-slate-800 rounded-2xl">
      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 dark:text-slate-50 text-lg">
          Bookmarks
        </h4>
      </div>
      <div className="flex justify-center items-center h-32">
        <p className="font-inter font-medium text-slate-600 dark:text-slate-300 text-sm">
          Save something. You’ll want it later.
        </p>
      </div>
    </div>
  );
};

export default BookmarkSidebar;
