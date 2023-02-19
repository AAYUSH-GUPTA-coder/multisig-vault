import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useIsMounted } from "../hooks/useIsMounted";
import { ethers } from "ethers";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import {
  MULTISIG_VAULT_CONTRACT_ADDRESS,
  VAULT_TOKEN_CONTRACT_ADDRESS,
  MULTISIG_VAULT_ABI,
  VAULT_TOKEN_ABI,
} from "../constants/index";

export default function Home() {
  const mounted = useIsMounted();
  const { address } = useAccount();

  // mint erc-20 token
  const { config } = usePrepareContractWrite({
    address: VAULT_TOKEN_CONTRACT_ADDRESS,
    contractInterface: VAULT_TOKEN_ABI,
    functionName: "mint",
    args: [
      "0x4E476F7FB84c785557cDECdbf8CADEbE8EA57C37",
      ethers.utils.parseEther(100, "ether"),
    ],
  });

  const { write: mint, isSuccess } = useContractWrite(config);

  return (
    <div>
      <h1>Hello</h1>
      <ConnectButton />
      {mounted ? address && <p>My Address is {address}</p> : null}
      <button
        style={{ marginTop: 24 }}
        className="button"
        onClick={() => mint?.()}
      >
        mint
      </button>
    </div>
  );
}
