import savingImage from "../images/saving.jpg";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function MainHero() {
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function requestMetamask() {
        if(!window.ethereum) {
            // open modal explaining that you need metamask or other wallet to use in order to use Pigify
            return;
        }

        try {
            setLoading(true);

            await window.ethereum.request({ method: "eth_requestAccounts" })
                .then((result) => {
                    console.log("Metamask accepted, nice");
                    console.log(result);

                    navigate("/dashboard");

                    setLoading(false);
                })
                .catch((error) => {
                    console.log("Error");
                    console.log(error);

                    setLoading(false)
                });
        } catch(e) {
            console.log("Metamask not installed?");
        }
    }

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

                    <a className={"button is-danger mt-3 mainhero-button" + (isLoading ? " is-loading" : "")} onClick={requestMetamask}>Start Saving</a>
                </div>

                <div className="column">
                    <img src={savingImage} alt="sd"/>
                </div>
            </div>
        </section>
    );
}