
var express = require('express');
var app = express();

app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/1.0/posts/:postId/messages', async function (req, res) {
  let resParams = {
      "id": req.body.id,
      "parentId": req.body.id,
      "postId": req.body.post.channelId,
      "isOwn": false,
      "messageId": req.body.replyToMessageId,
      "idOnExternalPlatform": req.body.replyToMessageIdOnExternalPlatform,
      "channelId": req.params.postId,
      "channel": {
          "id": req.params.postId,
          "originId": "",
          "type": "chat"
      },
      "createdAtIso": Date.now(),
      "receivedAt": Date.now(),
      "createdAt": Date.now(),
      "originCreatedAt": Date.now(),
      "title": req.body.title,
      "content": req.body.content,
      "sentiment": "neutral"
  }
  res.send(resParams);
})

app.post('/2.0/channel/:channelId/outbound', function (req, res) {
  console.log(req.body);
  console.log(req.params.postId);
  let resParams = {
    "id": req.body.brand.id,
    "parentId": req.body.id,
    "postId": req.body.post.channelId,
    "sentiment": "neutral"
}
res.send(resParams);
})

var server = app.listen(app.get("port"), function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Node.js API app listening at http://%s:%s", host, port)
})
