export default function BankEntryModal({ handleSubmit, isLoading, children, isActive, image, title, close, balance, tokenName, goal, depositFee}) {
    return (
        <div className={"modal" + (isActive ? " is-active" : "")}>
            <div className="modal-background" onClick={close}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">
                        <img src={image} alt="Token" width="15px" height="15px"/>
                        <span> {title}</span>
                    </p>
                    <button className="delete" onClick={close} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        <div className="column">
                            <p className="subtitle">Balance: {balance} {tokenName}</p>
                        </div>

                        <div className="column">
                            <p className="subtitle">Goal: {goal} {tokenName}</p>
                        </div>

                        <div className="column">
                            <p className="subtitle">Deposit fee: {depositFee} {tokenName}</p>
                        </div>
                    </div>

                    { children }
                </section>
                <footer className="modal-card-foot">
                    <button className={"button is-danger" + (isLoading ? " is-loading" : "")} onClick={handleSubmit}>{title}</button>
                    <button className="button" onClick={close}>Cancel</button>
                </footer>
            </div>
        </div>
    );
}