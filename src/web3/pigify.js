import abi from "./abi.json";
import web3 from "./web3";
export const pigifyAddress = "0x7A0C2de46B3E43aF2B86B241932bEA2533e93d13";
export const pigifyContract = new web3.eth.Contract(abi, pigifyAddress);