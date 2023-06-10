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
    return new this({
      timeStamp,
      prevHash,
      hash: cryptoHash(timeStamp, prevHash, data),
      data,
    });
  }
}

module.exports = Block;
