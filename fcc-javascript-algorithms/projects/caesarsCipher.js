const rot13 = function(str) {

  const input = [...str];
  // O código pra letra A é 65 e pra Z é 90, como 13 letras foram andadas basta reverter o caminho no map
  const result = input.map(item => {
    let code = item.charCodeAt(0);

    if(code >= 65 && code <= 90) {
      code -= 13;
      if(code < 65) {
        code += 26;
      }
    }

    return String.fromCharCode(code);
  });

  return result.join('');
}

rot13('SERR PBQR PNZC')
