import "./App.css";
import Button from "./components/Button";
import UserInput from "./components/UserInput";
import { UserInputProvider } from "./context/UserInputContext";

function App() {
  return (
    <UserInputProvider>
      <UserInput />
      <Button />
    </UserInputProvider>
  );
}

export default App;
