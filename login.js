
// Hardcoded credentials
const USERNAME = "admin";
const PASSWORD = "password123";

/**
 * Attempts to log in with the provided username and password.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} True if credentials match, false otherwise.
 */
function loginnnn(username, password) {
    try {
        if (username === USERNAME && password === PASSWORD) {
            console.log("Login successful!");
            return true;
        } else {
            console.log("Login failed: Invalid credentials.");
            return false;
        }
    } catch {
        console.log("An error occurred");
    }
}

// Example usage:
// login("admin", "password123");
