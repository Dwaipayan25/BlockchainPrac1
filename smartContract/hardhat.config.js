require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/chxZO1gHtRpoF8iIJRvrkpQOgAmK2WqP",
      accounts: ["04a7a4ca4c0344f35f60b48ca2ee2eafc9a3695d481d405948bc71ad0c91df5c"]
    },
  },
  etherscan:{
    apiKey:"H6U8FCPWQ52NJCXWUU3DJ3AN6VSBR1Y7T9",
  }
};
