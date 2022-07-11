import { eventHandler } from "./modules/destination/event-handler.mjs";
import { destinationController } from "./modules/destination/destination-controller.mjs";

const init = async () => {
   await fetch("./data.json")
      .then((response) => {
         if (!response.ok) throw Error(response.statusText);
         return response;
      })
      .then((response) => response.json())
      .then((obj) => {
         destinationController.initDestinations(obj.destinations);
      })
      .catch((err) => console.log(err));
   eventHandler.setupEventListeners();
};

window.onload = init;
