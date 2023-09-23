// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Provider } from 'react-redux';
import { useAppSelector, testState, store } from '@moodring/store';

export function App() {
  const { hello } = useAppSelector(testState);

  return (
    <Provider store={store}>
      <div>
        <h1>test</h1>
        <h2>{hello}</h2>
      </div>
    </Provider>
  );
}

export default App;
