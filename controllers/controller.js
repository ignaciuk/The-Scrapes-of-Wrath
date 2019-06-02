var express = require("express");

var router = express.Router();

var Article = require("../models.Article.js");
var Note = require("../models/Note.js");

router.get("/", function(req, res) {
    Article.all(function(data) {
        var hbsObject = {
            Articles: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

module.exports = router;