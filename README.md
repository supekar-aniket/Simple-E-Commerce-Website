# Simple E-Commerce Website

This is a React application that fetches and displays products from the dummyjson.com API. The application allows users to filter products by category and view product details in a clean, responsive grid format.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Components](#components)
- [API Used](#api-used)
- [Future Enhancements](#Future-Enhancements)
- [More Projects](#More-Projects)
  

## Features

- Category Filtering: Select a category from the list to filter products.
- Product Display: Products are displayed with their image, title, and price.
- Responsive Design: The app uses a flexible grid layout, making it responsive across devices.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/supekar-aniket/simple-e-commerce-website.git

2. Navigate to the project directory:
   
   ```sh
   cd simple-e-commerce-website

3. Install the dependencies:

   ```sh
   npm install

4. Start the development server:

   ```sh
   npm start
   

## Components

1. App.js:  This is the main component that manages the layout and passes down product data and state updates to its child components.

2. Category.jsx: The Category component fetches and displays a list of categories from the API. It updates the selected category, which triggers the filtering of products.

3. Product.jsx:  The Product component fetches all products and displays them in a grid. The GetProduct sub-component handles individual product details.

## API Used

This project uses the [dummyjson.com API](https://dummyjson.com/) API to fetch product data and categories.

  - Categories API: GET https://dummyjson.com/products/categories
  - Products API: GET https://dummyjson.com/products

## Future Enhancements

  - Add a search bar for users to search for products by name.
  - Implement product pagination for better performance.
  - Add a detailed product view page.


## More - Projects

```sh
https://github.com/supekar-aniket
