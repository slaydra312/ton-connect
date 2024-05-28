"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function TonProviders({ children }: Props) {
  return (
    <>
      <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
        {children}
      </TonConnectUIProvider>
    </>
  );
}

export default TonProviders;
