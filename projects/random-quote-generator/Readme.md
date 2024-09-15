### Project Description

This project is a simple JavaScript-based quote generator that fetches random quotes from an API and displays them on a webpage. The user can click a button to fetch a new quote. While the quote is loading, the button is disabled, and placeholder text is shown to indicate that the content is being updated. In case of an error, an error message is displayed.

### Code Explanation

```javascript
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
```
- **`btnEl`**, **`quoteEl`**, and **`authorEl`** are constants that store references to HTML elements with the IDs `btn`, `quote`, and `author`, respectively. These elements will be used to display the button, quote, and author.

```javascript
const apiURL = "https://api.quotable.io/random";
```
- **`apiURL`** is a constant that stores the API endpoint for fetching random quotes. The application will send a request to this URL to get a new quote.

```javascript
async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
```
- **`getQuote`** is an asynchronous function responsible for fetching a random quote. Initially, it disables the button (`btnEl.disabled = true`) and updates the button and text content to show that the quote is loading.

```javascript
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
```
- The `fetch` function is used to send an HTTP GET request to the API. The **`await`** keyword ensures the code waits for the API response before proceeding.
- After receiving the response, the code converts it to JSON format using **`response.json()`** and extracts the quote's content (`data.content`) and author (`data.author`).

```javascript
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}
```
- If the quote is successfully fetched, the new quote and author are displayed by updating the `innerText` of **`quoteEl`** and **`authorEl`**. The button is then re-enabled.
- If an error occurs (e.g., network failure), the **`catch`** block is executed. It logs the error to the console and displays an error message on the webpage. The button is also re-enabled after the error.

```javascript
getQuote();
btnEl.addEventListener("click", getQuote);
```
- **`getQuote()`** is called immediately when the page loads to display the initial quote.
- The button element (`btnEl`) listens for click events and triggers the `getQuote` function whenever the user clicks the button.

### Summary
This project provides a seamless user experience by using asynchronous JavaScript to fetch data from an external API and handles both loading states and potential errors efficiently.