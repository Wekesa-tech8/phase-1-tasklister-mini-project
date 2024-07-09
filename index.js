function logSubmit(event) {
    event.preventDefault(); 
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  }
  
  const form = document.getElementById("form");
  const log = document.getElementById("log");
  
  form.addEventListener("submit", logSubmit);