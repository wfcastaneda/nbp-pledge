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

    const fetchPledges = async () => {
        let json = await fetch('api/pledges', {
            next: { revalidate: 0 },
        }).then(res => res.json());
        setPledges(json);
    };

    const postPledge = async () => {
        let json = await fetch('api/pledge', {
            method: 'POST',
        }).then(res => res.json());
        setPledge(json);
        fetchPledges();
    };

    const fetchPledge = async () => {
        let json = await fetch('api/pledge', {
            next: { revalidate: 0 },
        }).then(res => res.json());
        setPledge(json);
    };

    useEffect(() => {
        fetchPledges();
        if (session) {
            fetchPledge();
        }
    }, [session]);

    return (
        <>
            <div className='col-span-6 py-10 text-lg font-extrabold'>
                {pledges && (
                    <table className='max-h-72 w-full overflow-y-scroll border-l-2 border-gray-400 text-sm shadow'>
                        <thead>
                            <tr className='border-b border-black font-bold'>
                                <th className='p-1 text-left'>Pledges</th>
                                <th className='p-1 text-right'>{`# to date: ${
                                    pledges ? pledges.count : 0
                                }`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pledges?.recent.map(pledge => (
                                <tr key={pledge.twitterHandle}>
                                    <td className='p-1'>{pledge.name}</td>
                                    <td className='p-1 text-right'>
                                        {pledge.twitterHandle}
                                    </td>
                                </tr>
                            ))}
                            {!pledges?.recent.length && (
                                <tr>
                                    <td className='p-1'>No pledges</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
            <div className='col-span-6'>
                {session &&
                    pledge &&
                    (pledge?.id ? (
                        <div className='`w-full cursor-pointer border border-black bg-blue-600 p-1 text-center font-semibold text-white shadow'>
                            Congratulations! You signed the pledge!
                        </div>
                    ) : (
                        <Button
                            onClick={() => postPledge()}
                            color='amber'
                            buttonText='Sign the pledge'
                        />
                    ))}
                {session === null && (
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
