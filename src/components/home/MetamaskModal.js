export default function MetamaskModal({ isActive, handleClose }) {
    return (
        <div className={"modal" + (isActive ? " is-active" : "")}>
            <div className="modal-background" onClick={handleClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">
                        <span>Install Metamask</span>
                    </p>
                    <button className="delete" onClick={handleClose} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        <div className="column">
                            <p className="subtitle">Please, install a Wallet</p>
                            <p className="my-2">We couldn't find a wallet connected to your browser. Please install a wallet like Metamask to continue.</p>

                            <p className="subtitle">How to install Metamask:</p>
                            <ul className="my-2">
                                <li>Go to the official Metamask website: <a target="_blank" href="https://metamask.io/">https://metamask.io/</a></li>
                                <li>Click on the "Download" button.</li>
                                <li>Choose your browser or device.</li>
                                <li>Follow the instructions to add Metamask to your browser or device.</li>
                                <li>Return to Pigify and refresh the page.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={handleClose}>Close</button>
                </footer>
            </div>
        </div>
    );
}