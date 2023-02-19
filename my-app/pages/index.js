import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useIsMounted } from "../hooks/useIsMounted";
import { useAccount } from "wagmi";

export default function Home() {
  const mounted = useIsMounted();
  const { address } = useAccount();

  return (
    <div>
      <h1>Hello</h1>
      <ConnectButton />
      {mounted ? address && <p>My Address is {address}</p> : null}
    </div>
  );
}
