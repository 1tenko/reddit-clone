import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  seed?: string;
  large?: boolean;
};

const Avatar = ({ seed, large }: Props) => {
  const { data: session } = useSession();

  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full border-gray-200 bg-white ${
        large && 'h-10 w-20'
      }`}
    >
      <Image
        layout="fill"
        src={`https://avatars.dicebear.com/api/open-peeps/${
          session?.user?.name || 'placeholder'
        }.svg`}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
