module.exports = {
  db: {
    uri:
      //needs to be updated to use enviroment variables depending on host
      "mongodb+srv://FaceR-Admin:Faceradtmp12345@subscriptiondb-uxxkh.mongodb.net/user-data?retryWrites=true&w=majority"
  },
  port: process.env.PORT || 80
  //port: 3001 sara
};
