import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import {useState} from "react";
import MainHero from "./components/MainHero";
import PiggyBankList from "./components/PiggyBankList";

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

            {isSaving && <PiggyBankList />}

        </div>
    );
}