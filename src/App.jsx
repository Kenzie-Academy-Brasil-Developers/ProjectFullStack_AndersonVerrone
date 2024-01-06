import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyled } from "./styles/GlobalStyles";
import { UserContext } from "./providers/UserContext";
import { LoadingPage } from "./pages/LoadingPage";
import { AdminProvider } from "./providers/AdminContext";
import { UserProvider } from "./providers/UserContext";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      <GlobalStyled />
      <UserProvider>
        <AdminProvider>
          {loading ? <LoadingPage /> : <RoutesMain />}
        </AdminProvider>
      </UserProvider>
    </>
  );
}

export default App;
