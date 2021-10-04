const { request } = require("http")

require("http").createServer((inRequest, inResponse)=>{
    const requestModule = require("request");
    requestModule(
        "http://worldtimeapi.org/api/timezone/America/New_York",
        function(inErr, inResp, inBody){
            inResponse.end(
                `Hello from my first Node web server: ${inBody}`
            )
        }
    );
}).listen(80)