const router = require('express').Router();
const { User } = require('../../models'); // referencing the user model
const withAuth = require("../../utils/auth");

