"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
  
   Author:      Sabrina Turney
   Date:        09/24/2019
   Filename:    tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

//Now we actually get to make an order for our fancy new cart!

//According to the texbook, we must use specific items and these are their
//corresponding ID numbers, just set to a variable "item", which interacts with the cart.js file in the index once it loads as a webpage. 
var item = [10582, 23015, 41807, 10041];
//IDs.

//Again, we are using the required information and setting the array to it. Here is
//individual item prices- WOW!
var itemPrice = [149.93, 89.98, 334.93, 22.67];


//The quantity being purchased by our mock consumer
//I would also be purchasing this little looking at that price array above!
var itemQty = [1, 1, 1, 4];

//These are the descriptiions we were provided in the textbook! Looks expensive!
var itemDescription = ["1975 Green Bay Packers Football (signed), Item 10582",
    "Tom Landry 1955 Football Card (unsigned), Item 23015",
    "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
    "Protective Card Sheets, Item 10041"];

