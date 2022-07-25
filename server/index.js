const express = require('express');
const app = express();

app.get('/getVideo', function(req, res){
    res.send("S3UrlToBeSend")
});

app.listen(9000, err => {
    if (err) throw err;
});
