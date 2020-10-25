const Pricing = require('../models/Pricing');
const spValidte = require('sp-validate')
const paypal = require('../utils/paypalConfig')
const firebase  = require('../utils/firebaseConfig');
const PriceModel = require('../models/Price')


module.exports = {
    async payment(req, res) {
       const {
        category,
        package,
        price,
        firstName,
        lastName,
        email,
        country,
        state,
        accountNumber,
        expireDate,
        cvc
       } = req.body;

       
       let errors = {}


       if(!spValidte.isEmail(email)) {
           errors.email = 'Is not valid email'
       }
       if(spValidte.isEmpty(email)) {
         errors.email = 'Try again please, email is empty'
       } 

      if(spValidte.isEmpty(package)) {
        errors.package = 'Try again please, packege is empty'
      } 
     
      if(spValidte.isLength(firstName, 3)) {
        errors.firstName = ' firstName is too short'
      } 
      if(spValidte.isEmpty(firstName)) {
        errors.firstName = 'Try again please, firstName is empty'
      } 
      
      
      if(spValidte.isLength(lastName, 3)) {
        errors.lastName = ' lastName is too short'
      }
      if(spValidte.isEmpty(lastName)) {
        errors.lastName = 'Try again please, lastName is empty'
      } 
       

      if(spValidte.isEmpty(country)) {
        errors.country = 'Try again please, country is empty'
      } 


      if(spValidte.isEmpty(state)) {
        errors.state = 'Try again please, state is empty'
      } 


      if(spValidte.isLength(accountNumber, 8)) {
        errors.accountNumber = ' accountNumber is too short'
      }
      if(spValidte.isEmpty(accountNumber)) {
        errors.accountNumber = 'Try again please, accountNumber is empty'
      } 

      if(spValidte.isEmpty(expireDate)) {
        errors.expireDate = 'Try again please, expireDate is empty'
      }

      if(spValidte.isLength(cvc, 3)) {
        errors.cvc = 'Try again please, CVC is empty'
      }
      if(spValidte.isEmpty(cvc)) {
        errors.cvc = 'Try again please, CVC is empty'
      }
        
       
       
       
       if(Object.keys(errors).length > 0 ) {
        return res.status(400).json(errors)
    }
   const findPackage = await PriceModel.find();
    findPackage.find(data => data.category === category )
    findPackage.find(data => data.package === package);

    let bundlePackage = []

       const findCategory = await PriceModel.find();
       findCategory.forEach(data => {
         if(data.category === category) {
           if(data.package === package)
        return bundlePackage.push({data})
         }
       });
       const bundle = bundlePackage[0].data;
       console.log(bundle)
       const payentDatas = {
        idPackage: bundle._id,
        category: bundle.category,
        package:  bundle.package,
        price:  bundle.price,
        firstName,
        lastName,
        email,
        country,
        state,
        accountNumber,
        expireDate,
        cvc
        }
    const pricing = new Pricing(payentDatas);
       
     await pricing.save(payentDatas)
      .then(async data => {
        firebase.FIRESTORE.collection('payment')
        .add({
          idPackage: data.idPackage,
        category:  data.category,
        package:  data.package,
        price:  data.price,
        firstName:  data.firstName,
        lastName:  data.lastName,
        email:  data.email,
        country:  data.country,
        state:  data.state,
        accountNumber:  data.accountNumber,
        expireDate:  data.expireDate,
        cvc:  data.cvc,
        createdAt: data.createdAt
        })
        
      
          return res.json(data)
      }).catch(err => {
          return res.json(err)
      })
   
     
    }
}

