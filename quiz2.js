function espacios (n)
{
  var s = "";
 // for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

function quiz1(n){

  for (var i = 0; i < n; i++) {
  var sp = espacios (n);
  var content = "";
  for (j = 1; j < n - i ; j++)
    content +=  j;
  console.log(sp + content);
}
}
quiz1(5);
