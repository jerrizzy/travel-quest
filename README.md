# TravelQuest

![homepage_travelquest](https://github.com/jerrizzy/travel-quest/assets/37149800/cbcec719-4747-48d4-90d9-5e83aaca938f)

This site is set up using React + Vite

The idea behind Travelquest is to expose people to vacation destinations from all the continents.
This is why you're able to filter destinations by continent.

We built an API that we're fetching all the destinations from. 
Then we used React Router to set up the pages:

DestinationList page.
Here we have a search feature that we built using the filter method
Initially, we fetched all destinations in our App component, then stored them in a state
passed that state around using outlet context to DestinationList component
then we used the filter method to search for the specific destination then stored in a variable.
We used the same variable then map through it for that specific destination and passed it down as a prop to our DestinationCard component
![destination_list_travel_quest](https://github.com/jerrizzy/travel-quest/assets/37149800/2a7b3aa9-eedf-4baa-92e9-678b8340fb80)

Destination page.
![destination_list_travel_quest](https://github.com/jerrizzy/travel-quest/assets/37149800/1695fda3-a6d8-4094-8882-ffc9d629fd8a)

Favorite page.
![favorites_travel_quest](https://github.com/jerrizzy/travel-quest/assets/37149800/f4792db7-ff4d-4a6a-89d7-d32fea3fe569)


To access this repo, fork then clone it to VScode

to run in VScode, open up terminal and run:
npm run dev

then open up a 2nd terminal and run:
json-server --watch db.json
