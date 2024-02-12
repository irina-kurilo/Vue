export const validateName=function(rule, value, callback){
    if (value){
        if(value.length>3){
            return callback("Name should be shorter then 50 symbols")
        }
        return callback()
    }
    return callback("Please input name")
}

export const capitalize = function(value){
    return value[0].toUpperCase()+value.slice(1)
}