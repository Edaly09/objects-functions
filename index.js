// ## 01 - Object


// const cat = {
//     name : "grefield",
//     Age : 3,
//     isCute : true,

  
// }
// console.log(cat)

// console.log(cat.Age)
// const isCute = true

// if(isCute){
//     console.log("So cute ! ", cat.isCute)
// }

// ## 02 - Combine

// const cat2 = {
//     name : "felix",
//     Age : 10,
//     isCute : false,
  
  
                            
// }

// let cats = [ cat2, cat]

//      console.log(cats[1].Age)
//      console.log(cats[0].isCute)

// ## 03 - Even
// const checkIfEven = (num) => {
//     if(num % 2 === 0){
//         console.log("even")
//     }
//     else {
//         console.log("odd")
//     }

// }

// checkIfEven(2)
// checkIfEven(19)
// checkIfEven(4)
// checkIfEven(0)
// checkIfEven(747)
// checkIfEven(67)

// ## 04 - Compare

// const compare = (x, y) => {

//     if(x > y ){
//         console.log("`x` is bigger")
//     }
//     else if(x < y){
//         console.log("`y` is bigger")
//     }
//     else{
//         console.log("both are the same")
//     }

// }

// compare(4, 3)

// compare(4, 6)

// compare(4, 4)



// ## 05 - Add Up

const addUp = (num) =>{
    let res = 0
    for(let i = 1; i <= num; i++){

    res = res + i

    }
    console.log(res)
}
addUp(12)

// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78

// ## 06 - Time

// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`