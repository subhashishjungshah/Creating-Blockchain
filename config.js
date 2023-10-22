const INITIAL_DIFFICULTY = 2;
const GENESIS_BLOCK = {
  timeStamp: 1,

  prevHash: "0x000",

  hash: "0x123",

  nonce: 0,

  difficulty: INITIAL_DIFFICULTY,

  data: [],
};

module.exports = GENESIS_BLOCK;
