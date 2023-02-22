import BankEntry from "./BankEntry";
import StakingCard from "./StakingCard";
import "bulma-list/css/bulma-list.css";
import USDC from "../images/USDC.png";
import USDT from "../images/USDT.png";
import web3 from "../web3/web3";
import {useEffect, useState} from "react";
import pigify from "../web3/pigify";

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
        <section className="hero hero-section is-fullheight">
            <div className="hero-body columns">
                <div className="column">
                    <table className="table mx-auto">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Token</th>
                            <th>Balance</th>
                            <th>Goal</th>
                            <th>Deposit fee</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>

                        {address !== "" && (<tbody>
                            <BankEntry tokenInternalId={0} tokenAddress={pigify.options.address} decimals={18} address={address} tokenName="PGY" image={USDT}/>
                            <BankEntry tokenInternalId={1} tokenAddress={"0x5AB6F31B29Fc2021436B3Be57dE83Ead3286fdc7"} decimals={18} address={address} tokenName="USDT" image={USDT}/>
                            <BankEntry tokenInternalId={2} tokenAddress={"0x466595626333c55fa7d7Ad6265D46bA5fDbBDd99"} decimals={18} address={address} tokenName="USDC" image={USDC}/>
                        </tbody>)}

                    </table>
                </div>
            </div>
        </section>
);

}