const { Type } = require("../db");

function  getTypes (req, res) {
    let totalTypes = Type.findAll();
    return res.json(totalTypes);
}

module.exports =  getTypes
    
  
  