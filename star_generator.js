document.getElementById("generate-stars").addEventListener("click", function() {
    let maxStars = document.getElementById("max-stars").value;
    let output = "";
  
    for (let i = 1; i <= maxStars; i++) {
      output += "<span>&#x2605;</span> "; // &#x2605; is the Unicode character for a star
      if (i % 10 === 0) { // add a line break every 10 stars
        output += "<br>";
      }
    }
  
    document.getElementById("output").innerHTML = output;
  });
  