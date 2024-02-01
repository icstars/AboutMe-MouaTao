function showInfo(year) {
    // You can customize the information based on the clicked year
    var infoDisplay = document.getElementById('infoDisplay');
  
    switch (year) {
      case 2025:
        infoDisplay.innerHTML =
          `
          1) What are the lessons you want to learn?
          2) What are the things you want to earn?
          3) What are the things you can afford to lose?
          4) What are the things you want to gain?
          5) What do you want to change?
          6) What do you want to stay the same?
          7) What is your wish for this year?
          8) What will be your favorite dish?
          9) Make yourself a fortunate based on this year. What would you call the year?  
          `;
        break;
      case 2026:
        infoDisplay.innerHTML =
          `
          1) What are the lessons you want to learn?
          2) What are the things you want to earn?
          3) What are the things you can afford to lose?
          4) What are the things you want to gain?
          5) What do you want to change?
          6) What do you want to stay the same?
          7) What is your wish for this year?
          8) What will be your favorite dish?
          9) Make yourself a fortunate based on this year. What would you call the year?  
          `;
        break;
      case 2027:
        infoDisplay.innerHTML = "Information for 2027";
        break;
      case 2032:
        infoDisplay.innerHTML = "Information for 2032";
        break;
      case 2037:
        infoDisplay.innerHTML = "Information for 2037";
        break;
      case 2042:
        infoDisplay.innerHTML = "Information for 2042";
        break;
      case 2047:
        infoDisplay.innerHTML = "Information for 2047";
        break;
      case 2052:
        infoDisplay.innerHTML = "Information for 2052";
        break;
      default:
        infoDisplay.innerHTML = "No information available";
    }
  }
  