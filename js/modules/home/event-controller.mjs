export const eventController = (() => {
   const animateBtn = function () {
      this.classList.add("animate");
   };

   const loadPage = function (destination) {
      window.location.href = destination;
   };

   return  {
      animateBtn: animateBtn,
      loadPage: loadPage
   };
})();
