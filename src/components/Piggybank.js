const Piggybank = function(props) {

    return (
        <div>
            <h4>Piggybank for {props.coinName}</h4>
            <p>Balance: {props.balance.toLocaleString("en-US")}</p>
            <p>Goal: {props.goal}</p>
        </div>
    );
}

export default Piggybank;