import './App.css';
import StoreProvider from './Context/storeProvider';
import Kamban from './components/Kamban/Kamban';

function App() {
  return (
    <StoreProvider>
      <Kamban />
    </StoreProvider>
  );
}

export default App;
