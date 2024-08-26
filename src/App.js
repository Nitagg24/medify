import "./App.css";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer  from "./components/Footer/Footer";
import DownloadApp from "./components/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <CssBaseline/>
      <Outlet/>
      <DownloadApp />
      <Footer/>
    </div>
  );
}

export default App;
