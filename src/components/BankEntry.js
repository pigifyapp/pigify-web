import {useState} from "react";
import BankEntryModal from "./BankEntryModal";

const BankEntry = function({tokenName, balance, goal, rewards, image}) {
    const [isDepositModalOpen, setDepositModalOpen] = useState(false);
    const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
    const [isGoalModalOpen, setGoalModelOpen] = useState(false);

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
            <td>{balance}</td>
            <td>{goal}</td>
            <td>{rewards} PGY</td>
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