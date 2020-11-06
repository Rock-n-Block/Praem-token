const Praem = artifacts.require("Praem");

const BN = require("bn.js");

const owner = "0x7A2D87F5DB7B0825264CC6329D95FD660952DEc7";
const eth1 = "0x4669E5197f0956Ee210dE41DD67941004Ae1e534";
const eth2 = "0x3FC824a60DFd4824439713d62e3B82F35ec42fE9";
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
