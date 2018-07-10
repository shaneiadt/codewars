/** Determine whether the given number is a perfect square */
var isSquare = function(n){
  return (n % Math.sqrt(n) === 0 || n === 0)?true:false;
}