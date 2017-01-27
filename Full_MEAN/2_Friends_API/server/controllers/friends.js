console.log('Loading friends controller...');
var mongoose = require('mongoose');
var friend = mongoose.model('friends');

function FriendsController(){
    this.index = function(req,res){
        friend.find({}, function(err, friends) {
            if(err) {
                console.log(`Error: ${err}`);
            }
        })
    }
}
