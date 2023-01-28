const { hashSync, compareSync } = require("bcrypt");
const Query = require("../models/Query");
const User = require("../models/User");
const { generateApiKey } = require("generate-api-key");
const { v4: uidgen } = require("uuid");

exports.login = async (req, res) => {
  try {
    const findUser = await User.findOne({ username: req.body.username });
    if (!findUser)
      return res
        .status(401)
        .send({ success: false, message: "User doesn't exist" });
    const passwordMatch = compareSync(req.body.password, findUser.password);
    if (!passwordMatch)
      return res
        .status(401)
        .send({ success: false, message: "Wrong password" });
    findUser.password = undefined;
    res.send(findUser);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

exports.signup = async (req, res) => {
  try {
    const newQuery = new Query({ texts: [] });
    const { _id } = await newQuery.save();
    const newUser = new User({
      uid: uidgen(),
      ...req.body,
      password: hashSync(req.body.password, 10),
      apiKey: generateApiKey({ method: "bytes" }),
      queries: _id,
    });
    const user = await newUser.save();
    user.password = undefined;
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};
