import { eventController } from "./event-controller.mjs";
import { navbarEventHandler } from "../shared/navbar-event-handler.mjs";

export const eventHandler = (() => {
   const setupExloreBtnListener = () => {
      const exploreBtn = document.querySelector("#explore-btn");
      const destination = exploreBtn.firstElementChild.href;
      exploreBtn.addEventListener("click", eventController.animateBtn);
      exploreBtn.addEventListener("animationend", () => eventController.loadPage(destination));
   };

   const setupEventListeners = () => {
      navbarEventHandler.setupEventListeners();
      setupExloreBtnListener();
   };

   return {
      setupEventListeners: setupEventListeners
   };
})();