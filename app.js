const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");

const app = express();

const uploadPath = "E:\\helium\\";

app.set("view engine","ejs");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: uploadPath+"temp\\",
    debug : true
}));

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/upload",(req,res) => {
    res.render("uploadform");
});

app.post("/upload",(req,res) => {
    let file = req.files.f;

    file.mv(uploadPath+file.name, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).send("failed to move");
        }
        res.redirect("/upload");
    });

});

app.listen(3000,() => {
    console.log("server started at port 3000");

    if(!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath);
        fs.mkdirSync(uploadPath+"temp\\");
        console.log("directory created | path: "+uploadPath);
    }

    var os = require('os');
    var ifaces = os.networkInterfaces();
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;
      
        ifaces[ifname].forEach(function (iface) {
          if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
          }
      
          if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, iface.address);
          } else {
            // this interface has only one ipv4 adress
            console.log("\x1b[32m%s\x1b[0m","ip address: "+ifname+": "+iface.address);
          }
          ++alias;
        });
      });

});