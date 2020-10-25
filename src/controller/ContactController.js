const Contact = require('../models/ContactForm');
const spValidte = require('sp-validate');




module.exports = {
    async store(req, res) {
        
      const {
            firstName,
            lastName,
            phone,
            email,
            cityName,
            subject,
            message
        } = req.body;

        let errors = {}

            if(spValidte.isLength(firstName, 3)) {
                errors.firstName = 'firstName is too short'
            }
            if(spValidte.isEmpty(firstName)) {
                errors.firstName = 'Try again please, firstName is empty'
            }

            if(spValidte.isLength(lastName, 3)) {
                errors.lastName = 'laststName is too short'
            }
            if(spValidte.isEmpty(lastName)) {
                errors.lastName = 'Try again please, lastName is empty'
            }

            if(spValidte.isPhone(phone)) {
                errors.phone = 'Try again please, phone is not valid'
            }
            if(spValidte.isEmpty(phone)) {
                errors.phone = 'Try again please, phone is empty'
            }

            if(!spValidte.isEmail(email)) {
                errors.email = 'Try again please, email is not valid'
            }
            if(spValidte.isEmpty(email)) {
                errors.email = 'Try again please, email is empty'
            }

            if(spValidte.isEmpty(cityName)) {
                errors.cityName = 'Try again please, cityName is empty'
            }

            if(spValidte.isEmpty(subject)) {
                errors.subject = 'Try again please, subject is empty'
            }

            if(spValidte.isEmpty(message)) {
                errors.message = 'Try again please, message is empty'
            }

           if(Object.keys(errors).length > 0 ) {
            return res.status(400).json(errors)
        }

        const NewContact = new Contact({
            firstName,
            lastName,
            phone,
            email,
            cityName,
            subject,
            message 
        });

        await NewContact.save().then(() => {
            return res.json({succes: 'Your message has send successfuly'})
        }).catch(error => {
            return res.json(error)
        })
       
        
        
    }
}