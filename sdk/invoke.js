let multichain = require("multichain-node")({
    port: 4392,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "6omkfMjC7wMdzHzyrSa2gsxJdNinTrTibZGAvKpP9iaD"        
});



module.exports = {
    addData: addData
}


function addData(params) {

    return new Promise((resolve) => {
        var response;
        var key = params.result.rollNo;
        var value1 = params.result.score;
        var value = value1.toString();
        console.log("value--->",value)
        var hex = '';
        for(var i=0;i<value.length;i++) {
            hex += ''+value.charCodeAt(i).toString(16);
        }
        console.log("hex",hex);
        multichain.publish({ stream: "result", key: key, data: hex }, (err, res) => {
           console.log("response----->",res)
            if (err == null) {

                return resolve({
                    response: res
                });
            } else {
                console.log(err)
            }
        })

    })
}