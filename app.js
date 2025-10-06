// Listen for button click!!
const button = document.getElementById("calculate");
button.addEventListener("click", function() {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const maintenance = parseFloat(document.getElementById("maintenance").value);

    // Example calculations (customize as needed)
    const protein = Math.round(weight * 0.8); // grams
    const fats = Math.round(weight * 0.4); // grams
    const carbs = Math.round((maintenance - ((fats * 8) + (protein * 4)))/4);
    

    // Update result labels
    document.querySelector(".protein").textContent = "Protein: " + protein + "g";
    document.querySelector(".carbs").textContent = "Carbohydrates: " + carbs + "g";
    document.querySelector(".fats").textContent = "Fats: " + fats + "g";
});
