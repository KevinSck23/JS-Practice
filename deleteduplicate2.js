function deleteDuplicate() {
    let brands = ["Versace", "CKOne", "Burberry", "Nautica", "Versace", "Montblanc", "CKOne", "Zara", "Burberry"];
    let mybrands = [];
  
    for (let i = 0; i < brands.length; i++) {
      let isDuplicate = false;
  
      for (let j = 0; j < mybrands.length; j++) {
        if (brands[i] === mybrands[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        mybrands.push(brands[i]);
      }
    }
  
    return mybrands;
  }
  
  console.log(deleteDuplicate());
  