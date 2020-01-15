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


  router.post('/eligibility2/pension_age_partner_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let whereLive = req.session.data['where-do-you-live']
  
    if (whereLive === 'overseas') {
      res.redirect('/eligibility2/pension_age_overseas_over')
    } else {
      res.redirect('/eligibility2/pension_age_partner_over')
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



  router.post('/eligibility2/pension_age_country_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let dobyear = req.session.data['dob-year']
  
    if (dobyear <= '1954') {
      res.redirect('/eligibility2/pension_age_country_over')
    } else {
      res.redirect('/eligibility2/pension_age_country')
    }
  })

  router.post('/pension_age_answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let dobyear = req.session.data['dob-year']
  
    if (dobyear <= '1953') {
      res.redirect('/pension_age_sex')
    } 
    else if (dobyear === '1954') {
      res.redirect('/pension_age_answer_alt')
    }


    else if (dobyear <= '1960') {
      res.redirect('/pension_age_answer3')
    }

    else if (dobyear >='1988') {
      res.redirect('/pension_age_answer4')
    }
    else {
      res.redirect('/pension_age_answer')
    }
  })


  router.post('/eligibility3/pension_age_answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let dobyear = req.session.data['dob-year']
  
    if (dobyear <= '1953') {
      res.redirect('/eligibility3/pension_age_sex')
    } 
    else if (dobyear === '1954') {
      res.redirect('/eligibility3/pension_age_answer_alt')
    }


    else if (dobyear <= '1960') {
      res.redirect('/eligibility3/pension_age_answer3')
    }

    else if (dobyear >='1988') {
      res.redirect('/eligibility3/pension_age_answer4')
    }
    else {
      res.redirect('/eligibility3/pension_age_answer')
    }
  })


 

  // eligibility checker 4

  router.post('/eligibility4/pension_age_partner', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let whereLive = req.session.data['where-do-you-live']
  
    if (whereLive === 'overseas') {
      res.redirect('/eligibility4/pension_age_overseas')
    } else {
      res.redirect('/eligibility4/pension_age_partner')
    }
  })


  router.post('/eligibility4/pension_age_partner_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let whereLive = req.session.data['where-do-you-live']
  
    if (whereLive === 'overseas') {
      res.redirect('/eligibility4/pension_age_overseas_over')
    } else {
      res.redirect('/eligibility4/pension_age_partner_over')
    }
  })
  
  router.post('/eligibility4/pension_age_summary', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      let partner = req.session.data['partner']
    
      if (partner === 'partner-no') {
        res.redirect('/eligibility4/pension_age_summary_single')
      } else {
        res.redirect('/eligibility4/pension_age_summary')
      }
    })

    router.post('/eligibility4/pension_age_summary_over', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      let partner = req.session.data['partner']
    
      if (partner === 'partner-no') {
        res.redirect('/eligibility4/pension_age_wf_over')
      } 
      
      else if (partner === 'partner-live') {
        res.redirect('/eligibility4/pension_age_summary_single_over')
      }
      
      else {
        res.redirect('/eligibility4/pension_age_summary_over')
      }
    })



  router.post('/eligibility4/pension_age_country_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let dobyear = req.session.data['dob-year']
  
    if (dobyear <= '1954') {
      res.redirect('/eligibility4/pension_age_country_over')
    } else {
      res.redirect('/eligibility4/pension_age_country')
    }
  })


   // eligibility checker 5

   router.post('/eligibility5/pension_age_partner', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let whereLive = req.session.data['where-do-you-live']
  
    if (whereLive === 'overseas') {
      res.redirect('/eligibility5/pension_age_overseas')
    } else {
      res.redirect('/eligibility5/pension_age_partner')
    }
  })

  router.post('/eligibility5/pension_age_live', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let partner = req.session.data['partner']
    
    if (partner === 'partner-no') {
      res.redirect('/eligibility5/pension_age_wf')
    } else {
      res.redirect('/eligibility5/pension_age_live')
    }
  })

  router.post('/eligibility5/pension_age_partner_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let whereLive = req.session.data['where-do-you-live']
  
    if (whereLive === 'overseas') {
      res.redirect('/eligibility5/pension_age_overseas_over')
    } else {
      res.redirect('/eligibility5/pension_age_partner_over')
    }
  })
  
  router.post('/eligibility5/pension_age_summary', function (req, res) {
      // Get the answer from session data
      // The name between the quotes is the same as the 'name' attribute on the input elements
      // However in JavaScript we can't use hyphens in variable names
    
      let partner = req.session.data['partner']
    
      if (partner === 'partner-no') {
        res.redirect('/eligibility5/pension_age_summary_single')
      } else {
        res.redirect('/eligibility5/pension_age_summary')
      }
    })



  router.post('/eligibility5/pension_age_country_over', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let dobyear = req.session.data['dob-year']
  
    if (dobyear <= '1954') {
      res.redirect('/eligibility5/pension_age_spa_over')
    } else {
      res.redirect('/eligibility5/pension_age_spa_under')
    }
  })
  

  // address look up

  router.post('/address_look_up/complete', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    let address = req.session.data['address-confirmation']
  
    if (address === 'no') {
      res.redirect('/address_look_up/enter_address')
    } else {
      res.redirect('/address_look_up/complete')
    }
  })
  

// Add your routes here - above the module.exports line

module.exports = router