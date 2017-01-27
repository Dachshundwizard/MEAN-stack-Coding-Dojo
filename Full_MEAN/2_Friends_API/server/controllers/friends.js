console.log('loading friends controller...');
var mongoose = require('mongoose');
var friend = mongoose.model('friend');
function friendsController() {
    this.index = function(req, res) {
        friend.find({}, function(err, friends) {
            if (err) {
                console.log(`Error: ${err}`);
                res.json(err);
            } else {
                res.json(friends);
            }
        });
    };
    this.show = function(req, res) {
        friend.findOne({_id:req.params.id}, function(err, friend) {
            if (err) {
                console.log(`Error: ${err}`);
                res.json(err);
            } else {
                res.json();
            }
        });
    }
    // POST methods
    this.create = function(req, res) {
        console.log("req.body: ", req.body);
        friend.create(req.body, function(err, friend) {
            if (err) {
                console.log(`Error: ${err}`);
                res.json(err);
            } else {
                res.json(friend);
            }
        });
    }
    this.update = function(req, res) {
        friend.findOne({_id:req.params.id}, function(err1, friend) {
            if (err1) {
                console.log(`Error: ${err1}`);
                res.json(err1);
            } else {
                friend = req.body;
                friend.save(function(err2, updated_friend) {
                    if (err2) {
                        console.log(`Error: ${err2}`);
                        res.json(err2);
                    } else {
                        res.json(updated_friend);
                    }
                });
            }
        });
    }
    this.delete = function(req, res) {
        friend.remove({_id:req.params.id}, function(err, result) {
            if (err) {
                console.log(`Error: ${err}`);
                res.json(err);
            } else {
                res.json(result);

            }
        });
    }
}
module.exports = new friendsController();
