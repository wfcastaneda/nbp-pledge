'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    if (!session) {
        return null;
    }
    return (
        <div className='col-span-6 flex flex-row items-center justify-between border-2 border-gray-600 bg-white px-3 py-2 font-mono text-lg'>
            <div>
                Authenticated as:{' '}
                <div className='font-semibold'>
                    {session.twitter?.twitterHandle}
                </div>
            </div>
            <Image
                className='rounded-full'
                src={session.user?.image}
                alt='Profile photo'
                width='36'
                height='36'
            />
        </div>
    );
};

export default Header;
