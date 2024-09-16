import { Web3PluginBase, Contract } from "web3";
import ABI from "./abi.mjs";

export default class Chronicle extends Web3PluginBase {
  pluginNamespace = "ethsafari2";

  async getLinkPrice() {
    //hardcode setProvider(Sepolia)
    // initialize contract
    const ADDRESS = "0x260c182f0054BF244a8e38d7C475b6d9f67AeAc1";
    const contract = new Contract(ABI, ADDRESS);

    // linking context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    // print result
    console.log("Link price is:", result.toString().substring(0, 2));
  }

  async getMaticPrice() {
    //hardcode setProvider(Sepolia)
    // initialize contract
    const ADDRESS = "0xEa00861Dc00eBd246F6E51E52c28aBd9062bc09F";
    const contract = new Contract(ABI, ADDRESS);

    // linking context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    // print result
    console.log("Matic price is:", result.toString());
  }

  async getBtcPriceOnGnosis() {
    //hardcode setProvider(Sepolia)
    // initialize contract
    const ADDRESS = "0xdD5232e76798BEACB69eC310d9b0864b56dD08dD";
    const contract = new Contract(ABI, ADDRESS);

    // linking context
    this.setProvider("https://rpc.ankr.com/gnosis");
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    // print result
    console.log("BTC price on gnosis is:", result.toString().substring(0, 5));
  }
}
