const { verify } = require("jsonwebtoken");
const express = require("express");

module.exports = {
    checkToken: (req, res, next) => {
        let jwtToken = req.get("authorization");

        if (jwtToken) {
            jwtToken = jwtToken.slice(7);
            verify(jwtToken, "key", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    next();
                }
            });
        } else {
            res.json({
                success: 0,
                messgae: "Access denied! Unauthorized user!"
            })
        };
    }
};