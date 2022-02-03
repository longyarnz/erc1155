// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract UnchainNFT is ERC1155 {
    address OWNER;
    uint256 tokenID = 1;
    uint256 public tokensInCirculation;
    mapping(string => uint256) public tokens;
    mapping(uint256 => string) public tokenNames;

    event TransferLog (
        address indexed sender,
        address indexed receiver,
        string token,
        uint tokenID,
        uint amount,
        uint senderBalance,
        uint receiverBalance
    );
    
    modifier onlyMinter {
        require(msg.sender == OWNER, "Only the owner can make this transaction");
        _;
    }

    modifier onlyNewTokens(string memory _name) {
        require(tokens[_name] == 0, "Token name already exists");
        _;
    }

    modifier onlyExistingTokens(string memory _name) {
        require(tokens[_name] > 0, "Token does not exist");
        _;
    }

    constructor() ERC1155("") {
        OWNER = msg.sender;
        string memory DEFAULT_TOKEN = createUniqueToken("coin");
        mint(DEFAULT_TOKEN, 100);
    }

    function createUniqueToken(string memory _name)
        public
        onlyNewTokens(_name)
        returns(string memory)
    {
        tokens[_name] = tokenID;
        tokenNames[tokenID] = _name;
        tokenID++;
        return _name;
    }

    function mint(string memory _name, uint256 _amount) 
        public
        onlyExistingTokens(_name) 
    {
        uint256 token = tokens[_name];
        super._mint(msg.sender, token, _amount, "");
        tokensInCirculation += _amount;
    }

    function getBalanceByName(string memory _name) 
        view
        public
        onlyExistingTokens(_name)
        returns(uint)
    {
        uint256 token = tokens[_name];
        uint userToken = balanceOf(msg.sender, token);
        return userToken;
    }

    function transferOwnership(address _newOwner) 
        public
        onlyMinter
    {
        OWNER = _newOwner;
    }

    function transferTokens(address _receiver, string memory _name, uint256 _amount) 
        public
    {
        uint256 token = tokens[_name];
        uint userToken = balanceOf(msg.sender, token);
        
        string memory errorMessage = string(abi.encodePacked("You donot have anough ", _name, " in your wallet"));
        require(userToken > _amount, errorMessage);

        safeTransferFrom(msg.sender, _receiver, token, _amount, "");
        uint senderBalance = balanceOf(msg.sender, token);
        uint receiverBalance = balanceOf(_receiver, token);

        emit TransferLog(
            msg.sender,
            _receiver,
            _name,
            token,
            _amount,
            senderBalance,
            receiverBalance
        );
    }
}