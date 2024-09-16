# INFO

Here you will find the plugin created to interacct with L2s using custom RPC methods, in `plugin-oracles` you will find the plugin created to interact with `chronicle` oracles using web3.js and in `test-plugin` we had an example of installing and interacting with the created plugins.

# Plugin ETH Safari RPCs :D

```js
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
```

# ethsafari-build-plugins
