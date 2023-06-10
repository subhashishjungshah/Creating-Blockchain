const GENESIS_BLOCK = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timeStamp, prevHash, hash, data }) {
    this.timeStamp = timeStamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this(GENESIS_BLOCK);
  }

  static mineBlock({ prevBlock, data }) {
    const timeStamp = Date.now();
    const prevHash = prevBlock.hash;
    console.log(prevHash);
    return new this({
      timeStamp,
      prevHash,
      hash: cryptoHash(timeStamp, prevHash, data),
      data,
    });
  }
}

const demo_block = new Block({
  timeStamp: "04/04/200",
  prevHash: "0xcac",
  hash: "0xca",
  data: "block 1",
});

// const genesis = Block.genesis();
const result = Block.mineBlock({ prevBlock: demo_block, data: "block2" });
console.log(result);
