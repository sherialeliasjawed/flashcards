const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const name = req.cookies.username;
  if (!name) {
    return res.redirect('/hello');
  }
  res.render('index', { name });
});

router.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (name) return res.redirect('/');
  res.render('hello');
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  return res.redirect('/hello');
});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  return res.redirect('/');
});

module.exports = router;
