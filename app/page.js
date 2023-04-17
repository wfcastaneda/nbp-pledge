'use client';
import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Button from './components/button';
import TwitterButton from './components/twitter-button';

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();

    const [pledge, setPledge] = useState(null);
    const [pledges, setPledges] = useState(null);

    const postPledge = async () => {
        let json = await fetch('api/pledge', {
            method: 'POST',
        }).then(res => res.json());
        setPledge(json);
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
        <>
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
            <div className='col-span-3'>
                <TwitterButton />
            </div>
            <div className='col-span-3'>
                <Button
                    onClick={() => router.push('/about')}
                    buttonText='Learn more'
                />
            </div>
        </>
    );
}
