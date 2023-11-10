import FeedPost from "@/components/contentDisplay/feedPost/FeedPost";
import { getUserLikes } from "@/lib/api/bsky/feed";

interface Props {
  params: {
    handle: string;
  };
}

export default async function Page(props: Props) {
  const { handle } = props.params;
  const posts = await getUserLikes(handle);

  return (
    <>
      {posts.data.feed &&
        posts.data.feed.map((post) => (
          <FeedPost key={post.post.uri} post={post} />
        ))}
    </>
  );
}
