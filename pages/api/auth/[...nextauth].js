import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
        version: "2.0", // opt-in to Twitter OAuth 2.0
      })
  ],
  secret: "PLACE-HERE-ANY-STRING",
}
export default NextAuth(authOptions)
