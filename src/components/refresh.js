import React from "react";
export default function random(){

var random_numbers = [];
var min = 0;
var max = 1000;
   
for(var i = 0; i < 10 ; i++){
var randomize =  min + (Math.random() * (max-min));
random_numbers[i] = Math.floor(randomize);
}
return (random_numbers)}