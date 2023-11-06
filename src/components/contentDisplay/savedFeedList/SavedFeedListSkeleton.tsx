function Skeleton() {
  return (
    <article className="animate-pulse flex justify-between items-center gap-2 p-3 border sm:first:rounded-t-2xl sm:last:rounded-b-2xl last:border-b even:[&:not(:last-child)]:border-b-0 odd:[&:not(:last-child)]:border-b-0">
      <div className="flex flex-wrap gap-3 items-center">
        <div className="rounded-lg bg-slate-200 h-10 w-10"></div>
        <div className="flex flex-col gap-3">
          <div className="bg-slate-200 w-32 h-3" />
          <div className="bg-slate-200 w-20 h-3" />
        </div>
      </div>
      <div className="bg-slate-200 w-6 h-6" />
    </article>
  );
}

export default function SavedFeedListSkeleton() {
  return (
    <section className="flex flex-col">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </section>
  );
}