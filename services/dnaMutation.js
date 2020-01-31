function processChainDna(chain) {
    let auxReturn =  false;
    if (allHorizontal(chain)){
        auxReturn = true;
        return auxReturn;
    }

    if (checkVertical(chain)) {
        auxReturn = true;
        return auxReturn;
    }
    if (checkDiagonalPost(chain)){
        auxReturn = true;
        return auxReturn;
    }
    if (checkDiagonalBack(chain)) {
        auxReturn = true;
        return auxReturn;
    }

    return auxReturn;
}
function allHorizontal(chain) {
    for (let cad of chain){
        if(checkCadPattern(cad)) {
            return true
        }
    }
    return false;
}
function checkCadPattern(cad) {
    patterns = ['AAAA', 'TTTT', 'GGGG', 'CCCC'];
    return !!patterns.filter(item  => {
        reg = new RegExp(item);
        return reg.test(cad);
    }).length


}

function checkVertical(chain ) {
    let auxVertical = false;
    for (j =0; j < chain.length; j++) {
        let auxWord = '';
        for( i = 0 ; i < chain.length; i++) {
            auxWord += chain[i][j];
        }
        if(checkCadPattern(auxWord)){
            auxVertical = true;
            return auxVertical;
        }


    }
    return auxVertical;

}

function checkDiagonalPost(chain){
    let auxWord= '';
    let auxCad ='';
    let k = chain.length - 4;
    for (i = 0; i < k; i++) {
        auxWord = '';
        auxCad = '';
        for (j = 0; j < chain.length-k; j++) {
            auxWord += chain[j][j + i];
            auxCad +=  chain[j+i][j];
            if (checkCadPattern(auxWord) || checkCadPattern(auxCad)){
                return true;
            }
        }
    }




    return false;

}

function checkDiagonalBack(chain){
    let auxWord= '';
    let auxCad = '';
    let k = chain.length - 4;
    for (i = 0; i < k +1; i++) {
        auxWord = '';
        auxCad = '';
        for (j = chain.length-1; j > k -1; j--) {
            auxWord += chain[j - 1 ][j - i];
            auxCad += chain[j - i][j - 1];

            console.log(auxWord);
            if (checkCadPattern(auxWord)){
                return true;
            }
        }
    }
}
module.exports = processChainDna;
