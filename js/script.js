// Created by: Grace
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calcAreaClicked () {
  
  // get user input
  let sideA = parseFloat(document.getElementById('side-a').value)
  let sideB = parseFloat(document.getElementById('side-b').value)
	let height = parseFloat(document.getElementById('height').value)

  // calculate the area
  let area = (sideA + sideB)* height / 2 

  // results of user input
  document.getElementById('area').innerHTML = "The area is " + area.toFixed(2) + "mm<sup>2</sup>"
}