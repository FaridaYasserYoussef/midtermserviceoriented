const mongoose =  require("mongoose");

const authorSchema =  mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        numberOfBooksPublished:{
            type: Number,
            required: true
        },
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Author", authorSchema);
