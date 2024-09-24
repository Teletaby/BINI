$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayHoverPause: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 }
    }
  });


/**FORMS**/
  // Google Form Submission
  const form = document.getElementById("google-form");
  
  // Ensure this is replaced with your correct App Script URL
  const googleAppScriptUrl = "https://script.google.com/macros/s/AKfycbxCFoqf3t1h-mnkzB_FQfYHrUiO8eAKww3VcCGoHxRfyQPIzP0PkEW2ABIevWJQ__U/exec";

  form.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevents the default form submission
    
    // Send form data using fetch
    fetch(googleAppScriptUrl, {
      method: "POST",
      mode: "cors",  // Try changing this from "no-cors" to "cors" 
      body: new FormData(form),  // Send the form data
    })
    .then(response => {
      console.log("Form submission successful");
      alert("Form submitted successfully!");
    })
    .catch(error => {
      console.error("Error during form submission:", error);
      alert("Form submission failed!");
    });
  });
});
