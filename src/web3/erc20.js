import abi from "./erc20.abi.json";
import web3 from "./web3";

export default function erc20(address) {
    return new web3.eth.Contract(abi, address)
};