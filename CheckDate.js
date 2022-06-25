const { json } = require("express");

const checkDate = (req, res, next) => {
  const currentDate = new Date().getDay();

  //days between 1 and 5 are work days
  if (currentDate >= 1 && currentDate < 4) next();
  else {
    res.status(401).json({ msg: "working only on week days not the weekend" });
  }
};

module.exports = {
  checkDate,
};