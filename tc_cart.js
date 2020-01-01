"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Sabrina Turney
   Date:   09/24/2019
   Filename: tc_cart.js
	
*/

//create two variables for the cart total and the item totals.
var orderTotal = 0;
var itemCost = 0;

// Create the "cart" (a table)
var cartHTML = "<table>" + 
               "<tr>" +
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
               "</tr>";



//We use a for loop to create the "cart" table - This makes it larger.
for (var i = 0; i < 4; i++)  {
    
    //Then we calculate the item and total costs
    itemCost = itemPrice[i] * itemQty[i];
    orderTotal += itemCost;
    
    
    
    
    //We can use the images now to show the "cart" items/descriptions we were given.
    cartHTML += "<tr>" +
                "<td><img src='tc_" + item[i]+ ".png' alt='" + item[i] + "' /></td>" +
                "<td>" + itemDescription[i] + "</td>" +
                "<td>$" + itemPrice[i] + "</td>" +
                "<td>" + itemQty[i] + "</td>" +
                "<td>$" + itemCost + "</td></tr>";
    //(I tried to make this look as close as I could to the textbook)
    //(without losing the readability)
}




//Close the table, then show the customer their order total:
cartHTML += "<tr>" +
            "<td colspan = '4'>Subtotal</td>" +
            "<td>$" + orderTotal + "</td>" +
            "</tr>" +
            "</table>";



// insert cartHTML into the "cart" div of the html code
document.getElementById("cart").innerHTML = cartHTML;
