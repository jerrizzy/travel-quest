# TravelQuest

![homepage_travelquest](https://github.com/jerrizzy/travel-quest/assets/37149800/cbcec719-4747-48d4-90d9-5e83aaca938f)

This site is set up using React + Vite

The idea behind Travelquest is to expose people to vacation destinations from all the continents.
This is why you're able to filter destinations by continent.

We built an API that we're fetching all the destinations from. 
Then we used React Router to set up the pages:

DestinationList page.
Here we have a search feature that we build using the filter method
Initially, we fetch all destinations in our App component, then store them in a state
pass that state around using outlet context hook to DestinationList component
then we use the filter method to search for the specific destination then store in a variable.
We use the same variable then map through it for that specific destination and pass it down as a prop to our DestinationCard component
![destination_list_travel_quest](https://github.com/jerrizzy/travel-quest/assets/37149800/2a7b3aa9-eedf-4baa-92e9-678b8340fb80)

Destination page.
In DestinationCard component...

we have a handleClick function that uses a navigate hook to direct to the destination route and use a state to pass that destination's detail to DestinationPage component
Then we use the handleClick function on the card div with an onClick event. Then since we used the navigate inside the handleCick function it takes us to the DestinationPage component
![dest_info_travel_quest](https://github.com/jerrizzy/travel-quest/assets/37149800/07f070e3-3a8a-4d3c-8df6-1d659f847474)

Favorite page.
![favorites_travel_quest](https://github.com/jerrizzy/travel-quest/assets/37149800/f4792db7-ff4d-4a6a-89d7-d32fea3fe569)


To access this repo, fork then clone it to VScode

to run in VScode, open up terminal and run:
npm run dev

then open up a 2nd terminal and run:
json-server --watch db.json
