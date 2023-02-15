import pigify from "../web3/pigify";
import { useEffect, useState } from "react";
import PiggyBank from "../components/PiggyBank";
import web3 from "../web3/web3";

const App = function() {
    const [address, setAddress] = useState("Unknown address");
    const [freePGY, setFreePGY] = useState("");

    const [balanceUSDT, setBalanceUSDT] = useState(0);
    const [balancePGY, setBalancePGY] = useState(0);
    const [goalUSDT, setGoalUSDT] = useState(0);
    const [goalPGY, setGoalPGY] = useState(0);

    const update = async() => {
        const accounts = await web3.eth.getAccounts();

        const targetAddress = accounts[0];

        setAddress(targetAddress);

        const pgy = await pigify.methods.balanceOf(targetAddress).call();
        
        setFreePGY((pgy / 10 ** 18).toLocaleString("en-US"));

        setBalanceUSDT(await pigify.methods.balanceUSDT(targetAddress).call());
        setGoalUSDT(await pigify.methods.balancePGY(targetAddress).call());

        setBalancePGY(await pigify.methods.balancePGY(targetAddress).call());
        setGoalPGY(await pigify.methods.goalPGY(targetAddress).call())
    }

    useEffect(() => {
        update();
    })

    return (
        <div>
            <p>Your address: {address}</p>
            <p>Your PGY: {freePGY}</p>
            <hr />
            <PiggyBank coinName="PGY" balance={balancePGY} goal={goalPGY}/>
            <hr />
            <PiggyBank coinName="USDT" balance={balanceUSDT} goal={goalUSDT}/>
        </div>
    );
}

export default App;