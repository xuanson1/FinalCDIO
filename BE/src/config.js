const dotenv = require("dotenv");
dotenv.config();

const ACCESS_TOKEN_SECRET =
  "3e56b5319eacf689eff421844b00e06864092398f68269cace484806e336e53aa6135bdd7bd14cb0b83a037ffd04390241be4232a1f4444c6324ad54810a4a02";
const REFRESH_TOKEN_SECRET =
  "dea2eae846355c4540e05ecd777dcb214680bdc117854f8db0915d947b9a2e747caa183106172ca0f1a1e6896b1ec9bed6abe86518b5ff928f2d0b627c310fbe";
const PORT = process.env.PORT || 8888;

module.exports = {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  PORT,
};