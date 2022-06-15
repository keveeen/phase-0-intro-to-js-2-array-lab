const cats = ['Milo','Otis','Garfield']

function destructivelyAppendCat(){

    cats.push('Ralph')
}

function destructivelyPrependCat(){

    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){

    cats.pop()
}

function destructivelyRemoveFirstCat(){

    cats.shift()
}

function appendCat(){

    const catsNew = [...cats, 'Broom']

    return catsNew
}

function prependCat(){

    let catsNewTwo = ['Arnold', ...cats]

    return catsNewTwo
}

function removeLastCat(){

    const removeLastCat = cats.slice(0,2)
    return removeLastCat
}

function removeFirstCat(){

    const removeFirstCat = cats.slice(1,3)

    return removeFirstCat
}