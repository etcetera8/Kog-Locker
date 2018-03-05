# Kog Locker

This is an app using the Strava Api to 'gamify' cycling by having tokens that an individual can unlock after reaching certain levels i.e. miles, power targets, elevation, distance and set personal targets on segments of trail or road. 

I have an node/express backend handling the oAuth and allowing users to login.
After allowing my app to use their data users are able to see their personal stats, their collected tokens, and a target segment.
At the bottom I have implemented a lazy-load image gallery to allow users to see their most memorable moments from activities.

Users have the ability to set a 'target' segment that defaults to giving them a 3% increase in time goal, however the user can adjust this however they want to. The users have the ability to update the target segment. I wasn't sure how to set the default target segment so I set it to one my personal favorite climbs in Colorado.

I built this app using React/Router and Redux. 

## Run This Project

#### Front-End
- Clone down the project into a folder
- run `npm install`
- Apply and receive an api key from [google](https://developers.google.com/maps/documentation/javascript/get-api-key)
- create a file in the src directory, name it apiKey.js
- In that file add in `export const gKey = "yourGoogleApiKeyHere";`
- Run `npm start` and visit localhost:3000

#### Back-End
- Clone down into the root project directory the [strava api proxy](https://github.com/JamesRandall/StravaAPIProxy) from `https://github.com/JamesRandall/StravaAPIProxy.git`
- Get a Strava Developer account setup from [Strava](https://developers.strava.com/)
- Go into the back-end and open up App.js, place your client ID and client secret into the appropriate variables.
- `npm install`
- `npm start` and visit localhost:3100

#### Login page
<img width="1417" alt="login page" src="https://user-images.githubusercontent.com/22607072/36940911-0c4c89e0-1f0c-11e8-9860-459134387354.png">

#### Home page
<img width="1420" alt="home page" src="https://user-images.githubusercontent.com/22607072/36940914-122c0c6e-1f0c-11e8-9001-e18a06d8dbba.png">

#### Photo Gallery
<img width="1409" alt="lazy load photos" src="https://user-images.githubusercontent.com/22607072/36984180-80222f96-2051-11e8-8110-ebc175799a74.png">

#### Stats page
<img width="1404" alt="screen shot 2018-03-03 at 5 53 16 pm" src="https://user-images.githubusercontent.com/22607072/36940922-485a6114-1f0c-11e8-8c24-654cbd451f89.png">

#### Badge page
<img width="1156" alt="screen shot 2018-03-03 at 5 54 13 pm" src="https://user-images.githubusercontent.com/22607072/36940923-4a37c260-1f0c-11e8-8818-8926a797df0f.png">

#### Target Segment page
<img width="1149" alt="screen shot 2018-03-03 at 5 54 41 pm" src="https://user-images.githubusercontent.com/22607072/36940924-4c2120d0-1f0c-11e8-81ed-fa7535877fb0.png">
