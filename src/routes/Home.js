import Hero from "../components/home/Hero";
import Tokenomics from "../components/home/Tokenomics";
import Roadmap from "../components/home/Roadmap";
import Navbar from "../components/home/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Tokenomics />
            <Roadmap />
        </div>
    );
}