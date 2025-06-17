import { GlobalProvider } from "./context/GlobalContext";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <GlobalProvider>
        <MainLayout />
      </GlobalProvider>
    </>
  );
}

export default App;
