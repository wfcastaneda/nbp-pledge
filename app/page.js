"use client";

import Image from 'next/image'

import { useSession, signIn, signOut } from "next-auth/react";

const Button = ({onClick, buttonText}) => {
  return (
    <button onClick={() => onClick && onClick()} className="py-2 w-full border-2 bg-white border-gray-600 text-center  font-semibold cursor-pointer hover:bg-gray-100">
      {buttonText}
    </button>
  );
}

export default function Home() {
  const { data: session } = useSession();
    return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <div className="grid grid-cols-6 gap-y-3 gap-x-2 mt-8">
        { session && (
          <div className="border-2 bg-white border-gray-600 col-span-6 py-2 px-3 text-lg font-mono flex flex-row justify-between items-center">
            <div>{session.user?.name}</div>
            <Image className="rounded-full" src={session.user?.image} alt='Profile photo' width='24' height='24'/>
          </div>
        )}
        <div className="border-2 bg-white border-gray-600 col-span-6 py-24 px-6 text-lg font-extrabold text-center">
          The Never Bitcoin Pledge
        </div>
        <div className="col-span-6">
          { session ? (
            <Button onClick={() => {}} buttonText='Sign the pledge' />

          ) : (
            <Button onClick={() => signIn('twitter')} buttonText='Sign in with Twitter' />
          )}
        </div>
        <div className="py-2 border-2 bg-white border-gray-600 text-center col-span-3 font-semibold cursor-pointer hover:bg-gray-100">
          Share
        </div>
        <div className="py-2 border-2 bg-white border-gray-600 text-center col-span-3 font-semibold cursor-pointer hover:bg-gray-100">
          Learn more
        </div>
        { session && (
          <button className="col-span-6 mt-4" onClick={() => signOut("twitter")}>
            Sign out
          </button>
        )}
      </div>
    </main>
  )
}
