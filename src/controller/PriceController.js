const PriceModel = require('../models/Price');
const spValidators = require('sp-validate');

module.exports = {
    async createPriceTable(req, res) {
          const { category, package, price } = req.body;

          const newPrice = new PriceModel({
            category, package, price
          });

         await newPrice.save()
         return res.json(newPrice)
    },

    async getPriceTable(_, res) {
        const priceTable = await PriceModel.find();

        return res.json(priceTable)
    },



    async getPriceTableParams(req, res) {
        const { param } = req.params;
        console.log(param)
        await PriceModel.find().then(data => {

            let datas = [];
            data.forEach(data => {
                if(data.category === param) {
                   
                    return datas.push(data)
                }


                if(data.package === param) {
                    return datas.push(data)
                }
              
               
            })

            return res.json(datas)
        
            
        }).catch(err => {
            return res.json(err)
        })
       
    },

    async updatePriceTable(req, res) {
        const { category, package, price } = req.body;
        const { id } = req.params;
        const priceTable = await PriceModel.findById(id)
        .updateOne({
            category, package, price
        });

        return res.json(priceTable)
    },

    async deletePriceTable(req, res) {
        const { id } = req.params;
       const table = await PriceModel.findById(id)
        .deleteOne();

        return res.json(table)
    }


}


