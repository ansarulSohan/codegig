const router = require('express').Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', async (req, res) => {
  let gigs = await Gig.findAll();
  res.render('gigs', {
    gigs: gigs,
  });
});

router.get('/add', async (req, res) => {
  res.render('add');
});

//  Add a gig
router.post('/add', async (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body;
  console.log(req.body);
  let gig = await Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email,
  });
  return res.status(200).send(gig);
});

module.exports = router;
