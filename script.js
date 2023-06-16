window.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.querySelector("form");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Calculate and display the new doses
      calculateNewDoses();
    });

    // Function to calculate and display the new doses
    function calculateNewDoses() {
      // Get the input values
      var mammogramUpdate = document.getElementById("mammogramUpdate").value;
      console.log(mammogramUpdate)
      var lastProgesteroneDose = parseFloat(document.getElementById("lastProgesteroneDose").value);
      var lastEstradiolDose = parseFloat(document.getElementById("lastEstradiolDose").value);
      var lastTestosteroneDose = parseFloat(document.getElementById("lastTestosteroneDose").value);

      // Get the result elements
      var newProgesteroneDoseLabel = document.getElementById("newProgesteroneDose");
      var newEstradiolDoseLabel = document.getElementById("newEstradiolDose");
      var newTestosteroneDoseLabel = document.getElementById("newTestosteroneDose");

      // Calculate the new doses based on the input values
      var newProgesteroneDose = calculateNewProgesteroneDose(mammogramUpdate,lastEstradiolDose);
      var newEstradiolDose = calculateNewEstradiolDose(mammogramUpdate, lastEstradiolDose);
      var newTestosteroneDose = calculateNewTestosteroneDose(symptomRelief,lastTestosteroneDose);

      // Update the result labels with the calculated values
      newProgesteroneDoseLabel.textContent = newProgesteroneDose + " mg Orally";
      newEstradiolDoseLabel.textContent = newEstradiolDose + " mg Pellets";
      newTestosteroneDoseLabel.textContent = newTestosteroneDose + " mg Pellets";
    }


// Function to calculate the new Progesterone dose !!!!
function calculateNewProgesteroneDose(mammogramUpdate, lastEstradiolDose) {
    console.log(mammogramUpdate,lastEstradiolDose);

    if (mammogramUpdate === "No") {
        return 0;
      } else if (mammogramUpdate === "Yes" && lastEstradiolDose === 0.0) {
        return lastEstradiolDose;
      } else {
        return 200; // Handle any other cases according to your requirement
      }
    }




    // Function to calculate the new estradiol dose OKKK
    function calculateNewEstradiolDose(mammogramUpdate, lastEstradiolDose) {
        if (mammogramUpdate === "No") {
          return 0;
        } else if (mammogramUpdate === "Yes") {
          return lastEstradiolDose;
        } else {
          return null; // Handle any other cases according to your requirement
        }
      }


// Function to calculate the new Testosterone dose !!!!
function calculateNewTestosteroneDose(symptomRelief, lastTestosteroneDose) {
    if (symptomRelief === "No") {
      return lastTestosteroneDose;
    } else if (symptomRelief === "Yes") {
      var dose = parseFloat(lastTestosteroneDose); // Convert to a number for comparison
      if (dose === 50.0) {
        return "50.0";
      } else if (dose === 75.0) {
        return "50.0";
      } else if (dose === 87.5) {
        return "50.0";
      } else if (dose === 100.0) {
        return "87.5";
      } else if (dose === 112.5) {
        return "100.0";
      } else if (dose === 125.0) {
        return "112.5";
      } else if (dose === 137.5) {
        return "125.0";
      } else if (dose === 150.0) {
        return "137.5";
      } else if (dose === 162.5) {
        return "150.0";
      } else if (dose === 175.0) {
        return "162.5";
      } else if (dose === 200.0) {
        return "175.0";
      } else {
        return null; // Handle any other cases according to your requirement
      }
    } else {
      return null; // Handle any other cases according to your requirement
    }
  }


  });
