const { User, Thought } = require("../models");

module.exports = {
    // displays all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find({}).populate({
          path: "reactions",
          select: "-__v",
        });
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },

}