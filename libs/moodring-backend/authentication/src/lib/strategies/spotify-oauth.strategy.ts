import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-spotify';

const {
  NX_SPOTIFY_CLIENT_ID,
  NX_SPOTIFY_CLIENT_SECRET,
  NX_SPOTIFY_REDIRECT_URI,
  NX_SPOTIFY_SCOPES,
} = process.env;

export class SpotifyOauthStrategy extends PassportStrategy(
  Strategy,
  'spotify'
) {
  constructor() {
    super(
      {
        clientID: NX_SPOTIFY_CLIENT_ID,
        clientSecret: NX_SPOTIFY_CLIENT_SECRET,
        callbackURL: NX_SPOTIFY_REDIRECT_URI,
        scope: NX_SPOTIFY_SCOPES,
      },
      (
        accessToken: string,
        refreshToken: string,
        expires_in: number,
        profile: Profile,
        done: VerifyCallback
      ): void => {
        return done(null, profile, { accessToken, refreshToken, expires_in });
      }
    );
  }
}
