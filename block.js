const GENESIS_BLOCK = require("./config");

class Block {
  constructor({ timeStamp, preHash, hash, data }) {
    this.timeStamp = timeStamp;
    this.preHash = preHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this(GENESIS_BLOCK);
  }
}

const demo_block = new Block({
  timeStamp: "04/04/200",
  timeStamp: "04/04/200",
  preHash: "0xcac",
  hash: "0xca",
  data: "Hello Subahshish",
});

const genesis = Block.genesis();

console.log(genesis);
