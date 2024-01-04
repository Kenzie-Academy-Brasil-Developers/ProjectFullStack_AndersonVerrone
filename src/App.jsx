import { AdminProvider } from "./providers/AdminContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyled } from "./styles/globalStyles";

function App() {

  return (
    <>
      <GlobalStyled />
      <UserProvider>
        <AdminProvider>
          <RoutesMain />
        </AdminProvider>
      </UserProvider>
    </>
  )
}

export default App
