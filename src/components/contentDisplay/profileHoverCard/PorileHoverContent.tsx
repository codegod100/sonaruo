import Avatar from "@/components/dataDisplay/avatar/Avatar";
import FollowInfo from "@/components/dataDisplay/followInfo/FollowInfo";
import ProfileBio from "@/components/dataDisplay/profileBio/ProfileBio";
import ViewerInfo from "@/components/dataDisplay/viewerInfo/ViewerInfo";
import useProfile from "@/lib/hooks/bsky/actor/useProfile";
import Link from "next/link";
import ProfileHoverCardSkeleton from "./ProfileHoverCardSkeleton";
import { isInvalidHandle } from "@/lib/utils/text";

interface Props {
  handle: string;
}

export default function ProfileHoverContent(props: Props) {
  const { handle } = props;
  const { data: profile, isLoading, error } = useProfile(handle);

  if (error) {
    return <span>Could not get this profile</span>;
  }

  if (isLoading || !profile) return <ProfileHoverCardSkeleton />;

  return (
    <article className="flex flex-col gap-2">
      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex flex-wrap items-start gap-2">
          <Link
            href={`/dashboard/user/${profile.handle}`}
            className="hover:brightness-90"
          >
            <Avatar src={profile.avatar} size="md" />
          </Link>
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-x-1.5">
              <Link
                href={`/dashboard/user/${profile.handle}`}
                className="text-skin-base font-semibold hover:text-skin-secondary"
              >
                {profile.displayName || profile.handle}
              </Link>
              {profile.viewer?.followedBy && <ViewerInfo text="Follows you" />}
              {profile.viewer?.muted ||
                (profile.viewer?.mutedByList && (
                  <ViewerInfo text="Muted user" />
                ))}
            </div>

            {isInvalidHandle(profile?.handle) ? (
              <ViewerInfo text="Invalid Handle" />
            ) : (
              <Link
                href={`/dashboard/user/${profile.handle}`}
                className="text-skin-tertiary break-all font-medium"
              >
                @{profile?.handle}
              </Link>
            )}
          </div>
        </div>
      </div>
      {profile?.handle && (
        <FollowInfo
          handle={profile?.handle}
          followersCount={profile?.followersCount ?? 0}
          followsCount={profile?.followsCount ?? 0}
        />
      )}
      {profile?.description && (
        <ProfileBio description={profile.description} truncate={true} />
      )}
    </article>
  );
}
