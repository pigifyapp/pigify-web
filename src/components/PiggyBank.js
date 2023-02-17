import DAI from "../images/DAI.png";

const PiggyBank = function({tokenName, balance, goal, rewards, image}) {

    return (
        <tr>
            <th className="has-text-centered"><img src={image} alt="DAI" width="18px" height="18px"/></th>
            <th>{tokenName}</th>
            <th>{balance}</th>
            <th>{goal}</th>
            <th>{rewards} PGY</th>
            <th><a href="#">Deposit</a></th>
            <th><a href="#">Withdraw</a></th>
        </tr>
    );
}

export default PiggyBank;