// ================= JavaScript: Fetch API =================


// Fetch API is a modern browser API used to make HTTP requests.
// It returns a Promise that resolves to a Response object.

// Core Purpose:
// Enable client-side applications to communicate with servers (APIs).

// Why Fetch Exists:
// - Replace XMLHttpRequest (XHR)
// - Provide Promise-based API
// - Improve readability and async handling
// - Support streaming and modern web architecture

// Internal Concept:
// fetch() does NOT reject on HTTP errors (404, 500).
// It only rejects on network failure.




// ======================================================
// 1. Basic GET Request
// ======================================================

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//         console.log("status : ", response.status);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log("Network Error : ", err))

// Why:
// - fetch() returns Promise<Response>
// - response.json() parses body stream into JS object
// - .catch() handles network-level errors only
// Important:
// Response body is a readable stream.
// You must explicitly parse it.






// ======================================================
// 2. Understanding the Response Object
// ======================================================

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//         console.log(response.ok);        // true if status 200-299
//         console.log(response.status);    // HTTP status code
//         console.log(response.headers);   // Headers object
//         return response.text();          // parse as plain text
//     })
//     .then(console.log);
// Why:
// - response.ok is used to manually detect HTTP failure.
// - Fetch does NOT throw for 404/500 automatically.
//
// Professional Pattern:
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// fetch("https://jsonplaceholder.typicode.com/invalid-url")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`Http Error : ${response.status}`)
//         }
//         return response.json();
//     })
//     .then(console.log)
//     .catch(console.error)




// ======================================================
// 3. Using async / await (Professional Standard)
// ======================================================

// async function fetchData() {
//     try {
//         // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url")
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`)
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (err) {
//         console.error(err);
//     }
// }
// fetchData()

// Why async/await:
// - Cleaner control flow
// - Easier error handling
// - More readable in complex logic













// ======================================================
// 4. How Fetch Works Internally
// ======================================================

// Step 1: fetch() creates a Request object.
// Step 2: Browser sends HTTP request asynchronously.
// Step 3: Returns Promise immediately.
// Step 4: When response headers arrive → Promise resolves.
// Step 5: Body is streamed separately.
//
// Important:
// Fetch is non-blocking.
// It uses browser networking layer.
// It integrates with event loop via microtasks.





// ======================================================
// 5. Handling Multiple Requests Efficiently
// ======================================================


async function fetchMulltiple() {

    try {
        const [users, posts] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()),
            fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
        ]);
        console.log("users lenght : ", users.length);
        console.log("posts lenght : ", posts.length);
    }
    catch (err) {
        console.log("Error : ", err.message);
    }
}

fetchMulltiple()

// Why:
// - Promise.all runs requests in parallel.
// - Improves performance.
// - Fails fast if any request fails.







// ======================================================
// 9. Common Mistakes
// ======================================================
//
// 1. Not checking response.ok
// 2. Forgetting to parse response.json()
// 3. Not handling network errors
// 4. Sequential requests when parallel possible
// 5. Forgetting Content-Type header on POST
//
// Professional Rule:
// Always validate response status.
// Always wrap in try/catch for production code.




// Execution Flow:
//
// fetch()
// ↓
// Returns Promise immediately
// ↓
// Network request sent
// ↓
// Headers received → Promise resolves
// ↓
// Body streamed
// ↓
// You parse body
//




// need to cover: 

// fetch options
// AbortController 
// Timeouts 
// Streaming responses 
// Cache control 