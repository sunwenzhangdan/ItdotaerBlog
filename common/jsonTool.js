/**
 * JsonTool
 */

var jsonTool = {
    object: function(err, data){
        return { errMsg: err, data: data ? data : '' };
    },
    data: function(err, data, total){
        return { errMsg: err, data: data ? data : '', total: total ? total : 0 };
    }
};

module.exports = jsonTool;
