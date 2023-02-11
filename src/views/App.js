import pigify from "../pigify";
import { useEffect, useState } from "react";

const App = function() {
    const [balance, setBalance] = useState(0);

    const update = async() => {
        setBalance(await pigify.methods.balanceOf("0xeC357C27a26E94955eb415633404495044Ba7fcd").call())
    }

    useEffect(() => {
        update();
    })

    return (
        <div>
            <p>Your balance: {balance}</p>
            <p>USDT savings: 0</p>
            <p>PGY savings: 0</p>
        </div>
    );
}

export default App;