import savingImage from "../images/saving.jpg";

export default function MainHero({ handleSavingButton }) {
    return (
        <section className="hero hero-section is-fullheight">
            <div className="hero-body columns">
                <div className="column">
                    <p className="my-0 mb-3 mainhero-title">
                        Shape your financial destiny.
                    </p>

                    <p className="my-3 mainhero-subtitle" style={{width: "80%"}}>
                        Pigify is a <strong>decentralized</strong> saving platform that will <strong>force you</strong> to save and <strong>achieve</strong> your <strong>financial goals</strong>.
                    </p>

                    <button className="button is-danger mt-3 mainhero-button" onClick={handleSavingButton}>Start Saving</button>
                </div>

                <div className="column">
                    <img src={savingImage} alt="sd"/>
                </div>
            </div>
        </section>
    );
}