function checkCashRegister(price, cash, cid) {
  // Checar se o troco é igual ao total em caixa e retornar caixa fechado com cid
  const totalAvailable = cid.reduce((total, item) => total += item[1] * 100, 0) / 100;
  const change = cash - price;

  if(totalAvailable == change) {
    return {status: "CLOSED", change: [...cid]}
  }

  // Já que vamos trabalhar com chave-valor já usei o Object.fromEntries() pra termos um objeto a partir do cid
  const cidObj = Object.fromEntries(cid)

  const changeArr = decomposeChange(change)
  const totalChange = getChange(changeArr);
  console.log(changeArr, totalChange)
  const finalArr = []

  // Esse for gera o array com o troco organizado e checa se existem fundos suficientes
  for (let item in totalChange) {
    if(totalChange[item] > 0) {
      finalArr.push([item, totalChange[item]])
    }
    cidObj[item] -= totalChange[item];
    if (cidObj[item] < 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }

  }
  console.log(finalArr)
  return {status: "OPEN", change: finalArr}
  
}

function decomposeChange(change) {
  // A mesma função recursiva usada la no convertToRoman.js, com a mesma finalidade, encontrar o caminho mais curto para chegar no alvo
  function find(current, arr) {
    if(current == change) {
      return arr;
    }
    else if(current > change) {
      return null;
    }
    else {
      return find(current + 100, arr.concat([['ONE HUNDRED', 100]])) ||
             find(current + 20, arr.concat([['TWENTY', 20]])) || 
             find(current + 10, arr.concat([['TEN', 10]])) || 
             find(current + 5, arr.concat([['FIVE', 5]])) || 
             find(current + 1, arr.concat([['ONE', 1]])) ||
             find(current + 0.25, arr.concat([['QUARTER', 0.25]])) ||
             find(current + 0.1, arr.concat([['DIME', 0.10]])) ||
             find(current + 0.05, arr.concat([['NICKEL', 0.05]])) ||
             find(current + 0.01, arr.concat([['PENNY', 0.01]]))
    }  
  }
  return find(0, []);
}

function getChange(arr) {
  // Essa função recebe o array com cada unidade do troco e devolve um objeto com os totais computados

  let change = {
    'ONE HUNDRED': 0,
    'TWENTY': 0,
    'TEN': 0,
    'FIVE': 0,
    'ONE': 0,
    'QUARTER': 0,
    'DIME': 0,
    'NICKEL': 0,
    'PENNY': 0
  }
  
  arr.forEach(item => change[item[0]] += item[1]);
  return change;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

