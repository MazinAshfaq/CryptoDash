# Crypto Dashbaord Journal

This project is focused on creating a userfriendly experience for a crypto dashboard.

Arafat Journal Comments:

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

Mazin Journal Comments:
