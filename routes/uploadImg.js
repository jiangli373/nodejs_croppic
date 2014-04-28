
var config = require('../common/config').config;
var fs = require('fs');
var im = require('imagemagick');
im.identify.path = config.imIdentifyPath;
im.convert.path = config.imConvertPath;

exports.uploadImg = function(req, res){
        var img = req.files;
    console.log('---------inmg----------',img);
        im.identify(img.img.path, function(err, output){
            if (err) throw err;
            var  pp = img.img.path;
            var ee =  pp.replace('/\\/','/\/').split('\\');
            var size = ee.length-1;
            var pps = ee[size];
            var json = {};
            json.status = "success";
            json.url = config.domain+pps;
            json.width = output.width;
            json.height = output.height;
            json.imgId = pps;
            res.json(json);

            // dimension: 3904x2622
        });

};

exports.cropImg = function(req,res){

    var body = req.body;
    var imgId = body.imgId;
    var cropW = body.cropW;
    var cropH = body.cropH;
    var imgX1 = body.imgX1;
    var imgY1 = body.imgY1;
    var params =  cropW+"x"+cropH+"+"+imgX1+"+"+imgY1;
    console.log('====params======',params);
    var newName =  Math.random()+".png";
    var args = [ config.upload_dir+imgId, "-crop", params,config.upload_dir+newName];
    im.convert(args, function(err) {
        if(err) {
            throw err;
        }
            var json = {
                "status":"success",
                "url":config.domain+newName
            }
            console.log('==========',json);
            res.json(json);
        }
    );
}