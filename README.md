# Expo AsyncStorage Initialization Error

This repository demonstrates a common error encountered when using AsyncStorage in Expo applications: attempting to access AsyncStorage before it's fully initialized. This often occurs during the initial app loading phase.

The `bug.js` file illustrates the problem, while `bugSolution.js` provides a solution using the useEffect hook to ensure AsyncStorage is ready before accessing it.