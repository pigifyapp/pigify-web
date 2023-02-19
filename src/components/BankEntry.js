import {useEffect, useState} from "react";
import BankEntryModal from "./BankEntryModal";
import pigify from "../web3/pigify";

const BankEntry = function({address, tokenName, image}) {
    const [isDepositModalOpen, setDepositModalOpen] = useState(false);
    const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
    const [isGoalModalOpen, setGoalModelOpen] = useState(false);

    const [balance, setBalance] = useState(0);
    const [goal, setGoal] = useState(0);
    const [rewards, setRewards] = useState(0);

    useEffect(() => {
        fetchEverything();
    }, [])

    async function fetchEverything() {
        await fetchTokenBalance();
        await fetchTokenGoal();
    }

    async function fetchTokenBalance() {
        const method = pigify.methods["balance" + tokenName];

        console.log(pigify.methods);

        if(method) {
            const balanceWithDecimals = await method(address).call();
            const balanceWithoutDecimals = balanceWithDecimals / Math.pow(10, 18)

            setBalance(balanceWithoutDecimals);
        } else {
            setBalance(-1);
        }
    }

    async function fetchTokenGoal() {
        const method = pigify.methods["goal" + tokenName];

        console.log(pigify.methods);

        if(method) {
            const goalWithDecimals = await method.call();
            const goalWithoutDecimals = goalWithDecimals / Math.pow(10, 18)

            setGoal(goalWithoutDecimals);
        } else {
            setGoal(-1);
        }
    }

    function openDepositModal() {
        setDepositModalOpen(true);
    }

    function closeDepositModal() {
        setDepositModalOpen(false);
    }

    function openWithdrawModal() {
        setWithdrawModalOpen(true);
    }

    function closeWithdrawModal() {
        setWithdrawModalOpen(false);
    }

    function openGoalModal() {
        setGoalModelOpen(true);
    }

    function closeGoalModal() {
        setGoalModelOpen(false);
    }

    return (
        <tr>
            <td className="has-text-centered"><img src={image} alt="Token" width="18px" height="18px"/></td>
            <td>{tokenName}</td>
            <td>{balance.toLocaleString("en-US")}</td>
            <td>{goal.toLocaleString("en-US")}</td>
            <td>{rewards.toLocaleString("en-US")} PGY</td>
            <td><a onClick={openDepositModal}>Deposit</a></td>
            <td><a onClick={openWithdrawModal}>Withdraw</a></td>
            <td><a onClick={openGoalModal}>Set goal</a></td>

            <BankEntryModal isActive={isDepositModalOpen} title="Deposit" close={closeDepositModal} image={image} balance={balance} tokenName={tokenName} goal={goal} rewards={rewards}>
                <p className="subtitle">How much would you like to deposit?</p>
                <input className="input" type="number" defaultValue="1"/>
            </BankEntryModal>

            <BankEntryModal isActive={isWithdrawModalOpen} title="Withdraw" close={closeWithdrawModal} image={image} balance={balance} tokenName={tokenName} goal={goal} rewards={rewards}>
                <p className="subtitle">How much would you like to withdraw?</p>
                <input className="input" type="number" defaultValue="1" />
            </BankEntryModal>

            <BankEntryModal isActive={isGoalModalOpen} title="Set goal" close={closeGoalModal} image={image} balance={balance} tokenName={tokenName} goal={goal} rewards={rewards}>
                <p className="subtitle">
                    <span style={{ color: "red" }}><i className="fa-solid fa-triangle-exclamation"></i> </span>
                    Be careful, once you set a goal you won't be able to withdraw your money until you save enough tokens.
                </p>
                <p className="subtitle">How much do you want to set as goal?</p>
                <input className="input" type="number" defaultValue="1" />
            </BankEntryModal>
        </tr>
    );
}

export default BankEntry;