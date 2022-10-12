export const scrollAnimation = (elements: Array<HTMLElement>, animation: string) => {
   const triggerBottom = (window.innerHeight / 5) * 4;

   elements.forEach((element) => {
      const top = element.getBoundingClientRect().top;

      if (top < triggerBottom) {
         element.classList.add(`${animation}`);
      }
   });
};
