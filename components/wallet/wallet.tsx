"use client";

import React, { useState } from "react";


const EduchainWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed. Please install it to continue.");
      return;
    }

    try {
      // Request account access from MetaMask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setWalletAddress(account);

      // Check if user is on Educhain (chainID: 656476 => 0xA045C)
      const targetChainId = "0xA045C";
      const currentChainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (currentChainId !== targetChainId) {
        try {
          // Try switching to Educhain
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: targetChainId }],
          });
        } catch (switchError: any) {
          // If the chain is not added, add it
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: targetChainId,
                    chainName: "Educhain",
                    rpcUrls: ["https://rpc.open-campus-codex.gelato.digital/"],
                    blockExplorerUrls: [
                      "https://opencampus-codex.blockscout.com/",
                    ],
                  },
                ],
              });
            } catch (addError: any) {
              setError("Failed to add Educhain network.");
            }
          } else {
            setError("Failed to switch to Educhain.");
          }
        }
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 border rounded-md">
      {walletAddress ? (
        <div>
          <p>Connected: {walletAddress}</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Connect Wallet
        </button>
      )}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default EduchainWallet;
