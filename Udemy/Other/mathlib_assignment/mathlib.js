module.exports = function(q, w){
    return {
        add: function(q, w) {
            return q+w;
        },
        multiply: function(q, w) {
            return q*w;
        },
        square: function(q) {
            return q*q;
        },
        random: function(q, w) {
            return Math.floor(Math.random()*35) + 1;
        }
    };
}
