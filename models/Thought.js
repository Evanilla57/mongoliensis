const { ObjectId } = require("bson");
const moment = require("moment");
const { Schema, model, Types } = require("mongoose");

//Schema to create Thought model
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: [280, "Reaction must be less than 280 characters"],
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format("YYYY-MM-DD HH:mm"),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

const ThoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        minLength: [1, "Thought must have at least 1 character"],
        maxLength: [280, "Thought must be less than 280 characters"],
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
        get: (date) => moment(date).format("YYYY-MM-DD HH:mm"),
        },
        username: { typoe: String, required: true },
        reactions: [ReactionSchema],
    },
    {toJSON: {
        virtuals: true,
        getters: true,
    },
id: false,
}
);

// Virtual propert for reaction count
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize Thought Model
const Thought = model("thought", ThoughtSchema);

// Exports Thought Model
module.exports = Thought;