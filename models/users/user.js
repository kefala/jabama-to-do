var userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: {
            type: String,
            trim: true
        }
    },
    age: {
        type: Number,
        min: 0
    }
});

module.exports = {
    test: facha,
    test2: function(test) {
        return test;
    }
};
