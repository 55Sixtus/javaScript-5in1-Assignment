function calculateCharacters(str) {
    let totalChars = 0;
    let digits = 0;
    let alphabets = 0;
    let symbols = 0;
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        digits++;
      } else if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        alphabets++;
      } else {
        symbols++;
      }
      totalChars++;
    }
  
    let output = `Total Characters: ${totalChars}<br>`;
    output += `Digits: ${digits}<br>`;
    output += `Alphabets: ${alphabets}<br>`;
    output += `Symbols: ${symbols}<br>`;
  
    document.getElementById("output").innerHTML = output;
  }
  
  calculateCharacters("Hello123!@#");