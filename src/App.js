import './App.css';
import Parent from "./pages/UserInfo/Parent";
import CounterDisplay from "./pages/Counter/CounterDisplay";
import {UserContextProvider} from "./context/User";
import {CounterProvider} from "./context/Counter";
import combineComponents from "./hoc/combineComponents";

const providers = [
    UserContextProvider,
    CounterProvider
];

const AppProvider = combineComponents(...providers);

function App() {
  return (
      <div className="App">
          <AppProvider>
              <CounterDisplay />
              <Parent />
          </AppProvider>
      </div>
  )
}

export default App;
