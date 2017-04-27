'use strict';

var submit = document.getElementById('submit');
var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var contactInput = document.getElementById('contactInput');
var messageInput = document.getElementById('messageInput');


function writeNewPost(nameInput, emailInput, messageInput,contactInput) {
  // A post entry.
  var postData = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
    contact: contactInput
  };

return firebase.database().ref().push(postData);
  // Get a key for a new Post.
  // var newPostKey = firebase.database().ref().child('posts').push().key;

  // // Write the new post's data simultaneously in the posts list and the user's post list.
  // var updates = {};
  // updates['/posts/' + newPostKey] = postData;
  // return firebase.database().ref().update(updates);
}


window.addEventListener('load', function() {
  // Bind Sign in button.
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    var name = nameInput.value;   
    var email = emailInput.value;
    var contact = contactInput.value;
    var message = messageInput.value;

    if (name && email && message && contact) {
      writeNewPost(name, email, message, contact);
    }
    
  });
}, false);                        
