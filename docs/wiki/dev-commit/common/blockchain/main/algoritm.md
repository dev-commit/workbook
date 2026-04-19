# Алгоритм

## ⭐️ Blockchain Server

#### 1. Создать Blockchain Server

- На базе Ethereum и т.д.
- IPFS
- geth - Go приложение, позволяющее запустить свою Node Ethereum Blockchain локально или на удаленном сервере
- Ganache - локальный блокчейн для разработки, который можно использовать для имитации поведения публичного блокчейна

#### 2. Добавить хранилище для Blockchain-сети

- Decentrilized Storages - хранилище
- На базе Ethereum и т.д.
- Pinata - базируется на IPFS
- Filecoin - базируется на IPFS

#### 2. Добавить Smart Contracts к Blockchain

- Solidity
- Remix - онлайн редактор кода для Smart Contracts. Позволяет добавлять Smart Contracts в Blockchain (production или тестовый)

---

## ⭐️ Crypto Wallet

#### Создать крипто-кошелёк

- На базе Etherium Chain и т.д.
- Metamask - сеть для передачи NFT

---

## ⭐️ NFT

#### Создать NFT для файла

- NFT можно создавать через разные генераторы
- Autominter

---

## ⭐️ Frontend Application Web 3.0

#### 1. Добавить авторизацию через Wallet

- Добавить крипто-кошелек в приложение
- Приложение через библиотеку Web3.js делает запрос к Wallet (кошельку) для авторизации пользователя
- В кошельке хранится Etherium-аккаунт (например) пользователя для Blockchain
- web3auth - инфраструктура для подключения кошельков

#### 2. Реализовать обращение к Blockchain Server

- После авторизации, приложение может обращаться к Blockchain Server
- Для обращения к Blockchain должна быть своя Node Blockchain - свой компьютер, подключенный к Blockchain сети и имеющей копию Etherium (например)

Можно не создавать свою Node Blockchain, а воспользоваться API для доступа к Blockchain и облачным протоколам хранения:

- Infura
- Moralis
- Alchemy

#### 3. Передать NFT через Wallet

- -
