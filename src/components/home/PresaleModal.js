export default function PresaleModal({ isActive, handleClose }) {
    return (
        <div className={"modal" + (isActive ? " is-active" : "")}>
            <div className="modal-background" onClick={handleClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">
                        <span>Presale</span>
                    </p>
                    <button className="delete" onClick={handleClose} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p>Max Supply: <strong>100,000,000 $PGY</strong></p>
                            <p>Sale Allocation: <strong>8%</strong></p>
                            <p>Price: <strong>1 PGY = 0.4 USD</strong></p>

                            <hr/>
                            <p>We're allocating 8 million tokens to our presale</p>
                            <p>If you're interested, please, contact:</p>
                            <p><a href="mailto:sales@hysland.com"><strong>sales@hysland.com</strong></a></p>
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