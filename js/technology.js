import { eventHandler } from "./modules/technology/event-handler.mjs";
import { technologyController } from "./modules/technology/technology-controller.mjs";

const init = async () => {
   await fetch("./data.json")
      .then((response) => {
         if (!response.ok) throw Error(response.statusText);
         return response;
      })
      .then((response) => response.json())
      .then((obj) => {
         technologyController.initTechnologies(obj.technology);
      })
      .catch((err) => console.log(err));
   eventHandler.setupEventListeners();
};

window.onload = init;
