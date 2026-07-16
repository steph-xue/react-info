<h1 align="center">
  React Info
</h1>

<h4 align="center">
  A web application displaying fun facts about the React library with a light/dark mode toggle.
</h4>

<p align="center">
  <img src="./images/light-mode.png?raw=true" alt="Light Mode" width="450">
</p>

<br>

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)

<br>

## Overview

This project presents a collection of facts about React, including its original release date, creator, and role in modern web development, while allowing users to switch between light and dark mode at any time. It is built with React, JavaScript, HTML, and CSS and uses Vite as the build tool. The interface includes a navigation bar and main content area, with the theme toggle managed through shared React state so the selected mode is applied consistently across the application.

<br>

## Features

### Fun Facts Display
The main content area displays a short heading and a list of facts about React, including when it was released, who created it, and how widely it is used today. A toggle switch in the navigation bar lets users switch the entire page between light and dark mode, updating both the navigation bar and the main content area at the same time for a consistent look across the page.

<p align="center"><b>Light Mode</b></p>
<p align="center"><img src="./images/light-mode.png?raw=true" alt="Light Mode" width="700"></p>

<p align="center"><b>Dark Mode</b></p>
<p align="center"><img src="./images/dark-mode.png?raw=true" alt="Dark Mode" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Build Tool | Vite |

<br>

## How It Works

The application is built around two components, a navigation bar and a main content area, both rendered from a single root component. Dark mode is tracked as a single piece of state in the root component and passed down to both the navigation bar and the main content area, so clicking the toggle updates the appearance of the entire page at once rather than each section managing its own state independently. Vite handles the local development server and production build, compiling the React components into files that can be deployed anywhere.

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- Additional categories of facts beyond React itself
- Saving the user's mode preference so it persists between visits
- Smooth transition animations when switching between light and dark mode
  
<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/react-info.git
cd react-info
```

**2. Install the dependencies**

This installs React and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs the application locally with Vite.
```bash
npm run dev
```

Once the server is running, open the local URL shown in the terminal to start using the application.
