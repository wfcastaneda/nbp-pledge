import prisma from '@/lib/prisma';
import { getToken } from 'next-auth/jwt';

// import Twitter from 'twitter-lite';

// export async function GET(request) {
//     const token = await getToken({
//         req: request,
//         secret: process.env.NEXTAUTH_SECRET,
//     });
//     let data = {};
//     // try {
//     //     const twitterClient = new Twitter({
//     //         consumer_key: process.env.TWITTER_CLIENT_ID,
//     //         consumer_secret: process.env.TWITTER_CLIENT_SECRET,
//     //         access_token_key: token.credentials.authToken, // from your User (oauth_token)
//     //         access_token_secret: token.credentials.authSecret, // from your User (oauth_token_secret)
//     //     });
//     //     //
//     //     const userData = await twitterClient.get('users/show', {
//     //         id: token.userProfile.userID,
//     //         screen_name: token.userProfile.twitterHandle,
//     //     });

//     //     data = {
//     //         twitterHandle: userData.screen_name,
//     //         followersCount: userData.followers_count,
//     //         description: userData.description,
//     //         location: userData.location,
//     //     };
//     //     // return res.status(200).json({
//     //     //     status: 'Ok',
//     //     //     data
//     //     // });
//     // } catch (error) {
//     //     // return error;
//     //     // return res.status(500).send({ error });
//     // }
//     if (request.method === 'GET') {
//         try {
//             const pledgeData = await prisma.pledge.count();
//             return Response.json({ ...data, pledgeCount: pledgeData });
//         } catch (err) {
//             console.error(err);
//             return Response.json({ msg: 'Something went wrong' });
//         }
//     } else {
//         return Response.json({ msg: 'Method not allowed' });
//     }
// }

export const revalidate = 0;

export async function GET(request) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });
    const pledge = await prisma.pledge.findUnique({
        where: {
            twitterUserId: token.userProfile.userID.toString(),
        },
    });
    return Response.json(pledge);
}

export async function POST(request) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });
    const pledge = await prisma.pledge.create({
        data: {
            email: token.email,
            name: token.name,
            twitterUserId: token.userProfile.userID.toString(),
            twitterHandle: token.userProfile.twitterHandle,
        },
    });
    return Response.json(pledge);
}
