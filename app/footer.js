'use client';

import { signOut, useSession } from 'next-auth/react';
import Button from './components/button';

const Footer = () => {
    const { data: session } = useSession();
    if (!session) {
        return null;
    }
    return (
        <div className='col-span-6'>
            <Button onClick={signOut} buttonText='Sign out' />
        </div>
    );
};

export default Footer;
