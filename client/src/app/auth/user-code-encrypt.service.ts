import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCodeEncryptService {

  constructor() { }
  
  encryptCode(id:number) {
  var idStr:string = ""+id
  var idLength = idStr.length
  var secretNumberIndex:number = 4
  let tableLength = 35
  let table = []
  var code:String = ""

    for(var i = 0; i < tableLength; i++ ){

      if(i == secretNumberIndex){
        table.push(idLength)
        table.push((Math.floor((Math.random()* 9) +1)))
        for(var j = 0; j < idLength; j++){
            table.push(+idStr[j])
        }
       }
      table.push(Math.floor((Math.random()* 9) +1))
    }

    for(var i = 0; i < table.length; i++){
        code += ""+table[i]
    }

    return code
  }

  decryptCode(code:String){    
    var codDez:String = code
    var tabdez= []

    for(var i = 0; i < codDez.length; i++){
        tabdez.push(+codDez[i])
    }

    var secretNumber:number = tabdez[4] 
    var idStrDez:string = ''

    for(var i = 6; i <= 6+secretNumber-1; i++){
      idStrDez += ''+tabdez[i]
    }

    return +idStrDez;
  }

}
