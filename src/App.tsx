import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import { MainNav } from "./components/MainNav";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App h-[100vh] bg-gray400">
          <MainNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/meal/:id" element={<SingleMealPage />} />
        <Route path="/foodTransfer" element={<FoodTransfer />} /> */}
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Navigation />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
