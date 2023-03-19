//SPDX-License-Identifier:MIT
pragma solidity ^0.8.19;

contract Inbox{
    string public message;

    function getMessage(string memory initialMessage) public{
        message = initialMessage;
    }
    function setMessage(string memory newMessage)public{
        message = newMessage;
    }
}