import { IBuildTopics, TThemeTopics, ISidebarTopics } from "docs/types";
import { getTopicSubtitle, getThemeMenu } from "docs/utils";
import { emoji } from "docs/constants";

import { rootPath } from "../../constants";

const path = rootPath + "common/blockchain/";
const title = "Blockchain";
const theme: TThemeTopics = "actual";

const topics: ISidebarTopics[] = [
  {
    title: "Основное",
    children: [
      ["main/structure", emoji.theory + "Структура"],
      ["main/algoritm", emoji.fire + "Алгоритм работы"],
    ],
  },
  {
    title: "1. Blockchain",
    children: [
      ["blockchain/blockchain", emoji.theory + "Blockchain"],
      ["blockchain/smart-contract", "Smart Contract"],
      ["blockchain/solidity", getThemeMenu("method", ["Solidity"])],
      ["blockchain/ipfs", getThemeMenu("method", ["IPFS"])],
      ["blockchain/filecoin", getThemeMenu("method", ["Filecoin"])],
    ],
  },
  {
    title: "2. Crypto Wallet",
    children: [
      ["crypto-wallet/crypto-wallet", emoji.theory + "Crypto Wallet"],
      ["crypto-wallet/metamask", getThemeMenu("method", ["Metamask"])],
      ["crypto-wallet/web3auth", getThemeMenu("method", ["web3auth"])],
    ],
  },
  {
    title: "3. NFT",
    children: [
      ["nft/nft", emoji.theory + "NFT"],
      ["nft/token", emoji.theory + "Token"],
    ],
  },
  {
    title: "4. Application Web 3.0",
    children: [
      [
        "application-web3/application-web3",
        emoji.theory + "Application Web 3.0",
      ],
      [
        "application-web3/web3",
        getThemeMenu("method", ["Web3.js", "Ethers.js"]),
      ],
      ["application-web3/truffle", getThemeMenu("method", ["Truffle"])],
    ],
  },
  {
    title: "Теория",
    children: [
      ["theory/crypto-coins", emoji.theory + "Crypto Coins"],
      ["theory/subtypes-cryptocurrency", emoji.theory + "Подтипы криптовалюты"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
