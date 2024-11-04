import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { SignIn } from "./pages/SignIn";
import { Creator } from "./pages/Creator";
import { NavBar } from "./components/NavBar";
import { ShoppingList } from "./pages/ShoppingList";
import { EditRecipeForm } from "./components/recipeForm/EditRecipeForm";
import { PlanList } from "./pages/PlanList";

import { MainWrapper } from "./components/MainWrapper";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/shopping" element={<ShoppingList />} />
            <Route path="/plan" element={<PlanList />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <EditRecipeForm />
          <NavBar />
        </MainWrapper>
      </QueryClientProvider>
    </>
  );
}

export default App;
