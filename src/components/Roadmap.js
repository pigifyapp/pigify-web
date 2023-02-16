import "bulma-steps/dist/css/bulma-steps.min.css";
import "bulma-steps/dist/js/bulma-steps.min";

export default function Roadmap() {
    return (
        <section className="roadmap">
            <div className="container" id="roadmap">
                <div className="columns is-centered has-text-centered py-6">
                    <div className="title is-black">Our roadmap</div>
                </div>

                <div className="columns is-centered pb-6">
                    <div className="column">
                        <div className="steps">
                            <div className="step-item is-completed is-success">
                                <div className="step-marker">
                                <span className="icon">
                                    <i className="fa fa-check"></i>
                                </span>
                                </div>
                                <div className="step-details">
                                    <p className="step-title">Q1 2023</p>
                                    <ul>
                                        <li>Tokenomics</li>
                                        <li>Whitepaper</li>
                                        <li>Premarketing</li>
                                        <li>Presale</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="step-item is-active">
                                <div className="step-marker">2</div>
                                <div className="step-details">
                                    <p className="step-title">Q2 2023</p>
                                    <ul>
                                        <li>Website launch</li>
                                        <li>Marketing campaign</li>
                                        <li>Token public release</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-marker">3</div>
                                <div className="step-details">
                                    <p className="step-title">Q3 2024</p>
                                    <ul>
                                        <li>Save-to-Earn</li>
                                        <li>Affiliates system</li>
                                        <li>Website improvements</li>
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
                                        <li>Mobile app</li>
                                        <li>Marketing campaign</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}