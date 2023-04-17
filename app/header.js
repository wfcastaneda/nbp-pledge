'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
    if (!session) {
        return null;
    }
    return (
        <div className='col-span-6 py-2  text-sm'>
            <div className='flex flex-row items-center justify-between'>
                <div>Authenticated</div>
                <div className='border border-black bg-green-600 px-1 py-px text-center text-white'>
                    {session.twitter?.twitterHandle}
                </div>
            </div>
        </div>
    );
};

export default Header;
