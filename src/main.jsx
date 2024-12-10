import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./pages/DashboardLayout.jsx";
import Transfer from "./pages/Transfer.jsx";
import Register from "./pages/Register.jsx";
import Topup from "./pages/Topup.jsx";
import Signout from "./pages/Signout.jsx";
import { ThemeProvider } from "./provider/ThemeProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<App />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topup" element={<Topup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signout" element={<Signout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
