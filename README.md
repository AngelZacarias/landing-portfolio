# Follow the next steps to start using our product:

1. Install NodeJs from NodeJs Official Page
1. Go to creative tim website and login into your account
1. Go to the product page (be sure to be logged into your account)
1. Press the download button near Now UI Kit React product (this will download onto your computer a zip file)
1. Unzip the downloaded file to a folder in your computer
1. Open Terminal
1. Go to your file project (where you've unzipped the product)
1. Run in terminal
npm install
1. Then run
npm start
1. Or you can simply run
npm run install:clean

which will install node_modules and also will start your project.

### If you have an error something containing Module not found

you need to do the following

npm install --g cross-env

then change the script, for example the start script from

"start": "react-scripts start",

to

"start": "NODE_PATH=./src react-scripts start",

The same should be done with any other script that has the above error.

### If you have an error containing

props.history of undefined

(this can happen when you integrate our project with another one) then you need to make the changes found here

### (Optional) You can create a new react application like this

Run in terminal

npm install -g create-react-app

Go to the folder where you want to create your app

Run in terminal

create-react-app your-app-name

Navigate to your-app-name

Run in terminal

npm start

And after this, you can copy and paste anything that you want from our product (the most important is the src/assets 
which has all of our style, fonts and images).

More information → create-react-app

- Navigate to https://localhost:3000

- More information → react