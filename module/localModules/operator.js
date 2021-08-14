function penjumlahan (a,b){
  return a+b;
}

const pengurangan = (a,b) =>{
  return a-b;
}
const pembagian = (a,b) =>{
  return b/a;
}
const perkalian = (a,b) =>{
  return a*b;
}


//bisa make kayak gini
/*   module.exports.penjumlahan=penjumlahan
  module.exports.pengurangan=pengurangan */

//bisa make kayak gini
module.exports={penjumlahan:penjumlahan,pengurangan:pengurangan,pembagian,perkalian}
