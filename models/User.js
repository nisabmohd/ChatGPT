const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/upload-pics-e599e.appspot.com/o/images%2Fdownload.png?alt=media&token=1b15372b-749d-43f8-a1ef-72c207b40e19",
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 6,
    },
    apiKey: {
      type: String,
      required: true,
    },
    queries: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Query",
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("users", userSchema);
