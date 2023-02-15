const PiggyBank = function(props) {

    return (
        <div>
            <h4>Piggybank for {props.coinName}</h4>
            <p>Balance: {props.balance.toLocaleString("en-US")}</p>
            <p>Goal: {props.goal}</p>
            <form>
                <input type="number" placeholder="100"/>
                <button>Deposit</button>
            </form>
            <button>Withdraw</button>
        </div>
    );
}

export default PiggyBank;