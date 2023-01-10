const adminModel = require("../models/users-admin");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

try {
  route.post("/login", (req, res) => {
    console.log("inside the login route", req.body);

    adminModel.findOne(
      { email: req.body.email, isAdmin: true },
      (err, data) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else if (data) {
          console.log("admin email  is matching");
          console.log("data", data);
          if(req.body.password === data.password){
            let payload = { subject: data.email + data.password };
                let token = jwt.sign(payload, "secretKey");
                res.json({
                  message: "password matching",
                  status: "success",
                  id: data._id,
                  tok: token,
                });
          }
          else{
              res.send({message:"invalid password"})
          }
        }
        else{
          res.send({message:"email not matching"})
        }
      });
    });
} catch (err) {
  console.log(err);
}

module.exports = route;