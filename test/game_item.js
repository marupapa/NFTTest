const GameItem = artifacts.require("GameItem");
const truffleAssert = require('truffle-assertions');
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("GameItem", function (/* accounts */) {
  it("should assert true", async function (account) {

    //ganache（）
    const instance = await GameItem.deployed();
    const newItemId = await instance.awardItem(instance.address, "https://game.example/item-id-8u5h2m.json")

    //await GameItem.deployed();

    console.log("newItemId:", newItemId);
    //assert.equal(newItemId, "newItemId");
  });
});

