import { eventHandler } from "./modules/home/event-handler.mjs";

const init = () => {
   eventHandler.setupEventListeners();
};

window.onload = init;