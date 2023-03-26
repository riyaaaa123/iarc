const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
	username: {
		type: String,
		unique: true, 
		required:true


	},

	name: {
		type:String,
		required:true

	},
	password: {
		type: String,
		required:true
	},
	
	gamescore:{
		type:Number,
		default:0
	}
})

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User)