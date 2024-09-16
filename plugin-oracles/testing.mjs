import { Web3 } from "web3";
import Chronicle from "./index.mjs";

const web3 = new Web3("https://gateway.tenderly.co/public/sepolia");
web3.registerPlugin(new Chronicle());

web3.ethsafari2.getLinkPrice();
web3.ethsafari2.getMaticPrice();
web3.ethsafari2.getBtcPriceOnGnosis();
