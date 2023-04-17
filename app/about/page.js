import Link from 'next/link';

export default function About() {
    return (
        <>
            <Link href='/' className='cursor-pointer  hover:text-gray-400'>
                Back
            </Link>
            <div className='col-span-6 py-16 text-lg font-extrabold'>
                The Never Bitcoin Pledge: About
            </div>
        </>
    );
}
