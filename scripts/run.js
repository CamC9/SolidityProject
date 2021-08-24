const { ethers } = require("hardhat");

async function main() {
    const [owner, randPerson] = await ethers.getSigners();
    const emojiContractFactory = await hre.ethers.getContractFactory("EmojiPortal");
    const emojiContract = await emojiContractFactory.deploy();
    await emojiContract.deployed();
    console.log("Contract deployed to: ", emojiContract.address);
    console.log("Contract deployed by: ", owner.address);

    let emojiCount;
    emojiCount = await emojiContract.getTotalEmojis();

    let emojiTxn = await emojiContract.sendEmoji();
    await emojiTxn.wait();

    emojiCount = await emojiContract.getTotalEmojis();

    emojiTxn = await emojiContract.connect(randPerson).sendEmoji();
    await emojiTxn.wait();

    emojiCount = await emojiContract.getTotalEmojis();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });