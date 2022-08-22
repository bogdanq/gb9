import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, ChatPage } from "./pages";
import { Header } from "./components";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#ff0000",
  //   },
  // },
});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
