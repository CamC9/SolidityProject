// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract EmojiPortal {
    uint totalEmojis;
    constructor() {
        console.log("Hello world!");
    }

    function sendEmoji() public {
        totalEmojis += 1;
        console.log("%s got emoji'd!", msg.sender);
    }

    function getTotalEmojis() view public returns (uint) {
        console.log("There are %d people that have been emoji'd", totalEmojis);
        return(totalEmojis);
    }
}