import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

//create the model
const user = mongoose.model("user", userSchema);
//export the model
export default user;
