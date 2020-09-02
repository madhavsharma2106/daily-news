#!/usr/bin/env node

const open = require("open");

const techNews = require("./tech");
const domesticNews = require("./domesticNews");
const internationalNews = require("./internationalNews");

techNews.forEach((site) => open(site));
domesticNews.forEach((site) => open(site));
internationalNews.forEach((site) => open(site));
