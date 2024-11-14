"use client";
import avatarImage from "@/app/assets/avatar.png";
import useSession from "@/hooks/useSession";
import Image from "next/image";

const UserAvatar = () => {
  const { user } = useSession();
  return (
    <div className="flex items-center justify-center gap-3">
      <Image
        src={user.avatarUrl || avatarImage}
        width={45}
        height={45}
        alt="Avatar"
        className="rounded-full object-cover"
      />
      <h2 className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-2xl font-bold text-transparent">
        Hi,{" "}
        {user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}
      </h2>
    </div>
  );
};

export default UserAvatar;
