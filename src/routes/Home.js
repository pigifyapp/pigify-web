import MainHero from "../components/MainHero";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Navbar from "../components/home/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <MainHero />
            <Tokenomics />
            <Roadmap />
        </div>
    );
}