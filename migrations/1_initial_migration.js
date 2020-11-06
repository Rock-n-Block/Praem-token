const Praem = artifacts.require("Praem");

const BN = require("bn.js");

const owner = "0x3A461d302B101Cc4b14ABEeFe79CfC0192b4bFD4";
const eth1 = "0xAA3D1b9F0E825c0F94763c31a5957Da9Cb7D4c62";
const eth2 = "0x30A3CdB65aa3b4ea6595Aa8026CA2546b5354fcB";
const PraemtoOwner = new BN(10 * (10 ** 6)).mul(new BN(10 ** 8));
const PraemtoEth1 = new BN(6 * (10 ** 6)).mul(new BN(10 ** 8));
const PraemtoEth2 = new BN(4 * (10 ** 6)).mul(new BN(10 ** 8));

// 1610755200 -- Saturday, January 16, 2021 12:00:00 AM
const openTime = new BN(1610755200);

module.exports = async function (deployer) {
    let PraemInst;
    await deployer.deploy(Praem, openTime);
    PraemInst = await Praem.deployed();

    await PraemInst.transfer(owner, PraemtoOwner);
    await PraemInst.transfer(eth1, PraemtoEth1);
    await PraemInst.transfer(eth2, PraemtoEth2);
    await PraemInst.addWhiteListTransfer(eth2);
    await PraemInst.transferOwnership(owner);
};
