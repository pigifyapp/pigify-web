import "bulma-steps/dist/css/bulma-steps.min.css";
import "bulma-steps/dist/js/bulma-steps.min";

export default function Roadmap() {
    return (
        <section className="roadmap pt-6" id="roadmap">
            <div className="container has-text-centered">
                <div className="columns">
                    <div className="column">
                        <p className="title">Roadmap</p>
                    </div>
                </div>
            </div>
            <div className="container roadmap-container my-6">
                <div className="columns is-centered py-1">
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
                                        <li><del>Tokenomics</del></li>
                                        <li>Whitepaper</li>
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