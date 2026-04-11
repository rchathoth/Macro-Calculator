// Listen for button click!!
const button = document.getElementById("calculate");
button.addEventListener("click", function () {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const maintenance = parseFloat(document.getElementById("maintenance").value);

    // Validate inputs
    if (isNaN(weight) || isNaN(maintenance) || weight <= 0 || maintenance <= 0) {
        return;
    }

    // Example calculations (customize as needed)
    const protein = Math.round(weight * 0.8); // grams
    const fats = Math.round(weight * 0.4); // grams
    const carbs = Math.round((maintenance - ((fats * 9) + (protein * 4))) / 4);

    // Update result values with animation
    const proteinEl = document.querySelector(".protein");
    const carbsEl = document.querySelector(".carbs");
    const fatsEl = document.querySelector(".fats");

    // Quick scale-pop animation on update
    [proteinEl, carbsEl, fatsEl].forEach(el => {
        el.style.transform = "scale(1.15)";
        setTimeout(() => { el.style.transform = "scale(1)"; }, 200);
    });

    proteinEl.textContent = protein + "g";
    carbsEl.textContent = carbs + "g";
    fatsEl.textContent = fats + "g";

    // Scroll results into view smoothly
    document.getElementById("results").scrollIntoView({ behavior: "smooth", block: "nearest" });
});
