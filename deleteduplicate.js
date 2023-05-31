function deleteDuplicate() {
    let brands = ["Versace", "CKOne", "Burberry", "Nautica", "Versace", "Montblanc", "CKOne", "Zara", "Burberry", "DolceGabanna", "DolceGabanna"];
    let mybrands = [];
  
    for (let i = 0; i < brands.length; i++) {
      if (!mybrands.includes(brands[i])) {
        mybrands.push(brands[i]);
      }
    }
  
    return mybrands;
  }
  
  console.log(deleteDuplicate());