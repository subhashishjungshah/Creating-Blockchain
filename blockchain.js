const Block = require("./block");
const cryptoHash = require("./crypto-hash");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }
  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }
  static isValidateChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;
    for (let index = 1; index < chain.length; index++) {
      const { timeStamp, prevHash, hash, data } = chain[index];
      if (prevHash !== chain[index - 1].hash) return false;

      const verifiedHash = cryptoHash(timeStamp, prevHash, data);
      if (verifiedHash !== hash) return false;
    }
    return true;
  }
}
const blockchain = new Blockchain();
blockchain.addBlock({ data: "block2" });
blockchain.addBlock({ data: "block 3" });
blockchain.addBlock({ data: "block 4" });
console.log(blockchain);
const result = Blockchain.isValidateChain(blockchain.chain);
