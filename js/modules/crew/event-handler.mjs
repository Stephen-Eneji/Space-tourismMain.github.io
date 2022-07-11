import { navbarEventHandler } from "../shared/navbar-event-handler.mjs";
import { crewController } from "./crew-controller.mjs";

export const eventHandler = (() => {
   const setupCrewNavBtns = () => {
      const crewBtns = document.querySelectorAll(".crew-nav-btn");
      for(const btn of crewBtns) {
         btn.addEventListener("click", crewController.changeCrewMember);
      }
   };

   const setupEventListeners = () => {
      navbarEventHandler.setupEventListeners();
      setupCrewNavBtns();
   };

   return {
      setupEventListeners: setupEventListeners
   };
})();