import { destinationController } from "./destination-controller.mjs";
import { navbarEventHandler } from "../shared/navbar-event-handler.mjs";

export const eventHandler = (() => {
   const setupDestinationBtnListeners = () => {
      const destinationBtns = document.querySelectorAll("button.nav-text");
      for(const btn of destinationBtns) {
         btn.addEventListener("click", destinationController.changeDestination);
      }
   }

   const setupEventListeners = () => {
      navbarEventHandler.setupEventListeners();
      setupDestinationBtnListeners();
   };

   return {
      setupEventListeners: setupEventListeners
   };
})();