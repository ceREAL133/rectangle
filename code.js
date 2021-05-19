let showKeyTrue = document.getElementById('showKeyTrue')

function keyMaker() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234key6789%^&";

    for (let i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

let key = keyMaker();

let arr = [];
    min = 0;
    max = 99;
let possibleSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234key6789%^&";    
  
for (let i = 0; i < 11; i++) {  //vertical quantity
    arr[i] = [];
    for (let j = 0; j < 11; j++) {  //horizontal quantity
        arr[i][j] = possibleSym.charAt(Math.floor(Math.random() * possibleSym.length));
    }
}

for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(arr[i][j] + " ");
    }
        arr[2][9] = key;
        arr[3][8] = key;
        arr[4][7] = key;
        arr[5][6] = key;
        arr[6][5] = key;
        arr[7][4] = key;
        arr[8][3] = key;
        arr[9][2] = key;
        arr[10][1] = key;
}

// mesh generator
let counter = 99;
document.write ('<table width="100%" border="1">');
for (i=1; i<=11; i++) {
    document.writeln("<tr>");
    
    for (j=1; j<11; j++){ ;
        document.write("<td>" + `${counter} __ ${arr[i][j]}` + "<\/td>")
        counter--;
    }
      document.writeln("<\/tr>");
}

document.write ("<\/table> ");

function showKey() {
    showKeyTrue.textContent = `this is ur symbol- ${key}`
}
