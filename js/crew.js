import { eventHandler } from "./modules/crew/event-handler.mjs";
import { crewController } from "./modules/crew/crew-controller.mjs";

const init = async () => {
   await fetch("./data.json")
      .then((response) => {
         if(!response.ok) throw new Error(response.statusText);
         return response;
      })
      .then((response) => response.json())
      .then((obj) => {
         crewController.initCrew(obj.crew);
      })
      .catch(err => console.log(err));
   eventHandler.setupEventListeners();
};

window.onload = init;
