var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Freehand' });
});
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});
router.get('/pages', function(req, res, next) {
  res.render('pages', { title: 'Pages' });
});
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio', user: 'Alex Irreligious' });
});
router.get('/log-out', function(req, res, next) {
  res.render('log-out', { title: 'Log out' });
});
router.get('/sign-in', function(req, res, next) {
  res.render('sign-in', { title: 'Sign in' });
});
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Sign up' });
});

router.get('/view-projects', function(req, res, next) {
  res.render('view-projects', { title: 'View projects' });
});
router.get('/learn-more', function(req, res, next) {
  res.render('learn-more', { title: 'Learn more' });
});
router.get('/get-started', function(req, res, next) {
  res.render('get-started', { title: 'Get started' });
});
router.get('/try-it', function(req, res, next) {
  res.render('try-it', { title: 'Try it' });
});
router.get('/watch-demo', function(req, res, next) {
  res.render('watch-demo', { title: 'Watch demo' });
});
// router.get('/blog', function(req, res, next) {
//   res.render('blog', { title: 'Blog' });
// });
// router.get('/blog', function(req, res, next) {
//   res.render('blog', { title: 'Blog' });
// });

module.exports = router;
