import abi from "./abi.json";
import web3 from "./web3";
export const pigifyAddress = '0x5eF13bA48d3d3766d0B6d9C93e09d80057dcf562';
export const pigifyContract = new web3.eth.Contract(abi, pigifyAddress);