import abi from "./abi.json";
import web3 from "./web3";

const contract = new web3.eth.Contract(abi, "0xD66EBBCA76fB35C39289DfA8f2D15E7BB1360868");

export default contract;