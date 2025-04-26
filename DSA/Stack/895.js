var FreqStack = function () {
  this.arr = [];
  this.group = []
  this.map = {};
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  if (this.map[val]) {
    this.map[val] = this.map[val] + 1;
  } else {
    this.map[val] = 1;
  }
  this.arr.push({val : val , freq : this.map[val] });
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    let max = 0 ; 
    for(let key in this.map){
        max = Math.max(max , this.map[key])
    }

    for(let i = this.arr.length - 1; i >= 0; i--){
        const {val } = this.arr[i];
        console.log(val , this.arr[i])
        if(this.arr[i].freq === max){
            this.map[val]--; 
            this.arr.splice(i,1);
            return val
        }
    }
};

const freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
console.log(freqStack.pop())
console.log(freqStack.pop())
console.log(freqStack.pop())
console.log(freqStack.pop())
console.log(freqStack.pop())
console.log(freqStack.pop())


