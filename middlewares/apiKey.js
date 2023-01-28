const User = require("../models/User");

exports.checkApiKey = async (req, res, next) => {
  try {
    const user = await User.findOne({ apiKey: req.params.apiKey });
    if (!user) return res.status(401).send({ message: "Unauthorised" });
    req.queryId = user.queries;
    req.userId = user._id;
    next();
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};
