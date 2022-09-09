var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "slice congress throw plastic rely coyote margin myself together manage romance actress";

module.exports = {
  networks: {
    // development: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 20);
    //   },
    //   network_id: '*',
    //   gas: 9999999
    // }
    development: {
      host: "127.0.0.1",     // Localhost
      port: 8545,            // Standard Ganache UI port
      network_id: "*",
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};