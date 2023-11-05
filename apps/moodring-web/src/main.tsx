import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@moodring/shared/store';
import { RouterProvider } from 'react-router-dom';
import { router } from '@moodring/moodring-web/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);
