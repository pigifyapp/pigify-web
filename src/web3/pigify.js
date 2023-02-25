import abi from "./abi.json";
import web3 from "./web3";
export const pigifyAddress = '0xA7aea9E0605C1Ce37aC049D60363A8209F9F040C';
export const pigifyContract = new web3.eth.Contract(abi, pigifyAddress);