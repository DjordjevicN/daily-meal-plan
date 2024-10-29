import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { SignIn } from "./pages/SignIn";
import { Creator } from "./pages/Creator";
import { NavBar } from "./components/NavBar";
import { ShoppingList } from "./pages/ShoppingList";
import { EditMealForm } from "./components/EditMealForm";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/shopping" element={<ShoppingList />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <EditMealForm />
        <NavBar />
      </QueryClientProvider>
    </>
  );
}

export default App;
