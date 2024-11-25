import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import LikedPage from "./pages/LikedPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <SearchPage /> */}
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/liked" element={<LikedPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
