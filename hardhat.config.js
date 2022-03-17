import "@nomiclabs/hardhat-waffle";

export const solidity = "0.8.4";
export const networks = {
  hardhat: {
    chainId: 1337
  },
  // mumbai: {
  //   url: "https://rpc-mumbai.matic.today",
  //   accounts: [process.env.pk]
  // },
  mumbai: {
    url: "https://polygon-mumbai.g.alchemy.com/v2/Lt3ERhjpWlZIUKSAnddcfDAFGWZMbfOs",
    accounts: [process.env.pk]
  },
  // polygon: {
  //   url: "https://polygon-rpc.com/",
  //   accounts: [process.env.pk]
  // }
};
