import { FC } from "react";
import { Flex } from "@chakra-ui/layout";
import { Header } from "../Header";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
// import { useWallet } from '../../context/wallet-provider'
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { useAccount } from "wagmi";

import erc20ABI from "../../constants/erc20ABI.json";

export const Page: FC = ({ children }) => {
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: "0x3F78e84159741f6628cBa776B9005a53c485d120",
    abi: erc20ABI,
    functionName: "mint",
    args: [address, "100000000000000000000"],
  });

  const { write } = useContractWrite(config);

  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" backgroundColor="#e28743">
        <Header />
        <main>{children}</main>
      </Flex>
      <Button color={"orange.100"} bg={"orange"} onClick={() => write?.()}>
        Mint Tokens to current address
      </Button>
    </>
  );
};
