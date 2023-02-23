import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";

export default function App() {
    return (
        <div>
            <Routes>
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>

        </div>
    );
}