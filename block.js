const { GENESIS_BLOCK, MINE_RATE } = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timeStamp, prevHash, hash, data, nonce, difficulty }) {
    this.timeStamp = timeStamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static genesis() {
    return new this(GENESIS_BLOCK);
  }
  // Logic to mine new blocks in blockchain
  static mineBlock({ prevBlock, data }) {
    let hash, timeStamp;
    const prevHash = prevBlock.hash;
    let { difficulty } = prevBlock;
    let nonce = 0;
    // Logic to change nonce and match difficulty for mining
    do {
      nonce++;
      timeStamp = Date.now();
      difficulty = this.adjustDifficulty({
        originalBlock: prevBlock,
        timeStamp,
      });
      hash = cryptoHash(timeStamp, prevHash, nonce, data, difficulty);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));
    return new this({
      timeStamp,
      prevHash,
      data,
      difficulty,
      nonce,
      hash,
    });
  }
  static adjustDifficulty({ originalBlock, timeStamp }) {
    const { difficulty } = originalBlock;

    if (difficulty < 1) return 1;

    const difference = timeStamp - originalBlock;

    if (difference > MINE_RATE) return difficulty - 1;

    return difficulty + 1;
  }
}

module.exports = Block;
