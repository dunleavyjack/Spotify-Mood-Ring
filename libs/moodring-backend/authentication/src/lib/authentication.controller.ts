import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { Response } from 'express';
import { SpotifyOauthGuard } from './guards/spotify-oauth.guard';
import type { Profile } from 'passport-spotify';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  //   @UseGuards(SpotifyOauthGuard)
  @Get('test')
  test(): string {
    this.authenticationService.test();
    return 'test';
  }

  @UseGuards(SpotifyOauthGuard)
  @Get('login')
  login(): void {
    return;
  }

  @UseGuards(SpotifyOauthGuard)
  @Get('redirect')
  async spotifyAuthRequest(
    // TODO: Remove eslint disable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Req() req: any,
    @Res() res: Response
  ): Promise<Response> {
    const {
      user,
      authInfo,
    }: {
      user: Profile;
      authInfo: {
        accessToken: string;
        refreshToken: string;
        expires_in: number;
      };
    } = req;

    console.log('user found');

    if (!user) {
      res.redirect('/');
      return res.status(404).json({
        error: 'user_not_found',
        error_description: 'The requested user does not exist.',
      });
    }

    req.user = undefined;

    const jwt = this.authenticationService.login(user);

    res.set('authorization', `Bearer ${jwt}`);

    return res.status(201).json({ authInfo, user });
  }
}
