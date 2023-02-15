import abi from "./abi.json";
import web3 from "./web3";

const contract = new web3.eth.Contract(abi, "0x52a431B6CF188Ef00E99F3e049B30c06D0324165");

export default contract;