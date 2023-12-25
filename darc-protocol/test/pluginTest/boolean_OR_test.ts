import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { ConditionNodeStruct } from "../../typechain-types/contracts/protocol/DARC"


const programOperatorAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

const target1 = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

const target2 = '0x90F79bf6EB2c4f870365E785982E1f101E93b906';

const target3 = '0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65';

describe.skip("plugin judgement contract test", function () {
  it ("should pass all plugin judgement test in PluginTest.sol", async function () {


    const PluginTestFactory = await ethers.getContractFactory("PluginTest");
    const pluginTest = await PluginTestFactory.deploy();
    await pluginTest.deployed();
    await pluginTest.initialize();

    // add a plugin operatorAddress == target1 | operatorAddress == target2
    // level == 4
    // return type: yes and skip sandbox
    // pluginTest.addBeforeOpPlugin({
    //   returnType: 4, // yes and skip sandbox
    //   level: BigNumber.from(4),
    //   votingRuleIndex: BigNumber.from(0),
    //   notes: "",

    // });
  });


});