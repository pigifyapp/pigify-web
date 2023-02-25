import BankEntry from "../components/dashboard/BankEntry";
import PGY from "../images/PGY.png"
import USDC from "../images/USDC.png";
import USDT from "../images/USDT.png";
import BUSD from "../images/BUSD.png";
import USDD from "../images/USDDD.png";
import DAI from "../images/DAI.png";
import {useEffect, useState} from "react";
import Navbar from "../components/dashboard/Navbar";
import web3 from "../web3/web3";
import {pigifyAddress} from "../web3/pigify";

export default function Dashboard() {
    const [address, setAddress] = useState("");

    async function fetchAddress() {
        const accounts = await web3.eth.requestAccounts();

        console.log(accounts);

        setAddress(accounts[0]);
    }

    useEffect(() => {
        fetchAddress()
    }, []);

    return (
        <div>

            <Navbar />

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
                            <BankEntry tokenInternalId={0} tokenAddress={pigifyAddress} decimals={18} address={address} tokenName="PGY" image={PGY}/>
                            <BankEntry tokenInternalId={1} tokenAddress={"0x55d398326f99059fF775485246999027B3197955"} decimals={18} address={address} tokenName="USDT" image={USDT}/>
                            <BankEntry tokenInternalId={2} tokenAddress={"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"} decimals={18} address={address} tokenName="USDC" image={USDC}/>
                            <BankEntry tokenInternalId={3} tokenAddress={"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"} decimals={18} address={address} tokenName="BUSD" image={BUSD}/>
                            <BankEntry tokenInternalId={4} tokenAddress={"0xd17479997F34dd9156Deef8F95A52D81D265be9c"} decimals={18} address={address} tokenName="USDD" image={USDD}/>
                            <BankEntry tokenInternalId={4} tokenAddress={"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"} decimals={18} address={address} tokenName="DAI" image={DAI}/>
                            </tbody>)}

                        </table>
                    </div>
                </div>
            </section>
        </div>
    );

}