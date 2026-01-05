# Random Map Visualizer

**Random Map Visualizer** is a dynamic Node.js web application designed to generate and visualize random geographic coordinates on an interactive map. 

This project demonstrates the integration of a custom-built NPM package with a modern Express.js backend and a frontend visualization layer powered by Yandex Maps API.

## Key Features

*   **Custom Coordinate Generation**: Utilizes a specialized algorithm to produce valid, random latitude and longitude pairs.
*   **Interactive Visualization**: Instantly plots generated points on a global map interface.
*   **RESTful API**: Provides JSON endpoints for consuming coordinate data programmatically.
*   **Multi-View Support**: Capable of rendering single points or multiple scattered locations in one view.
*   **Modular Architecture**: Built with clean code practices, separating routes, views, and core logic.

## Core Technology: Custom NPM Package

The heart of this application is the **[@hamdi_ozkurt/random-coordinate-generator](https://www.npmjs.com/package/@hamdi_ozkurt/random-coordinate-generator)** package. 

This is a custom library developed specifically for this project's needs, ensuring lightweight and efficient coordinate generation without external bloat.

### Local Development Module
The project includes the source code for this package in the local directory structure:
*   `random-coordinate-generator/`: Contains the full source code of the NPM package. This allows for rapid prototyping and modification of the core generation logic alongside the main application.

## Installation

Follow these steps to set up the project locally:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/HamdiOzkurt/random-map-visualizer.git
    cd random-map-visualizer
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```
    *This will also install the custom generator package.*

3.  **Start the Server**
    You can run the application using `npm` or `pm2`:
    ```bash
    npm start
    ```
    *or*
    ```bash
    npm run deploy
    ```

4.  **Access the App**
    Open your browser and navigate to: `http://localhost:80`

## API & Usage

The application serves both web views and API JSON responses.

### Web Interface

| Route | Description |
| :--- | :--- |
| **`/api/map`** | Renders a map with a **single** random coordinate. |
| **`/api/maps?count=10`** | Renders a map with **10** (or defined count) random coordinates. |

### API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | **`/api/coordinates`** | Returns a single coordinate object JSON.<br>`{ "latitude": 41.0, "longitude": 29.0 }` |
| `GET` | **`/api/coordinates?count=N`** | Returns an array of `N` coordinate objects. |

## Project Structure

```
random-map-visualizer/
├── random-coordinate-generator/ # Source code for the custom NPM package
├── routes/                      # Express route handlers (API & Render)
├── views/                       # EJS templates for Map visualization
├── index.js                        # Application entry point
├── package.json                    # Project dependencies and scripts
└── README.md                       # Project documentation
```

## Tech Stack

*   **Runtime**: Node.js
*   **Web Framework**: Express.js
*   **Templating**: EJS
*   **Maps API**: Yandex Maps
*   **Core Library**: [@hamdi_ozkurt/random-coordinate-generator](https://www.npmjs.com/package/@hamdi_ozkurt/random-coordinate-generator)

## License

This project is licensed under the ISC License.
