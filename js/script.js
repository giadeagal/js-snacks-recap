// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const getList = (x, a, b) => {
    while (a > b) {
        a= b-1;
    }
   return x.filter((num) => { 
       return (num> a && num< b ||num>= a && num< b||num> a && num<= b)? true : false
    })
};

const startingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const test = getList(startingList, 3, 10);
const testWhile = getList(startingList, 10, 3);
const result = 
    `
        <h2>Risultato con a minore di b</h2><br>
        ${test}<br><br>
        <h2>Risultato con a maggiore di b</h2><br>
        ${testWhile}
    `;

document.getElementById("text").innerHTML = result;