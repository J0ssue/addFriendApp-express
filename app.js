const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({exrended: true})); // sets body-parser to be used
// set default view engine 
app.set('view engine', 'ejs');
// friends list
const friends = ['Oscar', 'Vince', 'Justin', 'Vitor', 'Sara'];

// GET ROUTES
// home page
app.get('/', function(req, res) {
	res.render('home');
});

// friends page
app.get('/friends', function(req, res) {
	res.render('friends', { friends });
});

// POST ROUTES
// adds friend to friends list
app.post('/addfriend', function(req, res) {
	// console.log(req.body.newfriend);// prints out the req thats being sent with the form
	let newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect('/friends');// redirects takes a path and goes to it after code ran.
});

// set the port to render to
app.listen(3000, function() {
	console.log('server started in localhost:3000');
});