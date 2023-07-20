import { UserProfile } from "@/common.types";
import ProfilePage from "@/components/ProfilePage";
import { getUserProjects } from "@/lib/actions";

interface UserProfileProps {
  params: {
    id: string;
  };
}

export default async function UserProfile({
  params: { id },
}: UserProfileProps) {
  const result = (await getUserProjects(id, 100)) as { user: UserProfile };

  if (!result.user) {
    return (
      <p className="w-full text-center my-10 px-2">Failed to fetch user info</p>
    );
  }

  return <ProfilePage user={result?.user} />;
}
