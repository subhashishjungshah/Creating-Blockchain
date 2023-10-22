const Block = require("./block");
const cryptoHash = require("./crypto-hash");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  // Adding new block into blockchain
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  // Validate function for blockchain
  isValidateChain(chain) {
    // Check whether first block is zenesis or not
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    for (let index = 1; index < chain.length; index++) {
      // Checking whether the previous hash and chain hash matches or not
      const { timeStamp, prevHash, hash, data, nonce, difficulty } =
        chain[index];
      if (prevHash !== chain[index - 1].hash) {
        return false;
      }

      // checks whether the blocked hash matches the algorithm's hash or not
      const verifiedHash = cryptoHash(
        timeStamp,
        prevHash,
        nonce,
        data,
        difficulty
      );

      if (verifiedHash !== hash) {
        return false;
      }
    }
    return true;
  }

  // Longest chain prinicple in blockchain
  replaceChain(chain) {
    if (chain.length <= this.chain.length) {
      console.error("The income chain isn't longer");
      return;
    }
    if (!this.isValidateChain(chain)) {
      console.error("The incoming chain isn't valid");
      return;
    }
    this.chain = chain;
  }
}

module.exports = Blockchain;
