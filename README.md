# The Boutique, an eCom store by Prinyapon Prinyanut
![Screenshot 2023-10-12 at 1 19 16 PM](https://github.com/GeniePrinie/js2-framework/assets/100139381/cad1be37-2434-44c3-aed4-f9c7f25c2fc8)
![Screenshot 2023-10-13 at 11 45 53 AM](https://github.com/GeniePrinie/js2-framework/assets/100139381/d06fbcd7-225f-4041-a043-f6327c6362c3)



## Description

The project was to create a responsive online store by using React.

## Features
1. Display a list of products.
2. Display discounted price and discount percentage on products that has discount.
3. Search functionality to filter products based on user input.
4. Responsive design for various screen sizes.
5. Fetch product data from a provided REST API.
6. Set, get, clear item in LocalStorage.
7. Contact form validation.
8. Use React Router to switch between pages.
9. Contains header and footer by using < Layout > component.
10. Using Cart icon as a link to the Checkout Page (Shopping cart).

## Pages

1. Home Page
2. Individual Product Page
3. Checkout Page (Shopping cart)
4. Contact Page
5. Checkout Success Page
   
### Home page
This page has a list of products from Noroff API (which can be clicked to view in an individual post page) and a robust search bar that filters products when typing in a product name.

### Individual Product Page
This page shows an individual product that was clicked to view from the Home page. The shopper can read the reviews and click "Add to Cart", the particular product will be added as an item in the shopping cart in the checkout page.

### Checkout Page (Shopping cart)
This page shows all the items that the shopper has added into the shopping cart. The shopper can view the product by clicking the link of the item, add, subtract the quantity of the item and/or remove the item. Once the shopper is satisfied with the item(s) in the cart, the shopper can click "Pay Now" which will direct the shopper to the Checkout success page.

### Checkout Success Page
This page displays a message to the shopper notifying them that their order was successful, shows the order summary of what the shopper has bought, and a button to go back to the Home page. This button also clear the LocalStorage.

### Contact Page
This page shows a contact form that can validate what the shopper types in. The information that is typed in will be shown in the console.

#### Validation requirement
1. Full name (Minimum number of characters is 3, required)
2. Subject (Minimum number of characters is 3, required)
3. Email (Must be a valid email address, required)
4. Body (Minimum number of characters is 3, required)
5. Submit button

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contact

[My Linkedin page](https://www.linkedin.com/in/genie-prinyanut-ab3441257/)

[My Website](https://genieprinyanut.netlify.app/)
