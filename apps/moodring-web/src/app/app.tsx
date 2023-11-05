// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Provider } from 'react-redux';
import { useAppSelector, testState, store } from '@moodring/shared/store';

export function App() {
  const { hello } = useAppSelector(testState);

  return (
    <Provider store={store}>
      <div>
        <h2>hello {hello}</h2>
      </div>
    </Provider>
  );
}

export default App;
