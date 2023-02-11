import abi from "./abi.json";
import web3 from "./web3";

const contract = new web3.eth.Contract(abi, "0x476353473f7b173ff47ca75aa2585bfb26c7d4af");

export default contract;