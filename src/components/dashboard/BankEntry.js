import {useEffect, useState} from "react";
import BankEntryModal from "./BankEntryModal";
import erc20 from "../../web3/erc20";
import web3 from "../../web3/web3";
import {pigifyContract} from "../../web3/pigify";

const BankEntry = function({tokenAddress, tokenInternalId, decimals, address, tokenName, image}) {
    const [isDepositModalOpen, setDepositModalOpen] = useState(false);
    const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
    const [isGoalModalOpen, setGoalModelOpen] = useState(false);

    const [balance, setBalance] = useState(0);
    const [goal, setGoal] = useState(0);
    const [depositFee, setDepositFee] = useState(0);

    const [depositInputValue, setDepositInputValue] = useState(0);
    const [isDepositing, setIsDepositing] = useState(false);
    const [depositMessage, setDepositMessage] = useState("");

    const [goalInputValue, setGoalInputValue] = useState(0);
    const [isSettingGoal, setIsSettingGoal] = useState(false);
    const [goalModalMessage, setGoalModalMessage] = useState("");

    const [isWithdrawing, setIsWithdrawing] = useState(false);
    const [withdrawMessage, setWithdrawMessage] = useState("");

    useEffect(() => {
        fetchEverything();
    }, [])

    async function fetchEverything() {
        try {
            await fetchTokenBalance();
            await fetchTokenGoal();
            await fetchDepositFee();
        } catch(e) {
            console.log(e);
        }
    }

    async function fetchTokenBalance() {
        try {
            const balanceWithDecimals = web3.utils.toBN(await pigifyContract.methods.readBalance(tokenInternalId, address).call());
            const balanceWithoutDecimals = balanceWithDecimals.div(web3.utils.toBN(10 ** decimals));

            setBalance(balanceWithoutDecimals.toNumber());
        } catch(e) {
            console.log("fetchTokenBalance() error");
            console.log(e);
        }
    }

    async function fetchTokenGoal() {
        const method = pigifyContract.methods["readGoal"];

        if(method) {
            const goalWithDecimals = web3.utils.toBN(await method(tokenInternalId, address).call());
            const goalWithoutDecimals = goalWithDecimals.div(web3.utils.toBN(10 ** decimals));

            setGoal(goalWithoutDecimals.toNumber());
        } else {
            setGoal(-1);
        }
    }

    async function fetchDepositFee() {
        const getTokenDepositFee = pigifyContract.methods["getTokenDepositFee"];

        const depositFeeWithDecimals = web3.utils.toBN(
            await getTokenDepositFee(tokenInternalId).call()
        );

        const depositFeeWithoutDecimals = depositFeeWithDecimals.div(
            web3.utils.toBN(10 ** decimals)
        );

        setDepositFee(depositFeeWithoutDecimals.toNumber());
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
            await tokenContract.methods.approve(pigifyContract.options.address, amount).send({
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

        const method = pigifyContract.methods["depositToken"];

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
            await pigifyContract.methods.establishGoal(tokenInternalId, goal).send({
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

    async function withdraw() {
        setIsWithdrawing(true);

        try {
            await pigifyContract.methods.withdrawToken(tokenInternalId).send({
                from: address
            });

            setWithdrawMessage("You successfully withdrew your tokens.")

            setIsWithdrawing(false);

            await fetchEverything();
        } catch(e) {
            console.log("withdraw() error:")
            console.log(e);

            setWithdrawMessage(e.message);

            setIsWithdrawing(false);
        }
    }

    return (
        <tr>
            <td className="has-text-centered"><img src={image} alt="Token" width="18px" height="18px"/></td>
            <td>{tokenName}</td>
            <td>{balance.toLocaleString("en-US")}</td>
            <td>{goal.toLocaleString("en-US")}</td>
            <td>{depositFee.toLocaleString("en-US")} {tokenName}</td>
            <td><a onClick={openDepositModal}>Deposit</a></td>
            <td><a onClick={openWithdrawModal}>Withdraw</a></td>
            <td><a onClick={openGoalModal}>Set goal</a></td>

            <BankEntryModal handleSubmit={deposit} isLoading={isDepositing} isActive={isDepositModalOpen} title="Deposit" close={closeDepositModal} image={image} balance={balance} tokenName={tokenName} goal={goal} depositFee={depositFee}>
                <p className="subtitle">How many tokens would you like to deposit?</p>
                <input className="input" onChange={handleDepositChange} type="number" min="2" defaultValue={depositInputValue} />
                {depositMessage !== "" && <p>{depositMessage}</p>}
            </BankEntryModal>

            <BankEntryModal handleSubmit={withdraw} isLoading={isWithdrawing} isActive={isWithdrawModalOpen} title="Withdraw" close={closeWithdrawModal} image={image} balance={balance} tokenName={tokenName} goal={goal} depositFee={depositFee}>
                <p className="subtitle">Do you want to withdraw all of your tokens?</p>
                {withdrawMessage !== "" && <p>{withdrawMessage}</p>}
            </BankEntryModal>

            <BankEntryModal handleSubmit={sendGoal} isLoading={isSettingGoal} isActive={isGoalModalOpen} title="Set goal" close={closeGoalModal} image={image} balance={balance} tokenName={tokenName} goal={goal} depositFee={depositFee}>
                <p className="subtitle">
                    <span style={{ color: "red" }}><i className="fa-solid fa-triangle-exclamation"></i> </span>
                    Be careful, if you set a goal you won't be able to withdraw your tokens until you reach that goal.
                </p>
                <p className="subtitle">How many tokens do you want to set as goal?</p>
                <input className="input" onChange={handleGoalChange} type="number" min="2" defaultValue={goalInputValue} />
                {goalModalMessage !== "" && <p>{goalModalMessage}</p>}
            </BankEntryModal>
        </tr>
    );
}

export default BankEntry;