import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import { cloneDeep } from 'tailwindcss/lib/util/cloneDeep';

export const authOptions = {
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            if (profile) {
                token['userProfile'] = {
                    twitterHandle: profile.screen_name,
                    userID: profile.id,
                };
            }
            if (account) {
                token['credentials'] = {
                    authToken: account.oauth_token,
                    authSecret: account.oauth_token_secret,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            let { userId, ...userData } = cloneDeep(token.userProfile);
            session.twitter = userData;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
