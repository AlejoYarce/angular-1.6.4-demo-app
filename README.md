# Demo App using Angular 1.6.4

This App with the latest Angular 1.x.x version in a simple Demo using 2 controllers with 2 pages retrieving dummy data fulfilling an own directive named **table** and modeling the data using custom filters.

This App is served by lite-server on port 9000. You can change the port in the **package.json** file.

# How to run
In the terminal
1. Clone the repo.
2. cd into the repo folder.
3. npm install
4. npm run lite


# What the Demo is using
In the **app.js** file there are some dependency injection for routing and showing a spinner when loading the data and there are the routing configuration using **$routeProvider** for the 2 pages.

* **controllers** folder with **mainController.js** and **secondController.js** to handle each page.

* **service** folder with the **appService.js** with the dummies request.

* **common** folder with the custom **filters.js** to manipulate the requested data.

* **directives** folder with the custom **table.js** mapping a table used in both pages.

* **pages** folder where are located the pages templates.
