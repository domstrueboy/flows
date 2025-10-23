import "./App.css";
import { CreateFlow } from "./features/flows/CreateFlow";
import { Flows } from "./features/flows/Flows";

function App() {
  return (
    <>
      <main>
        <Flows />
      </main>

      <footer>
        <CreateFlow />
      </footer>
    </>
  );
}

export default App;
