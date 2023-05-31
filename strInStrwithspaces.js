function locatestring(a,b){

    if (b.includes(a)) {
      console.log("La string b contiene a la string a en la posicion " + b.indexOf(a));
    } else if (a.includes(b)) {
      console.log("La string a contiene a la string b en la posicion." + a.indexOf(b));
    } else {
      console.log("Las strings no se contienen mutuamente.");
    }
       
}

const a = "sol";
const b = "el dia esta soleado y no soporto la soledad";

locatestring(a, b)



//Need to iterate in the string to find ALL the positions and not only the first one

const str = 'hyunjin comia tajin en un cojin en beijing';
console.log(str.length);

function strInStr(str, strToFind) {
    let strcopy = str.replace(/\s/g,'');
    let aux = 0;
    let positions = [];
    while (aux <= strcopy.length) {
        let index = strcopy.indexOf(strToFind, aux);
        if (index === -1) {
            break;
        }
        positions.push(index);
        aux = index + strToFind.length;
    }
    return positions;
}

console.log(strInStr(str, 'jin'));
