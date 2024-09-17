# React + Vite + PropTypes + React Router + Tailwind CSS Starter Template

<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/PropTypes-lightblue?style=flat&logo=React&logoColor=black" alt="PropTypes Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat" alt="React Router Badge" style="height: 23px;"> <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" alt="Tailwind CSS Badge" style="height: 23px;">


This is a starter template for React projects using Vite as the bundler, PropTypes for prop validation, React Router for routing, and Tailwind CSS for styling. It provides a basic and functional setup that you can use to kickstart your React project and save time.

## Table of Contents

1. [Template Structure](#template-structure)
2. [Installation](#installation)
3. [Additional Configuration](#additional-configuration)
4. [Additional Resources](#additional-resources)

## Template Structure

- **`src/components`**: Contains application components.

  - `Counter.jsx`: Example component for counting.
  - `Greeting.jsx`: Example greeting component that uses PropTypes for prop validation.

- **`src/pages`**: Contains application pages.

  - `Home.jsx`: Home page that displays the greeting and includes a button to navigate to the CounterPage.
  - `CounterPage.jsx`: Page displaying the counter and including a button to navigate back to the Home page.

- **`src/routes/AppRoutes.jsx`**: Route configuration for the application.

- **`src/styles/index.css`**: Contains Tailwind CSS imports and a commented base layer if needed.

## Installation

To start using this template, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Luovtyrell/React-Vite-PropTypes-React-Router-Tailwind-Starter.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd React-Vite-PropTypes-React-Router-Tailwind-Starter
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server, and you can view the application at `http://localhost:3000` (or the configured port).

## Additional Configuration

- **Tailwind CSS**:
  - Customize Tailwind settings such as adding custom colors in `tailwind.config.js`.
- **You can add additional plugins like [DaisyUI](https://daisyui.com/docs/install/).**
  - You can install DaisyUI using npm:

    ```bash
    npm i -D daisyui@latest
    ```

    Then, add DaisyUI to your `tailwind.config.js` file:

    ```js
    // tailwind.config.js
    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [require("daisyui")],
    };
    ```

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PropTypes Guide](https://www.npmjs.com/package/prop-types)
- [React Router Guide](https://reactrouter.com/web/guides/quick-start)

---


[![Lucía Ordoñez Vilanova](https://avatars.githubusercontent.com/u/153511070?v=4&s=100 "Lucía Ordoñez Vilanova's GitHub Avatar")](https://github.com/Luovtyrell) <a href="https://www.github.com/Luovtyrell"> <br>
<img src="https://img.shields.io/badge/LUCIA%20ORDO%C3%91EZ%20VILANOVA-gray?style=flat&color=ffcf00"  height="30" alt="Made by Lucía Ordoñez Vilanova"/>
</a>

<a href="mailto:luciaorvilanova@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat"  height="23" alt="Gmail" /></a> <a href="https://www.linkedin.com/in/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat" height="23" alt="LinkedIn" /></a> <a href="https://t.me/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=fff&style=flat" height="23" alt="Telegram" /></a> <a href="http://discordapp.com/users/664163194989707308" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=flat" height="23" alt="Discord" /></a> 
