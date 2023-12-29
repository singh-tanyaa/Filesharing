import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URI = `mongodb+srv://useroy:eaMdmb1lUq8pTwBw@file-share.amn3puk.mongodb.net/test?retryWrites=true&w=majority`;
  // mongodb+srv://useroy:eaMdmb1lUq8pTwBw@file-share.amn3puk.mongodb.net/test?retryWrites=true&w=majority
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};
export default DBConnection;

//6BYhDImyibKkJpAB
