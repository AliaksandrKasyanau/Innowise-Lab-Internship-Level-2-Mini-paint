# Innowise Lab Internship: Level 2: Mini Paint

This project was created with React and Firebase.

[Demo](https://aliaksandrkasyanau.github.io/Innowise-Lab-Internship-Level-2-Mini-paint/)

## Available Scripts

1. Clone the develop branch.

`$ git clone https://github.com/AliaksandrKasyanau/Innowise-Lab-Internship-Level-1-Clever-to-do-list -b develop`

2. Go to the directory

`$ cd Innowise-Lab-Internship-Level-1-Clever-to-do-list`

3. Install the npm modules

`$ npm install`

4. **For working locally add .env file with firebase API keys.**

Create .env file by type

`REACT_APP_API_KEY=your API key`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!

## Architecture solution

### Component folder

Component folder usually contains 1 files: .jsx/.tsx; there files and the folder are named with component name (f.e.
PageContent /
PageContent.jsx
)

## Database snapshot

    └──users
        └──userId
    	    ├──displayName
    	    └──email

## Storage snapshot

    └──images
        └──userId
    	    ├──picId

## Application stack

List of packages I used for this app

## React-app-rewired and React-app-rewire-alias

Used to config alias

### React-router-dom

Used to add routings

### React-bootstrap

Used for edit layout grid

### React-toastify

Used to add Toasts

### Redux & React-Redux

Used to provide the data

### Redux Thunk

Allows to write action creators that return a function instead of an action

## Folders structure

    └──src                            #Main folder for source code
        ├──assets                     #Contains Icons
        ├──configs                    #Contains Toast config
        ├──firebase                   #Contains firebase init script
        ├──modules                    #Contains the main components of the application
            ├──Auth                       #Contains the Authorization module
                ├──PasswordReset              #Password reset component
                ├──SignIn                     #Sign In component
                ├──SignUp                     #Sign Up component
            ├──Paint                      #Contains the Paint module
                └──Canvas                     #Contains the Canvas component
                ├──Toolbar                    #Contains the Toolbar component
                    ├──Tools                      #Contains Tools
                    ├──Toolbar.tsx                #Toolbar Component
                ├──Gallery                    #Contains the Gallery component
        ├──store                      #Redux
            ├──actions                    #Contains all actions
            ├──reducers                   #Contains all reducers
            ├──index.ts                   #Contains the store
        ├──routes                     #Routing
        ├──styles                     #Style variables
        ├──types                      #Types
        └──index.js

## Styling

We use react-bootstrap and material design to work with styles and icons in our project;

## Code formatting

This project contains .prettierrc file and .eslintrc.js file; it describes rules for Prettier code formatter and ESlint; according to these rules we are able to keep Code formatting the same for every project developer; Also we created the pre-hook rules.
