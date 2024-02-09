"use client";

import Avatar from "@/components/dataDisplay/avatar/Avatar";
import PostActions from "@/components/dataDisplay/postActions/PostActions";
import PostEmbed from "@/components/dataDisplay/postEmbed/PostEmbed";
import PostText from "@/components/dataDisplay/postText/postText";
import { getPostId } from "@/lib/utils/link";
import { getRelativeTime } from "@/lib/utils/time";
import { AppBskyFeedDefs } from "@atproto/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo } from "react";

interface Props {
  post: AppBskyFeedDefs.PostView;
  isReply?: boolean;
  hasReply?: boolean;
}

const SearchPost = memo(function SearchPost(props: Props) {
  const { post } = props;
  const { author, indexedAt } = post;
  const router = useRouter();

  return (
    <article
      onClick={(e) => {
        e.stopPropagation();
        router.push(
          `/dashboard/user/${post.author.handle}/post/${getPostId(post.uri)}`,
        );
      }}
      className="border border-x-0 p-3 last:border-b hover:cursor-pointer md:border-x odd:[&:not(:last-child)]:border-b-0 even:[&:not(:last-child)]:border-b-0"
    >
      <div className="relative flex items-start gap-3">
        <Link
          href={`/dashboard/user/${author.handle}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="z-20 shrink-0 hover:brightness-90"
        >
          <Avatar src={author.avatar} size="md" />
        </Link>
        <div className="flex grow flex-col">
          <div className="flex">
            <Link
              href={`/dashboard/user/${author.handle}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex gap-1"
            >
              <span className="line-clamp-1 max-w-[90%] shrink-0 overflow-ellipsis break-all font-semibold text-neutral-700 hover:text-neutral-500">
                {author.displayName || author.handle}{" "}
              </span>
              <span className="line-clamp-1 min-w-[10%] shrink break-all font-medium text-neutral-400">
                @{author.handle}
              </span>
            </Link>
            <span className="whitespace-nowrap font-medium text-neutral-400">
              &nbsp;· {getRelativeTime(indexedAt)}
            </span>
          </div>
          <PostText record={post.record} />
          {post.embed && <PostEmbed content={post.embed} depth={0} />}
          <div className="mt-2">
            <PostActions post={post} />
          </div>
        </div>
      </div>
    </article>
  );
});

export default SearchPost;
