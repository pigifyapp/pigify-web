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
                                        <li>Forced saving</li>
                                        <li>Public release</li>
                                        <li>Marketing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="step-item">
                                <div className="step-marker">3</div>
                                <div className="step-details">
                                    <p className="step-title">Q3 2024</p>
                                    <ul>
                                        <li>Save-to-Earn</li>
                                        <li>Mobile app launch</li>
                                        <li>Marketing</li>
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
            <div className="container my-6">

            </div>
        </section>
    );
}