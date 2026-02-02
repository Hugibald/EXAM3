This was the last Exam for the Frontend-Part of the Bootcamp-Course.
It was taken after 6 weeks of learning.
We had to use Angular for this. The instructions for running an Angular-Project are described below.
The topic of this Exam was to create a pet-shop website.
We needed to create at least 8 Components, namely the Navbar, the Footer a Home-Page, an About-Us Section, a Contact Us Section a display for the Products with detail-pages for each product as well as a Order or Cart-page.
The Products-page should display Name, Image, Price, a short description and a Details button for each Item.
The Details-page should give additional information about the item.
The Order or Cart-page should list the products that the user has added to the shopping-cart.
For design we had to use CSS and/or Bootstrap.
Points were given for responsivenes (CSS-Media Query or Bootstrap),
the inclusion of at least 8 components including NavBar, Home, Footer, About Us, Products, Details, Order/Cart and Contact Us as well as the use of rooting to move between pages without refreshing the Browser.
Furthermore it was asked that each Product needed at least the following information: name, image, description, price and availability.
If the item was available (true), the Buttons Details and Add to Cart had to show on the card, if the project was unavailable (false), the buttons should not show, but instead a message "Not availiable" should be displayed underneath the picture.
On click of the "Add to cart" or "Order" Button the item should be added to the cart.
The Button to add an item to the cart had to be shown on the item's cart as well as the details-page.
The Order or Cart page should show the content of the shopping cart.
The last must have was that on the Order/Cart page the Total of the items in the cart should be shown together with a "Service" section which should be 10% of the total amount in top of the Total (110%).
If the Total sum was more than 80€, the user was to get a 15% discount.
Both the Total before and the one after the discount have to be shown neatly on the screen.
Of the maximum 80 points to gain I received 80 for my submission.


RUN THE PROJECT:

# FE26EXAM3VerenaMader

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
