# Functional Programming Node App Weather v2

Hola, acá les comparto este repo, sin dar muchas vueltas es una app de clima que utilicé para practicar conceptos de programación funcional.

Es una app inspirada en un ejemplo de el curso: [Node de cero a experto](https://www.udemy.com/course/node-de-cero-a-experto/) de Fernando Herrera. Las modificaciones son todas

En este caso utilicé un patrón de composición asíncrona `composeAsync()` para secuenciar los distintos pasos de la app.

## Installation guide

1. **Clone** repo and go to the project folder

    ```bash
    	git clone git@github.com:aalvarezto/node-app-weather-v2.git
    	cd node-app-weather-v2
    ```

2. **Install** dependencies

    ```bash
    	npm install

    	or

    	yarn
    ```

3. **Create** `.env` file

    ```bash
    	touch .env
    ```

4. Create an account for **MapBox** ([_link here_](https://www.mapbox.com)) **OpenWeather** ([_link here_](https://openweathermap.org)), read the instructions from the documentation and and create your own api keys for both services.

5. Inside the `.env` paste your api keys for the **MapBox** and **OpenWeather** services.

    ```
    	MAPBOX_KEY=YOUR_API_MAPBOX_KEY
    	OPENWEATHER_KEY=YOUR_OPENWEATHER_API_KEY
    ```

6. Run the **app** with:

    ```bash
    	node index.js
    	or
    	npm run start
    	or
    	yarn start
    ```

7. Have fun 😁

## Links and resources

-   [Node de cero a experto](https://www.udemy.com/course/node-de-cero-a-experto/)
-   [MapBox](https://www.mapbox.com)
-   [OpenWeather](https://openweathermap.org)
-   [Inquirer](https://www.npmjs.com/package/inquirer)
-   [Ora](https://https://www.npmjs.com/package/ora)
