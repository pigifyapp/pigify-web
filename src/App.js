import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import web3 from "./web3/web3";
import savingImage from "./images/saving.jpg";

export default function App() {

    return (
        <div>
            <Navbar />

            <section className="hero hero-section is-fullheight-with-navbar">
                <div className="hero-body columns">
                    <div className="column">
                        <p className="title is-strong">
                            Shape your financial destiny.
                        </p>

                        <p className="subtitle is-strong">
                            Pigify is an <strong>open source</strong> dapp made up of several smart contracts that will force you to save and <strong>achieve your financial goals</strong>.
                        </p>
                    </div>

                    <div className="column">
                        <img src={savingImage} alt="sd"/>
                    </div>
                </div>
            </section>

            <Tokenomics />

            <Roadmap />
        </div>
    );
}