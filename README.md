# CO2 Calculator

This project contains the front-end for the CO2 Calculator App. 

## How does it work?

There are 8 variables used to calculate the Carbon Footprint of a person inside the application: 

* Monthly Electric Bill (dollars)
* Monthly Gas Bill (dollars)
* Monthly Oil Bill (dollars)
* Total yearly mileage on the car (miles)
* Number of short flights (less than 4 hours long) taken in the past year (number)
* Number of long flights (more than 4 hours long) taken in the past year (number)
* Recicles Newspapers (boolean)
* Recicles Aluminuim (boolean)

Fill all the fields and click in "Calculate". The application will call http://localhost:3999/calculate (POST - [Back-end](https://github.com/luisdi4s/co2calculator-api/blob/main/index.js)) and give the results right away. 

## How to run the project

In the project directory, to install the necessary dependencies run: 

### `npm i`

After that you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## References
* [How to Calculate Your Carbon Footprint](https://justenergy.com/blog/how-to-calculate-your-carbon-footprint/)
* [How to Reduce Your Carbon Footprint](https://justenergy.com/blog/how-to-calculate-your-carbon-footprint/](https://sustainability.georgetown.edu/community-engagement/things-you-can-do/))
* [What's Carbon Footprint](https://www.conservation.org/stories/what-is-a-carbon-footprint) 
