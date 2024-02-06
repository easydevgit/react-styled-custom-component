import StyledButton from "./components/UI/button/button";
import { BUTTON_VARIATIONS } from "./components/UI/button/buttonVariations";

function App() {
  return (
    <StyledButton variation={BUTTON_VARIATIONS.big} disabled>
      Hello world
    </StyledButton>
  );
}

export default App;
