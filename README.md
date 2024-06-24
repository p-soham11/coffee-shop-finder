<!-- @format -->

# Coffee Shop Locator

## Overview

This project is a full-stack web application that helps users find nearby coffee shops based on their current location. The frontend is built using React and styled with Tailwind CSS. The backend is built using Node.js, Express, and MongoDB (hosted on MongoDB Atlas). The application uses the Google Maps API to geocode addresses and find nearby coffee shops and Clerk for authentication.

## Features

-   **Homepage**: Users can enter their location to find nearby coffee shops. (Note: The user will be able to find any cafe within 8 KMs radius.)
-   **Search Page**: Displays a list of coffee shops near the provided location.
-   **Coffee Shop Page**: Shows detailed information and menu for each coffee shop.

## Technologies Used

-   **Frontend**: React, Tailwind CSS
-   **Backend**: Node.js, Express
-   **Database**: MongoDB (Atlas), Mongoose
-   **APIs**: Google Maps API

## File Structure

```
coffee-shop-locator/
├── coffee-shop-backend/
│ ├── config/
| | └── db.js
| ├── controllers/
│ │ |── coffeeShopController.js
│ │ └── productController.js
│ ├── models/
│ │ ├── coffeeShopSchema.js
│ │ └── productSchema.js
│ ├── routes/
│ │ |── coffeeShopRoutes.js
│ │ └── productsRoutes.js
│ ├── .env
│ └── server.js
├── coffee-shop-finder/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── locationSearch.jsx
│ │ │ └── TopBar.jsx
│ │ ├── pages/
│ │ │ ├── CoffeeShopPage.jsx
│ │ │ ├── HomePage.jsx
│ │ │ └── SearchPage.jsx
│ │ ├── routes/
│ │ │ └── index.jsx
│ │ ├── App.jsx
│ │ └── index.jsx
│ ├── .env
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── vite.config.js
│ └── package.json
└── README.md
```

## Setup Instructions

-   Open terminal and run : npm i
-   Setup the .ENV variables
-   Backend will be using PORT: 5000
-   Frontend will be using the Vite's default PORT : 5173
