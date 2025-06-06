"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use('/auth', require('./auth'));
// user:
router.use('/users', require('./user'));
// token:/
router.use('/tokens', require('./token'));

// blog:
router.use('/blogs', require('./blog'));
// category:
router.use('/categories', require('./category'));

// comment:
router.use('/comments', require('./comment'));

/* ------------------------------------------------------- */
module.exports = router;