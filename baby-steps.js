let steps=0
for (let i =2; i< process.argv.length; i++){
steps += process.argv[i]*1
}
console.log(steps)

// let sumBabySteps = 0
// process.argv.slice(2).forEach(function(arg){
//     sumBabySteps +=  +arg
// })
// console.log("StepsBaby= " +sumBabySteps)