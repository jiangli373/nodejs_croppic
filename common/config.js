/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 14-3-5
 * Time: 下午9:55
 * To change this template use File | Settings | File Templates.
 */
var path = require('path');
var config={

    cropSize640X640:{width:640,height:640},
    cropSize640X466:{width:640,height:466},
    cropSize567X284:{width:567,height:284},
    cropSize567X417:{width:567,height:417},
    cropSize120X120:{width:120,height:120},
    cropSize226X402:{width:226,height:402},

    //server
    upload_dir: '/srv/www/static/upload/' ,

    domain:"http://cms.sf.com/static/",

    imIdentifyPath : "/usr/bin/identify",
    imConvertPath : "/usr/bin/convert"

};
module.exports = config;
module.exports.config = config;