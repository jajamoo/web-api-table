# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `json-server --watch path/to/input_data.json`
This will start the backend "API" that holds the fetch data. It will run on  [http://localhost:3000](http://localhost:3000) 
and the url will look like http://localhost:3000/qc-metrics

Then run:
### `npm install`
This will install all the dependencies for the project. Here are some of the libraries I used:

- Bootstrap (styling)
- React Table (neat tables)
- Json-server (making a fake restful API backend using a JSON string)

Then run:
### `npm start`

This runs the app\
This will ask you if it can run the app on a different port, since the backend is running on 3000. Press `Y` and it will run it on port 3001\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## How Long Did I Spend On This Project? 
About 2 days - approximately 3 hours, 4 if you count the necessary Googling

## What difficulties did I run into?
Being a little less familiar with React, some of the concepts of UseState and UseEffect were a litte\
new and different but I picked it up fast. Additionally, the spread operator (`... var`) isn't used as \
much in PHP so getting my head around that was a little different, but very manageable. I also don't have much\
of an eye for design (UX) necessarily so making the Table look nice was a challenge (albeit a welcome one).\
Keeping track of all the checkboxes was a challenge when it came to keeping track of the state of the checkbox elements.\
I also struggled with the final piece (which was unfinished, sadly), which was the Reset (without a page reload) functionality


### If I Had More Time...
Lots of great data here - I would consider taking some of this data and visualizing it - bar graphs or something for the numerical values....
