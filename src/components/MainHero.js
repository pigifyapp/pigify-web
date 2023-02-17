import savingImage from "../images/saving.jpg";

export default function MainHero({ handleSavingButton }) {
    return (
        <section className="hero hero-section is-fullheight-with-navbar">
            <div className="hero-body columns">
                <div className="column">
                    <p className="title is-strong my-0 mb-3">
                        Shape your financial destiny.
                    </p>

                    <p className="subtitle is-strong my-3" style={{width: "80%"}}>
                        Pigify is a <strong>free and open source</strong> dapp that will <strong>force you</strong> to save and <strong>achieve your financial goals</strong> ;)
                    </p>

                    <button className="button is-danger mt-3" onClick={handleSavingButton}>Start Saving</button>
                </div>

                <div className="column">
                    <img src={savingImage} alt="sd"/>
                </div>
            </div>
        </section>
    );
}