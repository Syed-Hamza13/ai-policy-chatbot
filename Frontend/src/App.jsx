import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChatPage from "./pages/chatbot/ChatPage";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/chat" element={<ChatPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;