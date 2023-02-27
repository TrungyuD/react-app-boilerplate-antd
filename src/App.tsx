import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';
import 'antd/dist/reset.css';
import 'styles/common.scss';
import 'styles/override.scss';
import AppContainer from './app/index';
import { queryClient } from 'utils/queryClient';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AppContainer />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
