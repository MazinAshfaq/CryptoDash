# Crypto Dashbaord Journal

This project is focused on creating a userfriendly experience for a crypto dashboard.

## Arafat Journal Comments:

- Had a lot of issues with the navbar, but got that to work
  - The navbar itself wasn't hard to do, just the difference between router v6 and v5 made it very dificult to understand
  - Figured it out by pretty much reading documentation of what they did different between the two versions
- Had to switch my news api a couple of times just because of the request limit and as well as information.
  - I wanted for it to have pictures, but the api I was using didn't have image data in the json.
  - Changed it to bing search, which searches for crypto news, and displays it with description and images.
- Made the Crypto Search a lot easier to navigate through by adding react-pagination.
  - This pretty much takes all the data displayed and seperates to pages instead of just having it all in line making it super long.
- Added search bar page that pretty much shows a list of drop down coins as you type
- Had issues with the searchbar click, not redirecting to the coin page, but fixed the routes and it worked
- Created a footer that shows our github source code, as well as linkedin profiles for both me and mazin
  - Added the footer to the App.js so it shows up in all pages
- Added a currency page, that takes the information from the data, and calls the API again based on what currency is selected
  - Had an issue with this because I didn't know how to recall the same page once the input from the select tag was changed.
  - Figured it out with the useEffect. I passed in a param that if it changed, it would fetch the data again.
- Another issue with the currency page is that it doesn't link correctly to the right page once it's clicked.
- Made it so the dollar sign was dynamic based on what currency was selected
- Created a contact us page, that pretty much is a form that you can fill out to "Contact us"
  - There is not backend to it, so once submited all it does is console.log it.
  - I would love to connect it later on to something that can actually store the data
- Finished up final styling to the small componenets to makem look nicer.
-

## Mazin Journal Comments:

### Serious npm and project issues

Ive tried deleting and reinstalling npm, node_modules, package-lock.json. npm still giving me file does not exist errors.

Oh wow, my folder for the project is a google driver folder, so my dev enviorment was never able to see that I even have node.js or npm isntalled.
Fixed by moving the folder out to my local drive where node is installed.

### Axios.get issues

For some reason the async is not working or axios.all is not getting all the data. Instead I am going to use
promise.all, seems to work better. Spent 2 days trying to figure out why the chart is giving me errors saying that
the data is invalid or undefined.

### Chart.js issue

Formatting the data to fit into the graph was challenging. Chart.js made some changes over the versions. Any tutorial is out
dated and the documentation for charting time on chartjs is terrible.

Was able to fix it by making sure my x and y axis were defined properly in the options for the chart.

### Finished Coin Detail Page

Adding lots of styling, took me a long time to move from display:flex to display:grid. Grid is so much easier to make
the format that I want! Added the news component and the data is all being passed in as a prop perfectly.

Was not able to add one component, so I just extented the header with the price to fit the whole screen.

### Chart component not robust

Seems like my implementation of the chart component is not that great. Its hard for me to reuse it on other parts of the web app.
Added hard coded bitcoin chart to the home page instead, maybe future work would be to add more functionality to the chart
component.

### About Page

The About page was a breath of fresh air, simple HTML and CSS, added some cool animations throughout and imported
nice looking images to make the page look nicer.

### Exchange Component

Was pretty simple, adapted arafats list component so that it took in different data and displayed the exchange
websites for each coin instead.
