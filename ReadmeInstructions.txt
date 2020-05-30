# Overview
In this challenge you'll build a server and mobile web app that lets customers create cheese baskets for Frank's Fine Cheeses, a purveyor of cheeses in Los Angeles County. This should take about 4-6 hours in total but you don't have to do it all at once, 
we just ask that send us your solution in the next week. 

# Requirements
Frank's Fine Cheeses takes local sourcing to the next level, providing each neighborhood in Los Angeles County with different discounts and inventory. As such, when customers enter the site for Frank's Fine Cheeses they should be prompted to enter their zip code. 
If their zip code is within the service area, they can then search for cheeses by name or country of origin and add any of the cheeses listed in the search result to their basket. Out of stock cheeses should not show up in customer searches and in stock cheeses 
should show their price with the appropriate discount applied. When the customer is done selecting cheeses, they should be able to proceed to a summary of their cheese basket, which should list the cheeses they selected along with the total price.

In the `Data` directory you'll find two datasets:

- `cheeses.csv`, which has the id, name, country of origin, and price for each of the cheeses sold at Frank's Fine Cheeses
- `specials.csv`, which lists cheeses that are discounted and cheeses that are out of stock for each zip code. If a zip code is not listed in `specials.csv`, then it is outside of the service area of Frank's Fine Cheeses.

Frank's Fine Cheeses regularly updates their cheese inventory and neighborhood discounts, so build your system accordingly.

A few other things to mention:

- You can use any language, framework, and build system for your server and web app
- Use as much testing as you think is appropriate for the functionality that you build and mention any additional testing you would do if this were a production system
- You can use any 3rd party libraries and look up any resources you need in the course of this interview.
- We have provided loose design guidelines to follow. Please use the logos, button styles, color palettes and typefaces referenced in the 'Design Guidelines' PDF. The individual assets can be found in the 'design elements PNGs'and 'Cera Font' folders. How you implement 
  them is up to you.

Let us know if you have any other questions! 

# Details
Write your server and web app in this folder and when you're done, zip this folder and email it back to us. Leave instructions below for how to build and run the server and web app along with any additional comments on the design of your solution.