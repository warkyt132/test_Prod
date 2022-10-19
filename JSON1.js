function prinArr(message,mask){
    

    trueFilter(message,mask);

    
        async function trueFilter(message, mask)  {
            if (typeof (mask) != "object") return message;
        
            for (let key in message) {
                if (typeof (mask[key]) == "object") {
                    if (Array.isArray(mask[key])) {
                        if (Array.isArray(message[key])) {
                            for (elem of message[key]) {
                                trueFilter(elem, mask[key][0]);
                            }
                        }
                    }
                    else {
                        trueFilter(message[key], mask[key]);
                    }
                }
                else if (mask[key] != true) {
                    delete message[key]
                }
            }
            return message;
        }
    
 
 // console.log("pol "+ pol)
  // console.log(JSON.stringify(pol))
    return message ;

//return per;
}
module.exports  = prinArr


