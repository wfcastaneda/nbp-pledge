import Link from 'next/link';

export default function About() {
    return (
        <>
            <Link
                href='/'
                className='cursor-pointer font-mono hover:text-gray-400'
            >
                Back
            </Link>
            <div className='col-span-6 border-2 border-gray-600 bg-white px-6 py-16 text-center text-lg font-extrabold'>
                The Never Bitcoin Pledge: Share
            </div>
        </>
    );
}
