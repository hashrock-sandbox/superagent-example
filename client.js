var request = require("superagent");

var root = "http://localhost:3000";

request
  .get(root + "/items/")
  .end(function(err, res){
	  console.log("GET Response: " + res.text);
  });
  
request
  .post(root + "/items/")
  .send({name: "New Task"})
  .end(function(err, res){
	  console.log("POST Response: " + res.text);
  });
  
request
  .get(root + "/items/12", function(err, res){
	  console.log("GET Response: " + res.text);
  })

request
  .put(root + "/items/12", function(err, res){
	  console.log("PUT Response: " + res.text);
  })

request
  .put(root + "/items/12", function(err, res){
	  console.log("DEL Response: " + res.text);
  })
