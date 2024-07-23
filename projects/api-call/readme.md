![alt text](image.png)


# Code Explanation

This JavaScript code demonstrates different ways to fetch data from an API and display it in a web page. Here's a detailed explanation of each part:

#### Selecting the Container

```javascript
const postsListContainer = document.querySelector(".posts-list-container")
```

- `postsListContainer`: This variable holds the DOM element with the class `posts-list-container`. This is where the fetched posts will be displayed.

#### Fetching Using XMLHttpRequest (XHR)

```javascript
function fetchUsingXHR(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts" );
    xhr.responseType = "json";
    xhr.send();
    
    xhr.onload = ()=>{
        if(xhr.status === 200){
            displayResults(xhr.response)
        }else{
            console.log("Some error occured")
        }
    }
}
```

- `fetchUsingXHR`: This function uses `XMLHttpRequest` to fetch data from the API.
- `xhr.open('GET', ...)`: Initializes the request.
- `xhr.responseType = "json"`: Sets the response type to JSON.
- `xhr.send()`: Sends the request.
- `xhr.onload`: Handles the response. If the status is `200` (OK), it calls `displayResults` with the response. Otherwise, it logs an error message.

#### Fetching Using `fetch` Method with `then`

```javascript
function fetchUsingFetchMethod(){
    const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET",
    });

    fetchRequest
    .then((response)=>response.json())
    .then((result)=>displayResults(result))
    .catch(e=> console.log(e));
}
```

- `fetchUsingFetchMethod`: This function uses the `fetch` method to get data from the API.
- `fetch(...)`: Initiates the fetch request.
- `then((response)=>response.json())`: Converts the response to JSON.
- `then((result)=>displayResults(result))`: Calls `displayResults` with the fetched data.
- `catch(e=> console.log(e))`: Catches and logs any errors.

#### Fetching Using `fetch` Method with `async` and `await`

```javascript
async function fetchUsingAsyncAwaitMethod(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET",
    });

    const result = await response.json();
    displayResults(result);

    console.log('==================================');
    console.log(result);
    console.log('===================================');
}
```

- `fetchUsingAsyncAwaitMethod`: This `async` function uses the `fetch` method with `await` to get data from the API.
- `await fetch(...)`: Waits for the fetch request to complete.
- `await response.json()`: Waits for the response to be converted to JSON.
- Calls `displayResults` with the fetched data.
- Logs the fetched data to the console.

#### Fetching Using Promises

```javascript
function helperMethod(method, url){
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = "json";
        xhr.send();

        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(xhr.response)
            }else{
                reject(xhr.response)
            }
        }
    })
    return promise;
}

async function fetchUsingXHRandAsyncAwait(){
    const response = await helperMethod('GET',"https://jsonplaceholder.typicode.com/posts");
    displayResults(response)
    console.log('================================');
    console.log(response);
    console.log('======================================')
}
```

- `helperMethod`: This function creates a Promise that fetches data using `XMLHttpRequest`.
  - Initializes the request.
  - Handles the response. If the status is `200`, it resolves the Promise with the response. Otherwise, it rejects the Promise.
- `fetchUsingXHRandAsyncAwait`: This `async` function uses `helperMethod` to fetch data.
  - Waits for the Promise to resolve.
  - Calls `displayResults` with the fetched data.
  - Logs the fetched data to the console.

#### Displaying Results

```javascript
function displayResults(posts){
    postsListContainer.innerHTML = posts.map((postItem)=>(
        `
            <div class ="post-item">
             <h3>${postItem.title}</h3>
             <p>${postItem.body}</p>

            </div>
        `
    )).join(" ");
}
```

- `displayResults`: This function displays the fetched posts in the container.
- `posts.map((postItem)=>...)`: Maps each post to an HTML string.
- `join(" ")`: Joins the HTML strings into a single string.
- `postsListContainer.innerHTML`: Sets the container's inner HTML to the generated string.

### Fetching Data

Uncomment one of the following lines to fetch data using the corresponding method:

```javascript
// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwaitMethod();
fetchUsingXHRandAsyncAwait();
```


