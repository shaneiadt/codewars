export class Kata {
  static highAndLow(numbers: string) {
  
    //Convert string to array of Integers & sort by the highest value in descending order.
    let arr = numbers.split(' ').map(function(str){return parseInt(str);}).sort(function(a, b){return b-a});
    
    //Highest value will be at index [0] & lowest value at the end of the array. Finally convert to String for output.
    return (arr[0].toString())+' '+(arr[arr.length-1].toString());
    
  }
}