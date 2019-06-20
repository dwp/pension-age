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
  

// Add your routes here - above the module.exports line

module.exports = router