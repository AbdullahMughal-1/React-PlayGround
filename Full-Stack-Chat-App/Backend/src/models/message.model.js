import { Timestamp } from "mongodb";
import mongooes from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongooes.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { Timestamp: true },
);

const Message = mongooes.model("Message", messageSchema);

export default Message;
