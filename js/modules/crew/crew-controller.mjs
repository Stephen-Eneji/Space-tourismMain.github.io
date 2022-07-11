export const crewController = (() => {
   const crewBtns = document.querySelectorAll(".crew-nav-btn");
   let crew;
   const roleHeader = document.querySelector("h4.heading-4");
   const nameHeader = document.querySelector("h3.heading-3");
   const bioText = document.querySelector("p.body-text");
   const crewImg = document.querySelector("#crew-img");

   const initCrew = (crewArray) => {
      crew = crewArray;
   };

   const changeCrewMember = async function () {
      const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);
      const crewMember = crew[index];
      changeSelectedNav(this);
      changeElementContent(crewMember);
      await changeCrewImg(300, "fade-out");
      const imgSrc = crewMember.images.png;
      changeCrewImg(300, "fade-in", imgSrc);
   };

   const changeSelectedNav = (selectedNav) => {
      for (const btn of crewBtns) {
         btn.classList.remove("active");
      }
      selectedNav.classList.add("active");
   };

   const changeElementContent = (crewMember) => {
      const { name, role, bio } = crewMember;
      roleHeader.innerText = role.toUpperCase();
      nameHeader.innerText = name.toUpperCase();
      bioText.innerText = bio;
   };

   const changeCrewImg = (duration, direction, imgSrc) => {
      if (direction === "fade-out") {
         return new Promise((resolve, reject) => {
            crewImg.animate(
               [
                  { opacity: "1", transform: "translateY(0px)" },
                  { opacity: "0", transform: "translateY(-50px)" },
               ],
               { duration: duration, fill: "forwards" }
            );
            setTimeout(() => {
               resolve();
            }, duration);
         });
      } else if (direction === "fade-in") {
         crewImg.src = imgSrc;
         crewImg.animate(
            [
               { opacity: "0", transform: "translateY(50px)" },
               { opacity: "1", transform: "translateY(0px)" },
            ],
            { duration: duration, fill: "forwards" }
         );
      }
   };

   return {
      initCrew: initCrew,
      changeCrewMember: changeCrewMember,
   };
})();
