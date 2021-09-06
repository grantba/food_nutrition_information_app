This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to the Food Nutrition Information App!

The Food Nutrition Information App is a Single Page Application (SPA). The frontend was built with HTML, CSS, React, Redux, and Thunk. The frontend communicates with a backend API built with Ruby on Rails. I designed and built this application for my phase 5 portfolio project for Flatiron School's Software Engineering bootcamp program. This application allows a user to search various foods. It will then display the nutritional information for the selected food item. This app would be very helpful for anyone who is either counting carbohydrates or calories, or would just like to know the nutritional information of what they're eating, so they can possibly make better food choices. The user can search for foods even without creating an account. However, if the user does decide to create an account, they will have the option to save foods to favorites which they can easily access later. They will also have the option to create meals, which would be helpful for meals that the user eats frequently, because the app will automatically add all the nutritional information together for all food items in the given meal, providing the user a total of each nutrient (calories, carbs, fat, etc.) for the entire meal. The nutritional information and food images are obtained via the Nutritionix API. Once a user saves a food item to favorites, that food item will then be added to the Rails backend API, and the user can then edit the food item, making any changes necessary.

I hope you like the app and enjoy all the great information it provides!

Requirements:

This project requires Ruby (version '2.6.1') and Ruby Gems.

You will also need to request an API Key from the Nutritionix API. They are free and can be requested at https://www.nutritionix.com/business/api. The API Key is what allows you to search all the great food items for their nutritional information. This is required in order to use the app.

Create a .env file and add your API Key and Application ID to the file as follows.

REACT_APP_KEY = your_api_key
REACT_APP_APPLICATION_ID = your_application_id
REACT_APP_REMOTE_USER_ID = 0

The remote user id is not something that is given to you when you request an API key but it should be set to zero. None of these items should be wrapped in quotes as shown above. Everything is set up on the frontend so once you add this information in the .env file, everything should work as expected.

Setup:

These are the steps to get the application up and running:

Step 1. Installation

You will need to clone both the frontend and backend repositories. The instructions for the frontend application are listed below.

frontend - https://github.com/grantba/food_nutrition_information_app.git
backend - https://github.com/grantba/food_nutrition_information_api.git

Clone the frontend repository into your developer environment, then run the following commands in your terminal:

git clone https://github.com/grantba/food_nutrition_information_app.git 
cd food_nutrition_information_app 
npm install 
npm start

You may be prompted with a question in yout terminal, like the following:

"Something is already running on port 3000. Probably:
...
Would you like to run the app on another port instead? (Y/n)"

If this happens, just type Y and it will start the application for you on another port.

Once you have both your backend and frontend running, you are ready to use the app. 

Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/grantba/food_nutrition_information_app.git. For major changes, please open an issue first to discuss what you would like to change.

License:

This React application is available as open source under the terms of the MIT License (see LICENSE file for more information).

Check out my blog post:

Here is the link to my blog post where I discuss how to use Redux in an React application.

https://grant-blaire.medium.com/how-to-use-redux-in-a-react-application-acd673fb67d5

Video Walkthrough:

Here is the link to a video walkthrough of this application.

https://youtu.be/WTDonCLN-Ls

Sources I used for my project:

All nutritional information and images were obtained through the Nutritionix API.

Nutritionix API, https://www.nutritionix.com/
Food Background Image, https://cdn.hipwallpaper.com/i/64/5/ebi6tc.jpg

Author:
Blaire Grant