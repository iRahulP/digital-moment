const mongoose = require('mongoose')

const challengeSchema = mongoose.Schema({
    id: { type: String, required: true, default: uuidv4()}, 
    thumnail: {type: String, required: false},
    name: { type: String, required: true},
    description: {type: String, required: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now()},
    city: {type: String}, 
    country: {type: String},
    relatedChallenges: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'} ],
    relatedIdeas: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Idea'} ]
})

const Challenge = mongoose.model("Challenge", challengeSchema)
module.exports = Challenge