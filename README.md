IP address tracker

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![../src/images/screenshot.png]

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- HTML5 markup
- SCSS
- React
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

-Learned the basics of Leaflet Maps for React. First challenge was changing the map view after searching for a random IP address. The map would just remain at its initial location while other information about the IP address' city, timezone, etc. would update correctly. The solution was to implement the useMap hook from react-leaflet's library and render it as a component (which I named ChangeView) within the MapContainer. The second hurdle had to do with styling. In mobile view, the IP address info card is supposed to overlay part of the map. To achieve this, my intial thinking was to use z-index: -1 on the map container to place it under the card. However, this method stopped most of the map's basic functionality, such as panning and zooming. I then tried z-index: 1 on the card, but nothing seemed to change. Finally, in the HTML markup, I tried placing the map component (OnMap.js)outside of the card's wrapper and, in SCSS, making the card's wrapper z-index 1. That seemed to do the trick.
-Used the nth-child property for the first time in a real app. This had to be used with the ::after pseudo element to put in vertical lines inside the IP address info card in Desktop view. It was not necessary to have a line after the last child, so I had to select the first three children via the nth-child property.
-I also faced a challenge to show the user's IP address and location on the app's initial run. Luckily, there is a simple API that show's the user's latitude and longitude (needed to set the initial map view) along with their city, region, timezone (needed in the IP address info card).

### Continued development

I would like to continue using react-leaflet in order to learn more about its basic and advanced features.

### Useful resources

- [Change Map View](https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes) - This helped me change the view of the map after searching an IP address.
- [Nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) - Nice reference about the nth child property in CSS.
- [Vertical border lines](https://hollybourneville.medium.com/creating-border-lines-using-pseudo-elements-in-css-a460396299e8) - For desktop view, this helped me make vertical border lines in the IP address info card by using the ::after pseudo element.
- [Random IP address generator](https://www.ipvoid.com/random-ip/) - If you're making this app, this is a convenient way to get random IP addresses to test out your app and detect any potential problems.

## Author

- Github - [jvb3](https://github.com/jvb3)
- Frontend Mentor - [@jvb3](https://www.frontendmentor.io/profile/jvb3)
