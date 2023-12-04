const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            require: true,
            validate: [isEmail, "invalid email"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual property for friend count
userSchema.virtual("friendCount").get(function () {
    return `${this.friends.length}`;
});

// Initialize User Model
const User = model("user", userSchema);

// Exports User Model

module.exports = User;