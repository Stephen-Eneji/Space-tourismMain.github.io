export const navbarEventHandler = (() => {
   const logo = document.querySelector("#logo");
   const logoLink = logo.parentElement;
   const navToggle = document.querySelector("#nav-toggle");
   const navbar = document.querySelector("#navbar-main");
   const navItems = document.querySelectorAll("#navbar-main ul li");
   const imgSrcs = [
      "./assets/shared/icon-hamburger.svg",
      "./assets/shared/icon-close.svg"
   ];
   let open = false;

   const setupLogoClickListener = () => {
      logoLink.addEventListener("click", async (evt) => {
         evt.preventDefault();
         await scaleAnimation(300);
         await rotateAnimation(500);
         window.location.href = logoLink.href;
      });
   };

   const scaleAnimation = (duration) => {
      return new Promise((resolve, reject) => {
         logo.animate([{ transform: "scale(0.9)" }, { transform: "scale(1.15)" }], {
            duration: duration,
            fill: "forwards",
         });
         setTimeout(() => {
            resolve();
         }, duration);
      });
   };

   const rotateAnimation = (duration) => {
      return new Promise((resolve, reject) => {
         logo.animate([{ transform: "scale(1.15) rotateZ(0deg)" }, { transform: "scale(1.15) rotateZ(540deg)" }], {
            duration: duration,
         });
         setTimeout(() => {
            resolve();
         }, duration);
      });
   };

   const setupNavToggleListener = () => {
      navToggle.addEventListener("click", () => {
         navbar.classList.toggle("show");
         open = !open;
         if(open) {
            navToggle.children[0].src = imgSrcs[1];
         } else {
            navToggle.children[0].src = imgSrcs[0];
         }
         for(const item of navItems) {
            item.classList.toggle("fadeIn");
         }
      });
   };

   const setupEventListeners = () => {
      setupLogoClickListener();
      setupNavToggleListener();
   };

   return {
      setupEventListeners: setupEventListeners,
   };
})();
