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

// const addUp = (num) =>{
//     let res = 0
//     for(let i = 1; i <= num; i++){

//     res = res + i

//     }
//     console.log(res)
// }
// addUp(12)

// ## 06 - Time

// const format = (num) => {
// const heures = Math.floor(num / 3600)
//     const Firstminutes = (num % 3600)
//     const minutes = Math.floor(Firstminutes / 60)
//     const secondes = (Firstminutes % 60)

//     console.log(`${heures}:${minutes}:${secondes}`)
// }

// format(3700)


// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`


// ## 07 - Password generation



// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"

// Indice: utiliser la table ascii