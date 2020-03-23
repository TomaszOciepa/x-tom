import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCodeEncryptService {

  constructor() { }
  



  encryptCode(id:number) {
    console.log("szyfrujemy!!!! :)")
  var idStr:string = ""+id
  // console.log("idStr: "+idStr)

  var idLength = idStr.length
  // console.log("idLength: "+idLength)
  
  var secretNumberIndex:number = 4
  let tableLength = 35
  let table = []
    
    for(var i = 0; i < tableLength; i++ ){

      if(i == secretNumberIndex){
        table.push(idLength)
        table.push((Math.floor((Math.random()* 9) +1)))

        for(var j = 0; j < idLength; j++){
            table.push(+idStr[j])
            // console.log("pus id: "+idStr[j])
        }

       }

      
      table.push(Math.floor((Math.random()* 9) +1))
    }

    // console.log("tab: "+table)
    // console.log("tab length: "+table.length)
    
    var code:String = ""
    
    for(var i = 0; i < table.length; i++){
        code += ""+table[i]
    }

    // console.log("code: "+code)
    // console.log("code length: "+code.length)
    return code
  }

  decryptCode(code:String){
    console.log("deszyfrujemy!!!! :)")
    
    var codDez:String = code
    // console.log("codDez: "+codDez)
    // console.log("codDez length: "+codDez.length)
    var tabdez= []

    for(var i = 0; i < codDez.length; i++){

        tabdez.push(+codDez[i])

    }

    // console.log("tabdez: "+tabdez)
    // console.log("tabdez length: "+tabdez.length)

    var secretNumber:number = tabdez[4] 

    // console.log("secretNumber: "+secretNumber)

    var idStrDez:string = ''

    for(var i = 6; i <= 6+secretNumber-1; i++){

      idStrDez += ''+tabdez[i]
    }

    // console.log("idStrDez: "+idStrDez)

    return +idStrDez;
  }

}
