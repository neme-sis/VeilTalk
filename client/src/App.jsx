import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import OwnerDetails from "./pages/OwnerDetails";
import AddComment from "./pages/AddComment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id/comments" element={<OwnerDetails />} />
        <Route path="/user/:id/friends/add-comment" element={<AddComment />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
