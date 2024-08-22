document.getElementById("sort-button").addEventListener("click", function() {
    let inputArray = document.getElementById("array-input").value.split(",");
    let numbersArray = inputArray.filter(Number);
    let sortedArray = numbersArray.sort((a, b) => a - b);
  
    document.getElementById("output").innerHTML = "Sorted Array: [" + sortedArray.join(", ") + "]";
  });