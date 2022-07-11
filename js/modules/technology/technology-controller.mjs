export const technologyController = (() => {
   const technologyBtns = document.querySelectorAll(".tech-nav-btn");
   let technologies;
   const header = document.querySelector("h3.heading-3");
   const descriptionText = document.querySelector("p.body-text");
   const techImg = document.querySelector("#tech-img");
   let imgIndex = 0;
   let changeToPortrait;
   let isPortrait;

   const initTechnologies = (technologiesArray) => {
      technologies = technologiesArray;
      changeImgSize();
   };

   const changeTechnology = async function () {
      const index = [...this.parentElement.parentElement.children].indexOf(this.parentElement);
      const technology = technologies[index];
      imgIndex = index;
      changeSelectedNav(this);
      changeElementContent(technology);
      await fadeImg(300, "fade-out");
      const imgSrc = isPortrait ? technology.images.portrait : technology.images.landscape;
      fadeImg(300, "fade-in", imgSrc);
   };

   const changeSelectedNav = (selectedNav) => {
      for (const btn of technologyBtns) {
         btn.classList.remove("active");
      }
      selectedNav.classList.add("active");
   };

   const changeElementContent = (technology) => {
      const { name, description } = technology;
      header.innerText = name.toUpperCase();
      descriptionText.innerText = description;
   };

   const fadeImg = (duration, direction, imgSrc) => {
      if (direction === "fade-out") {
         return new Promise((resolve, reject) => {
            techImg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: duration, fill: "forwards" });
            setTimeout(() => {
               resolve();
            }, duration);
         });
      } else if (direction === "fade-in") {
         techImg.src = imgSrc;
         techImg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: duration, fill: "forwards" });
      }
   };

   const changeImgSize = () => {
      if (changeToPortrait == null) changeToPortrait = window.innerWidth > 965;
      if (window.innerWidth > 965) {
         if (changeToPortrait) {
            techImg.src = technologies[imgIndex].images.portrait;
            changeToPortrait = false;
            isPortrait = true;
         }
      } else {
         if (!changeToPortrait) {
            techImg.src = technologies[imgIndex].images.landscape;
            changeToPortrait = true;
            isPortrait = false;
         }
      }
   };

   return {
      initTechnologies: initTechnologies,
      changeTechnology: changeTechnology,
      changeImgSize: changeImgSize,
   };
})();