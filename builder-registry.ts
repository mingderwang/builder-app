"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import RenderEtherspot from "./components/RenderEtherspot";
import ConnectWallet from "./components/ConnectWallet";

Builder.registerComponent(ConnectWallet, {
  name: "ConnectWallet",
  inputs: [
  ],
});

Builder.registerComponent(RenderEtherspot, {
  name: "RenderEtherspot",
  inputs: [
  ],
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
