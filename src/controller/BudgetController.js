const BudgetDetails = require('../models/Badget');


module.exports = {
    async store(req, res) {
       const {
        firstName,
        lastName,
        phone,
        email,
        cityName,
        companyName,
        businessNiche,
        serviceRequired,
        description,
       } = req.body;
           if(
            !firstName || 
            !lastName || 
            !phone || 
            !email || 
            !cityName ||
            !companyName ||  
            !businessNiche || 
            !serviceRequired ||
            !description
           ) {
            return res.json({error: 'please enter valid value'}); 
           }  

           if(description.length < 100) {
            return res.json({error: 'the description must contain 100 characters or more.'});
           }
       const newBudget = new BudgetDetails({
        firstName,
        lastName,
        phone,
        email,
        cityName,
        companyName,
        businessNiche,
        serviceRequired,
        description,
       });

       const result = await newBudget.save().then(() => {
           return res.json({success: 'Your budget require, has been submited successfully'})
       })

       return res.json(result);
    }
}