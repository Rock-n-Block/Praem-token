const Praem = artifacts.require("Praem");

const BN = require("bn.js");

//0x7A2D87F5DB7B0825264CC6329D95FD660952DEc7
const owner = "0x7A2D87F5DB7B0825264CC6329D95FD660952DEc7";
// 0
// 1610236800 -- Sun, 10 Jan 2021 00:00:00 GMT
const openTime = new BN(1610236800);

module.exports = async function (deployer) {
    let PraemInst;
    await deployer.deploy(Praem, openTime);
    PraemInst = await Praem.deployed();

    await PraemInst.transfer(owner, await PraemInst.totalSupply());
    await PraemInst.transferOwnership(owner);
};