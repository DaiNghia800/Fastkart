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
const qtyLeftMinus = document.querySelector(".qty-left-minus");
const qtyRightPlus = document.querySelector(".qty-right-plus");

if(qtyLeftMinus && qtyRightPlus){
  qtyLeftMinus.addEventListener("click", () => {
    const input = qtyLeftMinus.nextElementSibling;
    let value = parseInt(input.value) || 0;

    if(value > 1){
      input.value = value - 1;
    }
  })

  qtyRightPlus.addEventListener("click", () => {
    const input = qtyRightPlus.previousElementSibling;
    let value = parseInt(input.value) || 0;

    if(value <= 100)
    input.value = value + 1;
  })
}
// end quantity 