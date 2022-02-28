const express = require("express");
const itemRoutes = require('./routes/item.routes')
const chatsRouters =require("./routes/chats.routes") 
const message =require("./routes/message.routes")
const posts = require ('./routes/posts.routes')
const review = require ('./routes/review.routes')
const user = require ('./routes/user.routes')

const cors = require ('cors')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
  const db = require('./database-mysql');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000
const cors =require("cors")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cors())
app.use("/api/items", itemRoutes);
app.use("/api/chats",chatsRouters);
app.use("/api/message", message)
app.use("/api/posts", posts)
app.use("/api/review", review)

app.use("/api/user", user)
// =======
// app.use('/api/user', user)
// >>>>>>> main

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
