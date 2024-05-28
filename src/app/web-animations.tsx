"use client";

import React from "react";

function WebAnimations() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.unpkg.com/web-animations-js@latest/web-animations.min.js`;

    const script_sdk = document.createElement("script");
    script_sdk.src = `https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js`;

    document.body.appendChild(script);
    document.body.appendChild(script_sdk);
  }, []);

  return null;
}

export default WebAnimations;
