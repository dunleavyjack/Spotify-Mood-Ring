import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  AnalyzingMusicPage,
  MoodDisplayPage,
  AboutPage,
  ErrorPage,
  SpotifyRedirectPage,
} from '@moodring/moodring-web/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/analyze',
    element: <AnalyzingMusicPage />,
  },
  {
    path: '/mood',
    element: <MoodDisplayPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '/redirect',
    element: <SpotifyRedirectPage />,
  },
]);
