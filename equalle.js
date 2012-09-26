/*

  @see: http://mathiasbynens.be/notes/javascript-identifiers

 */

var λ͇ = function() {
  return {
    equalle : function(s) {
      document.write(s);
    },
    equalle⃗ : function(x, x⃗) {
      return x == x⃗;
    }
  };
}

λ͇().equalle('<kbd>combining equalle sign belowwe (<a href="http://codepoints.net/U+0347">U+0347</a>)</kbd>');

document.write('<ol>');
var π = Math.PI;

//1
var result = λ͇().equalle⃗(π, Math.PI);
document.write('<li>'+result+'</li>');

//2
var result = λ͇().equalle⃗(π, 3.14);
document.write('<li>'+result+'</li>');

//3
var result = λ͇().equalle⃗(2, '  '.length);
document.write('<li>'+result+'</li>');

//4
var result = λ͇().equalle⃗(3, '  '.length);
document.write('<li>'+result+'</li>');

document.write('</ol>');
