document.querySelector("#category").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.id);
  }
});

document.querySelector("#form").addEventListener("keyup", (event) => {
  // This is called behaviour pattern
  if (event.target.dataset.uppercase !== undefined) {
    event.target.value = event.target.value.toUpperCase();
  }
});

/*
  NOTES: 
    Event delegations allows us to add a single event listener and listen for event from child elements, this is enabled by event bubbling.
    The pros of using this is more maintainable code and better performance as less event handler are needed (memory benefit), need to write less code.
    We can also listen to child elements if they are being added dynamically.
    And we can also use behaviour pattern for better code.
    The limitations are that not all of the events are bubbled up like blur/onscroll/etc or if we are using stop propogation.
*/
