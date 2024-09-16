// import plugin and web3
import MyPluginSafari from "./index.mjs";
import { Web3 } from "web3";

// initialize RPC
const web3 = new Web3("https://zkevm-rpc.com"); // mainnet

// register plugin
web3.registerPlugin(new MyPluginSafari());

// use plugin
web3.ethsafari.starknetChainId();
web3.ethsafari.starknetBlockWithReceipts();
web3.ethsafari.polygonZkEvm("15991952");
