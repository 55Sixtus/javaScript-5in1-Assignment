document.getElementById("check-sum").addEventListener("click", function() {
    let targetSum = parseInt(document.getElementById("target-sum").value);
    let numbersArray = document.getElementById("numbers-array").value.split(",").map(Number);
  
    let result = findCombination(numbersArray, targetSum);
    document.getElementById("output").innerHTML = `Combination found: ${result}`;
  });
  
  function findCombination(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return `${arr[i]} + ${arr[j]}`;
        }
      }
    }
    return "No combination found";
  }
  