const MyContract = artifacts.require("SmartValorToken");

contract('MyContract', async (accounts) => {
  let smartValorToken;

  before(async () => {
     smartValorToken = await MyContract.deployed();
  });

  /**
   * mint some tokens to a non owner account
   */
  it("should mint tokens to a non owner account.", async () => {
    let owner = web3.eth.accounts[1]; //this account with mint
    let accountZero = accounts[0]; //to this account
    let amount = 10000000; //amount of tokens to mint

    // account should have no balance
    let balanceBefore = await smartValorToken.balanceOf.call(accountZero);
    assert.equal(balanceBefore.toNumber(), 0);

    // we mint some tokens
    await smartValorToken.mint.sendTransaction(accountOne, amount, {from: owner});

    // let's get the new balance
    let balanceAfter = await smartValorToken.balanceOf.call(accountZero);
    assert.equal(balanceBefore.toNumber() + amount, balanceAfter.toNumber());
  });

  /**
   * try to mint with a non owner account
   */
  it("should's mint any tokens on a non-owner call.", async () => {
    let falseOwner = accounts[2]; //this account with mint
    let accountOne = accounts[1]; //to this account
    let amount = 10000000; //amount of tokens to mint

    // lets get current balance
    let balanceBefore = await smartValorToken.balanceOf.call(accounts[1]);

    try
    {
      // we mint some tokens
      await smartValorToken.mint.sendTransaction(accountOne, amount, {from: falseOwner});
    } catch (error)
    {
        console.log("Expected error. Trying to mint with a non owner account will fail");
    }

    // let's get the new balance, should be the same as before
    let balanceAfter = await smartValorToken.balanceOf.call(accounts[1]);
    assert.equal(balanceBefore.toNumber(), balanceAfter.toNumber());
  });
  /**
   * mint some tokens to  owner account
   */
  it("should mint tokens to the owner.", async () => {
    let owner = web3.eth.accounts[1]; //this account with mint
        let amount = 1000000000; //amount of tokens to mint

    // account should have no balance
    let balanceBefore = await smartValorToken.balanceOf.call(owner);

    // we mint some tokens
    await smartValorToken.mint.sendTransaction(owner, amount,{from: owner});

    // let's get the new balance
    let balanceAfter = await smartValorToken.balanceOf.call(owner);
    assert.equal(balanceBefore.toNumber() + amount, balanceAfter.toNumber());
  });

});
