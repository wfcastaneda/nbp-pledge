'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

import Button from './button';

export default function Home() {
    const { data: session } = useSession();
    const [pledge, setPledge] = useState(null);
    const [pledges, setPledges] = useState(null);

    const postPledge = async () => {
        let json = await fetch('api/pledge', {
            method: 'POST',
        }).then(res => res.json());
        console.log('RES', json);
    };

    const fetchPledge = async () => {
        let json = await fetch('api/pledge').then(res => res.json());
        setPledge(json);
    };

    const fetchPledges = async () => {
        let json = await fetch('api/pledges').then(res => res.json());
        setPledges(json);
    };

    useEffect(() => {
        fetchPledges();
        if (session) {
            fetchPledge();
        }
    }, [session]);

    return (
        <main className='flex min-h-screen flex-col items-center bg-gray-200'>
            <div className='mx-2 mt-8 grid grid-cols-6 gap-x-2 gap-y-3 md:max-w-lg'>
                {session && (
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
                )}
                <div className='col-span-6 border-2 border-gray-600 bg-white px-6 py-16 text-center text-lg font-extrabold'>
                    The Never Bitcoin Pledge
                    <div className='my-2 font-mono font-normal'>
                        Pledges to date: {pledges?.count}
                    </div>
                    <div className='my-2 font-normal'>Recent pledges:</div>
                    {pledges?.recent.map(pledge => (
                        <div key={pledge.twitterHandle} className='font-mono'>
                            {pledge.twitterHandle}
                        </div>
                    ))}
                </div>
                <div className='col-span-6'>
                    {session ? (
                        pledge ? (
                            <div className='w-full border-2 border-gray-600 bg-white p-2  text-center font-semibold'>
                                Congratulations! You signed the pledge!
                            </div>
                        ) : (
                            <Button
                                onClick={() => postPledge()}
                                buttonText='Sign the pledge'
                            />
                        )
                    ) : (
                        <Button
                            onClick={() => signIn('twitter')}
                            buttonText='Sign in with Twitter'
                        />
                    )}
                </div>
                <div className='col-span-3 cursor-pointer border-2 border-gray-600 bg-white py-2 text-center font-semibold hover:bg-gray-100'>
                    Share
                </div>
                <div className='col-span-3 cursor-pointer border-2 border-gray-600 bg-white py-2 text-center font-semibold hover:bg-gray-100'>
                    Learn more
                </div>
                {session && (
                    <button
                        className='col-span-6 mt-4'
                        onClick={() => signOut('twitter')}
                    >
                        Sign out
                    </button>
                )}
            </div>
        </main>
    );
}
