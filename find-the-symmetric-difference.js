function sym(...args) {
  let argum = [...args]

  function symDif(arrayOne,arrayTwo){
    let result = []
    arrayOne.forEach((item)=>{
     if( arrayTwo.indexOf(item) < 0 && result.indexOf(item)<0){
       result.push(item)
     }
    })
    arrayTwo.forEach((item)=>{
      if(arrayOne.indexOf(item)<0 && result.indexOf(item)<0){
        result.push(item)
      }
    })
    return result
  }
  
  return argum.reduce(symDif);
}

sym([1, 2, 3], [5, 2, 1, 4]);