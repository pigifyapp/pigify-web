import BankEntry from "./BankEntry";
import StakingCard from "./StakingCard";
import "bulma-list/css/bulma-list.css";
import USDC from "../images/USDC.png";
import USDT from "../images/USDT.png";
import DAI from "../images/DAI.png";
import TUSD from "../images/TrueUSD.jpeg";
import web3 from "../web3/web3";
import {useEffect, useState} from "react";

export default function BankList() {
    const [address, setAddress] = useState("");

    async function fetchAddress() {
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
    }

    useEffect(() => {
        fetchAddress()
    }, []);

    return (
        <section className="hero hero-section is-fullheight-with-navbar">
            <div className="hero-body columns">
                <div className="column">
                    <StakingCard />
                </div>
                <div className="column">
                    <table className="table mx-auto">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Token</th>
                            <th>Balance</th>
                            <th>Goal</th>
                            <th>Reward</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>

                        {address !== "" && (<tbody>
                            <BankEntry address={address} tokenName="PGY" image={USDT}/>
                            <BankEntry address={address} tokenName="USDT" image={USDT}/>
                            <BankEntry address={address} tokenName="USDC" image={USDC}/>
                            <BankEntry address={address} tokenName="DAI" image={DAI}/>
                            <BankEntry address={address} tokenName="TUSD" image={TUSD}/>
                        </tbody>)}

                    </table>
                </div>
            </div>
        </section>
);

}