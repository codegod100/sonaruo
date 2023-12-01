import { SortReplyItemSkeleton } from "@/containers/settings/ThreadPreferencesContainer";

export default function Loading() {
  return (
    <section className="flex flex-col gap-5">
      <section>
        <h2 className="text-2xl font-semibold mx-3 md:mx-0 mb-2">
          Sort Replies
        </h2>
        <section className="flex flex-col">
          <SortReplyItemSkeleton />
          <SortReplyItemSkeleton />
          <SortReplyItemSkeleton />
          <SortReplyItemSkeleton />
        </section>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mx-3 md:mx-0 mb-2">
          Prioritize Your Follows
        </h2>
        <section className="flex flex-col">
          <SortReplyItemSkeleton />
        </section>
      </section>
    </section>
  );
}
