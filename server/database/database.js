const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://fahad:fahad@cluster0.5cggm.mongodb.net/mid2_fahad?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
module.exports=db;