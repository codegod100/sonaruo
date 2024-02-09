import FallbackAvatar from "@/assets/images/fallbackAvatar.png";
import { ComposerOptionsQuote } from "@/app/providers/composer";
import Image from "next/image";
import { getRelativeTime } from "@/lib/utils/time";
import { useState } from "react";

interface Props {
  post: ComposerOptionsQuote;
}

export default function QuoteToPreview(props: Props) {
  const { post } = props;
  const { author } = post || {};
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const selectedTextClass = showMore
    ? "max-h-48 overflow-auto"
    : "line-clamp-3";

  return (
    <article
      onClick={toggleShowMore}
      className="flex cursor-pointer items-start gap-1 rounded-2xl border p-2"
    >
      <Image
        src={author.avatar ?? FallbackAvatar}
        alt="Avatar"
        width={20}
        height={20}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <div className="flex gap-1">
          <span className="line-clamp-1 max-w-[90%] shrink-0 overflow-ellipsis break-all font-semibold text-neutral-700">
            {author.displayName || author.handle}
          </span>
          <span className="line-clamp-1 min-w-[10%] shrink break-all font-medium text-neutral-400">
            @{author.handle}
          </span>
          <span className="whitespace-nowrap font-medium text-neutral-400">
            &nbsp;· {getRelativeTime(post.indexedAt)}
          </span>
        </div>
        <p className={selectedTextClass}>{post.text}</p>
      </div>
    </article>
  );
}
