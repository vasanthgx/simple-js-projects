### Sticky Navbar Project Description

This project demonstrates the implementation of a sticky navigation bar that remains fixed at the top of the webpage after scrolling past a certain point. The navbar provides links to different sections of the site, and the functionality is powered by JavaScript to detect the scroll position and make the navbar sticky. The webpage consists of a simple layout with placeholder content, demonstrating how the sticky navbar works when scrolling through the content.

### Code Explanation

#### HTML (`index.html`):
- **Navbar**: The `<div class="navbar">` contains the navigation links. Initially, it is placed at the top of the page. When the user scrolls, the navbar sticks to the top of the viewport.
- **Content**: 
  - The `.top-container` contains a welcoming message for the webpage.
  - The `.bottom-container` holds paragraphs of placeholder text to demonstrate the scrolling effect.
- The structure ensures there is enough content to scroll down the page, which helps visualize the sticky navbar behavior.

#### JavaScript (`index.js`):
1. **Selecting Elements**:
   - `navbarEl`: Refers to the `.navbar` element.
   - `bottomContainerEl`: Refers to the `.bottom-container` element, which helps determine when the navbar should stick.

2. **Logging Element Properties**:
   - `navbarEl.offsetHeight`: Logs the height of the navbar. This helps in calculating when the navbar should become sticky.
   - `bottomContainerEl.offsetTop`: Logs the distance from the top of the document to the `.bottom-container`.

3. **Scroll Event Listener**:
   - A scroll event is added to the window to track the user's scroll position.
   - When the user scrolls down past the top of the `.bottom-container`, minus the height of the navbar and an additional 50 pixels, the `active` class is added to the navbar. This class uses CSS to change its position to fixed, making it sticky.
   - When the user scrolls back above this threshold, the `active` class is removed, and the navbar returns to its original position.

By dynamically adjusting the navbar's class based on the scroll position, the script ensures the navbar sticks to the top when needed, providing a smooth user experience.