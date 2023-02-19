import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import {useState} from "react";
import MainHero from "./components/MainHero";
import BankList from "./components/BankList";

export default function App() {
    const [isSaving, setIsSaving] = useState(false);

    const handleSavingButton = function() {
        setIsSaving(!isSaving);
    };

    return (
        <div>
            <Navbar isSaving={isSaving} handleSavingButton={handleSavingButton} />

            {!isSaving && <div>
                <MainHero handleSavingButton={handleSavingButton} />
                <Tokenomics />
                <Roadmap />
            </div>}

            {isSaving && <BankList />}

        </div>
    );
}