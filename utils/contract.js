import { ethers } from "ethers";

// Contract details
const contractAddress = "0x953d2188b3b3bbd17449cebf42fe461deb57ee0d";
const contractABI = require("./contractABI.json"); // Save ABI as JSON in src/utils

export const getContract = () => {
  if (!window.ethereum) {
    alert("MetaMask is required!");
    return null;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};
