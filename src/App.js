import React from "react"
import Navbar from "./components/Navbar.js"
import Main from "./components/Main.js"

// Root component rendering the navbar and main content with shared dark mode state
function App() {

    const [darkMode, setDarkMode] = React.useState(false);

    // Flips the current dark mode value
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode);
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
        </div>
    );
}

export default App;