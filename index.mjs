import { Web3PluginBase, utils } from "web3";

export default class MyPluginSafari extends Web3PluginBase {
  pluginNamespace = "ethsafari";

  async starknetChainId() {
    this.setProvider("https://docs-demo.strk-mainnet.quiknode.pro");
    const chainId = await this.requestManager.send({
      method: "starknet_chainId",
      params: [],
    });

    console.log("Starknet chain id:", utils.toBigInt(chainId));
  }

  async starknetBlockWithReceipts() {
    this.setProvider("https://docs-demo.strk-mainnet.quiknode.pro");
    const result = await this.requestManager.send({
      method: "starknet_getBlockWithReceipts",
      params: ["latest"],
    });
    console.log("BLOCK WITH RECEIPTS:", result);
  }

  async polygonZkEvm(blockNumber) {
    this.setProvider("https://zkevm-rpc.com");
    const response = await this.requestManager.send({
      method: "zkevm_isBlockConsolidated",
      params: [blockNumber],
    });
    console.log("block number", blockNumber, "is consolidated:", response);
  }
}
