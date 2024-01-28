import { router } from '@moodring/moodring-web/router';
import { store } from '@moodring/shared/store';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import './App.module.scss';

export function App(): React.JSX.Element {
  return (
    <StrictMode>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </StrictMode>
  );
}
