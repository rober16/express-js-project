module.exports = function(req, res, next){
    return res.status(400).send({message: "Page not found!"});
};