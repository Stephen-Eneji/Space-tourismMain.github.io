import { navbarEventHandler } from "../shared/navbar-event-handler.mjs";
import { technologyController } from "./technology-controller.mjs";

export const eventHandler = (() => {
   const setupTechnologyBtnListeners = () => {
      const technologyBtns = document.querySelectorAll(".tech-nav-btn");
      for(const btn of technologyBtns) {
         btn.addEventListener("click", technologyController.changeTechnology);
      }
   };

   const setupImageResizeListener = () => {
      window.addEventListener("resize", technologyController.changeImgSize);
   }

   const setupEventListeners = () => {
      navbarEventHandler.setupEventListeners();
      setupImageResizeListener();
      setupTechnologyBtnListeners();
   };

   return {
      setupEventListeners: setupEventListeners,
   };
})();
