async function main() {
    const emojiContractFactory = await hre.ethers.getContractFactory("EmojiPortal");
    const emojiContract = await emojiContractFactory.deploy();
    await emojiContract.deployed();
    console.log("Contract deployed to: ", emojiContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });