import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenerateQRCode from "./Page/GenerateQRCode";
import { Grid, Button, Box } from '@mui/material';
import Home from "./Page/Home";
import CompareText from "./Page/CompareText";
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/qrcode" element={<GenerateQRCode />} />
                    <Route path="/comparetext" element={<CompareText />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
