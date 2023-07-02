import type { DefaultUser } from 'next-auth';
import type { DiscordProfile } from 'next-auth/providers/discord';

declare module 'next-auth' {
  interface Session {
    user?: DefaultUser & {
      discord_profile?: DiscordProfile;
      admin?: boolean;
    };
  }
}

declare module 'next-auth/jwt/types' {
  interface JWT {
    discord_profile?: DiscordProfile
    admin?: boolean;
  }
}