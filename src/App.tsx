import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import { SignIn } from "./pages/SignIn";
import { Creator } from "./pages/Creator";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/creator" element={<Creator />} />

            {/* <Route path="/shopping" element={<ShoppingPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
