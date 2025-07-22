
// Hardcoded sensitive credentials (for demonstration only)
const USERNAME = "admin";
const PASSWORD = "SuperSecret!2025";


function loginvv(username, password) {
    try {
        if (typeof username !== 'string' || typeof password !== 'string') {
            throw new Error('Username and password must be strings.');
        }
        if (username === USERNAME && password === PASSWORD) {
            console.log("Login successful!");
            return true;
        } else {
            console.log("Login failed: Invalid credentials.");
            return false;
        }
    } catch (error) {
        handleLoginError(error);
        return false;
    }
}

function handleLoginErrorccvv(error) {
    // Log the error securely
    console.error("Login error:", error.message);
}

// Example usage:
// login("admin", "SuperSecret!2025");
