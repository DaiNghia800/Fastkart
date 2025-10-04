const buttonAccordion = document.querySelectorAll("[button-accordion]");
if(buttonAccordion.length > 0){
  buttonAccordion.forEach(button => {
    button.addEventListener("click", () => {
      const i = button.querySelector("i");
      i.classList.toggle("active");
    })
  })
}

// User Dashboard Left Sidebar Show
const buttonShow = document.querySelector(".left-dashboard-show");
if(buttonShow){
  const bgOverlay = document.querySelector(".bg-overlay");
  const boxLeft = document.querySelector(".user-dashboard .box-left");
  const buttonClose = document.querySelector(".user-dashboard .box-left .close-button button");

  buttonShow.addEventListener("click", () => {
    boxLeft.classList.add("show");
    bgOverlay.classList.add("show");
  });

  bgOverlay.addEventListener("click", () => {
    boxLeft.classList.remove("show");
    bgOverlay.classList.remove("show");
  });

  buttonClose.addEventListener("click", () => {
    boxLeft.classList.remove("show");
    bgOverlay.classList.remove("show");
  })
}
// End user Dashboard Left Sidebar Show

// quantity 
const qtyLeftMinus = document.querySelectorAll(".qty-left-minus");
const qtyRightPlus = document.querySelectorAll(".qty-right-plus");

if(qtyLeftMinus.length > 0 && qtyRightPlus.length > 0){
  qtyLeftMinus.forEach(button => {
    button.addEventListener("click", () => {
      const input = button.nextElementSibling;
      let value = parseInt(input.value) || 0;

      if(value > 1){
        input.value = value - 1;
      }
    })
  })

  qtyRightPlus.forEach(button => {
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      let value = parseInt(input.value) || 0;

      if(value <= 100)
      input.value = value + 1;
    })
  })
}
// end quantity 