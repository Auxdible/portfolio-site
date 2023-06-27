import { compare, compareSync } from "bcrypt";
import NextAuth from "next-auth"
import CredentialsProvider, {CredentialsConfig} from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import type { DiscordProfile } from "next-auth/providers/discord";
import prisma from '@/lib/prisma';
import { Provider } from "next-auth/providers";
const isDiscordProfile = (profile: any): profile is DiscordProfile => {
  return profile.username && profile.id && profile.avatar
}
let providers: Provider[] = [
  CredentialsProvider(<CredentialsConfig>{
      name: "Credentials",
      type: "credentials",
      id: "credentials",
      credentials: {
          username: { label: "Username", placeholder: "jsmith", type: "text" },
          password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
          if (!credentials || !process.env.BLOG_PASSWORD) return null;
          return process.env.BLOG_USERNAME == credentials.username && (await compare(credentials.password, process.env.BLOG_PASSWORD) || credentials.password === process.env.BLOG_PASSWORD) ? { name: process.env.BLOG_DISPLAY_NAME, id: process.env.BLOG_USERNAME } : null;
      },
  }),
];
if (process.env.OAUTH2_DISCORD_CLIENT_ID && process.env.OAUTH2_DISCORD_SECRET) {
  providers.push(DiscordProvider({
    clientId: process.env.OAUTH2_DISCORD_CLIENT_ID,
    clientSecret: process.env.OAUTH2_DISCORD_SECRET, 
    authorization: {
      params: { scope: 'identify' }
    }
  }));
}

const handler = NextAuth({
  providers,
  callbacks: {
    async session({ token, session }) {
        if (token && session.user) {
            session.user.discord_profile = token.discord_profile;
        }
        return session;
    },
    async jwt({ token, profile }) {
      if (profile && isDiscordProfile(profile)) {
        token.discord_profile = profile;
      }
      return token;
    }
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error"
  }
})

export { handler as GET, handler as POST }