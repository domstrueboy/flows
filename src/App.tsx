import { ModeToggle } from "@/_features/theme/components/mode-toggle";
import { CreateFlow } from "@/_features/flows/components/create-flow";
import { Flows } from "@/_features/flows/components/flows";

function App() {
  return (
    <>
      <header>
        <ModeToggle />
      </header>

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
