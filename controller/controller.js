const model = require('../model/model')
exports.getHome = (req,res)=>{
    res.render('home',{products : model.products})
}
exports.getProductDetail = (req,res)=>{
    ID = req.params.productId
    productObject = model.products.find((v)=> {
        if(v.productId==ID) return true
    })
    res.render('details', {products : productObject})
}
