import { GlobalProvider } from "./context/GlobalContext";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <MainLayout />
      </GlobalProvider>
    </>
  );
}

export default App;
