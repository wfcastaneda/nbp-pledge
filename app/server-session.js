import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export default async function ServerSession() {
    const session = await getServerSession(authOptions);
    const profile = await fetch(
        'https://api.twitter.com/1.1/account/settings.json',
    ).then(res => res.json());
    const pledgeData = await prisma.pledge.count();
    return (
        <pre>
            `{JSON.stringify(session, null, 2)} {pledgeData}`
        </pre>
    );
}
