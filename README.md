# Restaurant Homepage Project

## Overview

Welcome to the completed Restaurant Homepage project! In this project, we've leveraged our knowledge of DOM manipulation and utilized webpack to dynamically render a restaurant homepage entirely using JavaScript. The styling has been separated into a CSS file, allowing for a clean and organized structure.

## Project Structure

- **src/index.js:** Entry point for JavaScript functionality.
- **dist/index.html:** HTML skeleton with a single `<div id="content">`.
- **webpack.config.js:** Configuration file for webpack bundling.

## Getting Started

1. **Clone the Repository:**
git clone <repository-url>
cd restaurant-homepage-project
2. **Install Dependencies:**
npm install
3. **Run Webpack:**
npx webpack --watch
4. **Open in Browser:**
Open `dist/index.html` in your browser to view the completed restaurant homepage.
## Features

### Dynamic Content Rendering

The restaurant homepage is generated dynamically using JavaScript. Elements such as images, headlines, and descriptions are created and appended to the DOM during the page load.

### Tabbed Browsing

Implemented tabbed browsing for Contact and Menu pages. Each tab's content resides in its own module, making the code modular and easy to maintain.

### GitHub Pages Deployment

Deploy the project on GitHub Pages using the following command:
npm run deploy