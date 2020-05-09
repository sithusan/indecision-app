const user = {
    name : 'Si Thu',
    cities : ['Yangon','Mandalay','Kanma'],
   printPlacesLived(){
       return this.cities.map((city) => {
           return this.name + 'has lived in ' + city;
       })
   }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [1,2,3,4,5],
    multiplier : 2,
    multiply(){
        return this.numbers.map((number) =>
             number * this.multiplier
        );
    }
}
console.log(multiplier.multiply());