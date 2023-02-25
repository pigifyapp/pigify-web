import abi from "./abi.json";
import web3 from "./web3";
export const pigifyAddress = '0xA9BbD56541eAB22A1E256ed47324A9051E965c0b';
export const pigifyContract = new web3.eth.Contract(abi, pigifyAddress);