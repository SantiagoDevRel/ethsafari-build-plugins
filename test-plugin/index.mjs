// import web3 and plugin
import { Web3 } from "web3";
import MyPluginSafari from "ethsafari-workshop-saturday";

// initalize RPC endpoint
const web3 = new Web3();

// register plugin
web3.registerPlugin(new MyPluginSafari());

// use plugin
web3.ethsafari.starknetChainId();
web3.ethsafari.starknetBlockWithReceipts();
web3.ethsafari.polygonZkEvm("15991952");
