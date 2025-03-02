## Sum Array with Node.js and Rust (NAPI.rs)
This project demonstrates how to use Node.js with a Rust native module (via NAPI.rs) to efficiently sum a large array of numbers. The Rust code leverages multi-threading with rayon for optimal performance, while the JavaScript code provides a comparison between the native module and a pure JavaScript implementation.

### Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v14 or higher recommended)
- Rust (install via curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh)
- npm (comes with Node.js)
- A terminal to run commands

### Setup and Build Instructions
Follow these steps to set up and build the project:

1. Clone or Create the Project
- If cloning, use: ```git clone https://github.com/damiaoterto/big_sum.git```.
- Otherwise, create a new directory and add the files listed below.
  
2. Install Node.js Dependencies
- Navigate to the project directory:
  ```cd big_sum```
- Install the NAPI CLI:
  ```yarn install```
- Build the Native Module: ```yarn build```

### Running the Example
1. Example JavaScript (example.js)
   - Run the script with Node.js: ```node example.js```