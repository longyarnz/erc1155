# ERC155 unchainNFT

## Intro
This app is an event listener for the ethereum block chain. It listens for transfer events for tokens on the ethereum blockchain. I wrote an erc1155 smart contract and added some methods to:
- create new tokens
- convert token id to descriptive names
- transfer tokens using names instead of ids  

I deployed my contract to the ROpsten netwrok using Remix and Infuria. I have added the socket URL and contract address to the env file. You may replace the values to listen to other contracts.

### How To fetch logs
Using Postman or any rest client, send a GET request to: `http://localhost:3002/logs?token=_token_name_&limit=_limit_&sender=_sender_&receiver=_receiver_&block=_block_`. There are 5 search parameters:
- token
- sender
- receiver
- block
- limit
For example: http://localhost:3002/logs?token=coin&limit=10

### How to run the app
You have to install MongoDB on your machine or pass your preferred mongo url to the `.env` file.
```sh
  $ npm install
```
or run yarn
```sh
  $ yarn
```
The dependies will be installed on your local machine. Then open the app by running:
```sh
  $ npm start
```
or
```sh
  $ yarn start
```

### How to test
```hs
  $ yarn test
