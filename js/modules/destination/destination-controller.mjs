export const destinationController = (() => {
   const destinationBtns = document.querySelectorAll("button.nav-text");
   let destinations;
   const planetHeading = document.querySelector("h1.heading-1");
   const descriptionText = document.querySelector("p.body-text");
   const distanceText = document.querySelector("#distance");
   const travelTimeText = document.querySelector("#travel-time");
   const planetImg = document.querySelector(".grid-cell.first img");

   const initDestinations = (destinationsArray) => {
      destinations = destinationsArray;
   };

   const changeDestination = async function () {
      const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);
      const destination = destinations[index];
      changeSelectedNav(this);
      changeElementContent(destination);
      await orbitPlanet(300, "orbit-out");
      const imgSrc = destination.images.png;
      orbitPlanet(300, "orbit-in", imgSrc);
   };

   const changeSelectedNav = (selectedNav) => {
      for (const btn of destinationBtns) {
         btn.classList.remove("active");
      }
      selectedNav.classList.add("active");
   };

   const changeElementContent = (destination) => {
      const { name, description, distance, travel } = destination;
      planetHeading.innerText = name.toUpperCase();
      descriptionText.innerText = description;
      distanceText.innerText = distance.toUpperCase();
      travelTimeText.innerText = travel.toUpperCase();
   };

   const orbitPlanet = (duration, direction, imgSrc) => {
      if (direction === "orbit-out") {
         return new Promise((resolve, reject) => {
            planetImg.animate(
               [
                  { opacity: "1", transform: "translateX(0px) rotateY(0deg) scale(1)" },
                  { opacity: "0", transform: "translateX(-200px) rotateY(60deg) scale(0.6)" },
               ],
               { duration: duration, fill: "forwards" }
            );
            setTimeout(() => {
               resolve();
            }, duration);
         });
      } else if (direction == "orbit-in") {
         planetImg.src = imgSrc;
         planetImg.animate(
            [
               { opacity: "0", transform: "translateX(200px) rotateY(-60deg) scale(0.6)" },
               { opacity: "1", transform: "translateX(0px) rotateY(0deg) scale(1)" },
            ],
            { duration: duration, fill: "forwards" }
         );
      }
   };

   return {
      initDestinations: initDestinations,
      changeDestination: changeDestination,
   };
})();
