import "bulma-steps/dist/css/bulma-steps.min.css";
import "bulma-steps/dist/js/bulma-steps.min";

export default function Roadmap() {
    return (
        <section className="roadmap pt-6" id="roadmap">
            <div className="container has-text-centered pb-6">
                <div className="columns">
                    <div className="column">
                        <p className="title">Roadmap</p>
                        <p className="subtitle">The path we will follow to implement our economy</p>
                    </div>
                </div>
            </div>

            <div className="container pink-container has-text-centered">
                <div className="columns is-centered py-1">
                    <div className="column">
                        <div className="steps">
                            <div className="step-item is-active">
                                <div className="step-marker">1</div>
                                <div className="step-details">
                                    <p className="step-title">Q1 2023</p>
                                    <ul>
                                        <li><del>Tokenomics</del></li>
                                        <li><del>Whitepaper</del></li>
                                        <li><del>Decentralized Savings</del></li>
                                        <li>Presale</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-marker">2</div>
                                <div className="step-details">
                                    <p className="step-title">Q2 2023</p>
                                    <ul>
                                        <li>Staking</li>
                                        <li>Save-to-Earn</li>
                                        <li>Public Release</li>
                                        <li>Marketing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-marker">3</div>
                                <div className="step-details">
                                    <p className="step-title">Q3 2024</p>
                                    <ul>
                                        <li>Mobile App</li>
                                        <li>Affiliate Program</li>
                                        <li>Marketing</li>
                                        <li>Buy PGY from our app</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-marker">
                                <span className="icon">
                                    <i className="fa fa-flag"></i>
                                </span>
                                </div>
                                <div className="step-details">
                                    <p className="step-title">Q4 2023</p>
                                    <ul>
                                        <li>Launch in more networks</li>
                                        <li>Marketing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-6">

            </div>
        </section>
    );
}