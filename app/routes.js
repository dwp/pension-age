const express = require('express')
const router = express.Router()



// Branching
router.post('/eligibility/pension_age_england', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let whereLive = req.session.data['where-do-you-live']

  if (whereLive === 'overseas') {
    res.redirect('/eligibility/pension_age_overseas')
  } else {
    res.redirect('/eligibility/pension_age_england')
  }
})

router.post('/eligibility/pension_age_couple', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let partner = req.session.data['partner']
  
    if (partner === 'partner-no') {
      res.redirect('/eligibility/pension_age_single')
    } else {
      res.redirect('/eligibility/pension_age_couple')
    }
  })

  router.post('/step-by-step-navigation_test', function (req, res) {

    var years = req.body.years
    var age = req.body.age;
    var month = req.body.month;
    console.log(years);
    console.log(age);
    console.log(month);
    res.render('step-by-step-navigation_test', {age: age, years: years, month: month,}) 
  });

  router.post('/eligibility2/pension_age_partner', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let whereLive = req.session.data['where-do-you-live']
  
    if (whereLive === 'overseas') {
      res.redirect('/eligibility2/pension_age_overseas')
    } else {
      res.redirect('/eligibility2/pension_age_partner')
    }
  })
  
  router.post('/eligibility2/pension_age_summary', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      let partner = req.session.data['partner']
    
      if (partner === 'partner-no') {
        res.redirect('/eligibility2/pension_age_summary_single')
      } else {
        res.redirect('/eligibility2/pension_age_summary')
      }
    })


  router.post('/eligibility2/pension_age_answer_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let dobyear = req.session.data['dob-year']
  
    if (dobyear === '1950') {
      res.redirect('/eligibility2/pension_age_answer_over')
    } else {
      res.redirect('/eligibility2/pension_age_country')
    }
  })

  
  
  

// Add your routes here - above the module.exports line

module.exports = router