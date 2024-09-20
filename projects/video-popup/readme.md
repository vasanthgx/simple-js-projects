### Project Description

This project implements a movie trailer popup feature on a webpage. The main interface displays a movie image, title, description, and a "Watch Now" button. When the user clicks the button, a video trailer pops up in an overlay. The trailer can be closed using a close button (styled as an "X"), and the video playback stops when the popup is closed.

### Code Explanation

#### HTML
- The structure includes a movie container with an image, title, description, and a button.
- A hidden trailer container (`.trailer-container`) holds the video element and a close button represented by a FontAwesome "X" icon.
  
```html
<div class="main-container">
  <img src="movie-image-url" alt="movie-image" />
  <h1>Movie Title</h1>
  <p>Movie description text here...</p>
  <button class="btn">Watch now</button>
</div>

<div class="trailer-container active">
  <video src="trailer.mp4" controls="true"></video>
  <i class="fas fa-times fa-2x close-icon"></i>
</div>
```

- **Main container**: Contains the movie-related details.
- **Trailer container**: Initially hidden (`.active` class), it displays the video trailer when the "Watch now" button is clicked.

#### JavaScript
- **`btnEl`** and **`closeIconEl`**: Get references to the "Watch now" button and close icon using `document.querySelector`.
- **`trailerContainerEl`**: References the container that holds the trailer video.
- **`videoEl`**: References the video element itself to control playback.

```javascript
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();          // Pause the video
  videoEl.currentTime = 0;  // Reset video time to 0
});
```

- **Button click event**: Removes the `active` class from the trailer container, making it visible and playing the video.
- **Close icon click event**: Adds the `active` class back, hiding the trailer and pausing the video, resetting its playback to the start.

### Features
- **Popup functionality**: The trailer opens in a popup overlay.
- **Video control**: The video stops playing and resets when the popup is closed.
