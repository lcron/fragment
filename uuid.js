#!/bin/node



function uuid(){
	  
  var parts = []
  for(var i=0;i<4;i++){
    parts[i] = Math.random().toString(16).substr(2)
   }
	  
  return (parts[0].substr(0,8)
		+"-"+ parts[1].substr(0,4)
		+"-"+ parts[2].substr(0,4)
		+"-"+ parts[2].substr(4,8)
		+"-"+ parts[3].substr(0,12))
}

console.log(uuid())
