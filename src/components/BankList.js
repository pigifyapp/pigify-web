import BankEntry from "./BankEntry";
import StakingCard from "./StakingCard";
import "bulma-list/css/bulma-list.css";
import USDC from "../images/USDC.png";
import USDT from "../images/USDT.png";
import DAI from "../images/DAI.png";
import TUSD from "../images/TrueUSD.jpeg";

export default function BankList() {

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

                        <tbody>
                            <BankEntry tokenName="USDT" balance="0" goal="0" rewards="0" image={USDT}/>
                            <BankEntry tokenName="USDC" balance="0" goal="0" rewards="0" image={USDC}/>
                            <BankEntry tokenName="DAI" balance="0" goal="0" rewards="0" image={DAI}/>
                            <BankEntry tokenName="TUSD" balance="0" goal="0" rewards="0" image={TUSD}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
);

}