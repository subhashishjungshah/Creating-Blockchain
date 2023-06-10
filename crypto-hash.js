const crypto = require("crypto");

function cryptoHash(...content) {
  return crypto.createHash("sha256").update(content.join("")).digest("hex");
}

module.exports = cryptoHash;
