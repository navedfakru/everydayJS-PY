const myModule = {
  x: 42,
  getX: function() {
    return this.x
  }
}


// console.log(myModule.getX)
const unboundGetX = myModule.getX
console.log(unboundGetX())

const boundGetx = unboundGetX.bind(myModule)
console.log(boundGetx())