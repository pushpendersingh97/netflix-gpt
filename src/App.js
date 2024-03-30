import { Provider } from "react-redux";
import Body from "./components/Body";
import { store } from "./utils/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
