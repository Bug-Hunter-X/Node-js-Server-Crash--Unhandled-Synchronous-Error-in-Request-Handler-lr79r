# Node.js Server Crash: Unhandled Synchronous Error

This repository demonstrates a common but easily overlooked error in Node.js server development: unhandled synchronous errors within the request handler.  Synchronous operations, such as file system access using `fs.readFileSync`, can throw exceptions that, if not caught, will crash the entire server process.

## The Problem

The `bug.js` file contains a simple HTTP server that attempts to read a file synchronously. If the file doesn't exist or there's another error during file reading, the exception is unhandled, leading to a server crash.

## The Solution

The `bugSolution.js` file provides a corrected version.  It uses a `try...catch` block to handle potential errors during the synchronous file read.  This prevents the server from crashing and allows for graceful error handling (e.g., sending an error response to the client).