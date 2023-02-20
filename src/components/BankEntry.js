import {useEffect, useState} from "react";
import BankEntryModal from "./BankEntryModal";
import pigify from "../web3/pigify";
import web3 from "../web3/web3";
import erc20 from "../web3/erc20";

const BankEntry = function({tokenAddress, tokenInternalId, decimals, address, tokenName, image}) {
    const [isDepositModalOpen, setDepositModalOpen] = useState(false);
    const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
    const [isGoalModalOpen, setGoalModelOpen] = useState(false);

    const [balance, setBalance] = useState(0);
    const [goal, setGoal] = useState(0);
    const [rewards, setRewards] = useState(0);

    const [depositInputValue, setDepositInputValue] = useState(0);
    const [isDepositing, setIsDepositing] = useState(false);
    const [depositMessage, setDepositMessage] = useState("");

    const [goalInputValue, setGoalInputValue] = useState(0);
    const [isSettingGoal, setIsSettingGoal] = useState(false);
    const [goalModalMessage, setGoalModalMessage] = useState("");

    useEffect(() => {
        fetchEverything();
    }, [])

    async function fetchEverything() {
        try {
            await fetchTokenBalance();
            await fetchTokenGoal();
        } catch(e) {
            console.log(e);
        }
    }

    async function fetchTokenBalance() {
        try {
            const balanceWithDecimals = web3.utils.toBN(await pigify.methods.readBalance(tokenInternalId, address).call());
            const balanceWithoutDecimals = balanceWithDecimals.div(web3.utils.toBN(10 ** decimals));

            setBalance(balanceWithoutDecimals.toNumber());
        } catch(e) {
            console.log("fetchTokenBalance() error");
            console.log(e);
        }
    }

    async function fetchTokenGoal() {
        const method = pigify.methods["readGoal"];

        if(method) {
            const goalWithDecimals = web3.utils.toBN(await method(tokenInternalId, address).call());
            const goalWithoutDecimals = goalWithDecimals.div(web3.utils.toBN(10 ** decimals));

            setGoal(goalWithoutDecimals.toNumber());
        } else {
            setGoal(-1);
        }
    }

    function openDepositModal() {
        setDepositModalOpen(true);
    }

    function closeDepositModal() {
        setDepositModalOpen(false);
        setDepositMessage("");
    }

    function handleDepositChange(event) {
        setDepositInputValue(event.target.value);
    }

    async function approveDeposit() {
        const depositAmount = depositInputValue;
        const amount = web3.utils.toBN(depositAmount * 10 ** decimals);

        const tokenContract = erc20(tokenAddress);

        try {
            setIsDepositing(true);
            await tokenContract.methods.approve(pigify.options.address, amount).send({
                from: address
            });
            console.log("Successfully approved deposit of " + depositAmount + " " + tokenName);
            setIsDepositing(false);
            return true;
        }catch (e) {
            setIsDepositing(false);
            console.log("FAILED to approve deposit of " + depositAmount + " " + tokenName);
            return false;
        }
    }

    async function deposit() {
        const approved = await approveDeposit();

        if(!approved) {
            setDepositMessage("You didn't allow the transaction");
            return;
        }

        setIsDepositing(true);

        const amount = web3.utils.toBN(depositInputValue * 10 ** decimals);

        const method = pigify.methods["depositToken"];

        if(method) {
            setIsDepositing(true);

            try {
                await method(tokenInternalId, amount).send({
                    from: address
                });

                setIsDepositing(false);
                setDepositMessage("Deposit completed.");

                await fetchEverything();
            } catch(e) {
                setIsDepositing(false);
                setDepositMessage(e.message);
                console.log(e);
            }
        }
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

    function handleGoalChange(event) {
        setGoalInputValue(event.target.value);
    }

    async function sendGoal() {
        const goal = web3.utils.toBN(goalInputValue).mul(
            web3.utils.toBN(10**18)
        );

        setIsSettingGoal(true);

        try {
            await pigify.methods.establishGoal(tokenInternalId, goal).send({
                from: address
            });

            setIsSettingGoal(false);
            setGoalModalMessage("Successfully updated goal");

            await fetchEverything();
        } catch(e) {
            setGoalModalMessage(e.message);
            setIsSettingGoal(false);

            console.log("sendGoal() error:")
            console.log(e);
        }
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

            <BankEntryModal handleSubmit={deposit} isLoading={isDepositing} isActive={isDepositModalOpen} title="Deposit" close={closeDepositModal} image={image} balance={balance} tokenName={tokenName} goal={goal} rewards={rewards}>
                <p className="subtitle">How much would you like to deposit?</p>
                <input className="input" onChange={handleDepositChange} type="number" defaultValue={depositInputValue} />
                {depositMessage !== "" && <p>{depositMessage}</p>}
            </BankEntryModal>

            <BankEntryModal isActive={isWithdrawModalOpen} title="Withdraw" close={closeWithdrawModal} image={image} balance={balance} tokenName={tokenName} goal={goal} rewards={rewards}>
                <p className="subtitle">How much would you like to withdraw?</p>
                <input className="input" type="number" defaultValue="1" />
            </BankEntryModal>

            <BankEntryModal handleSubmit={sendGoal} isLoading={isSettingGoal} isActive={isGoalModalOpen} title="Set goal" close={closeGoalModal} image={image} balance={balance} tokenName={tokenName} goal={goal} rewards={rewards}>
                <p className="subtitle">
                    <span style={{ color: "red" }}><i className="fa-solid fa-triangle-exclamation"></i> </span>
                    Be careful, once you set a goal you won't be able to withdraw your money until you save enough tokens.
                </p>
                <p className="subtitle">How much do you want to set as goal?</p>
                <input className="input" onChange={handleGoalChange} type="number" defaultValue={goalInputValue} />
                {goalModalMessage !== "" && <p>{goalModalMessage}</p>}
            </BankEntryModal>
        </tr>
    );
}

export default BankEntry;