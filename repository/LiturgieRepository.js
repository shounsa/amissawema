const { prisma } = require("../utils/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
const axios = require("axios");
const FormData = require("form-data");

function createLiturgie(liturgie) {
    return prisma.Liturgie.create({
        data: liturgie
    });
}
function getLiturgie(liturgie) {
    return prisma.Liturgie.findMany({

    });
}
module.exports = {
   createLiturgie,
    getLiturgie
};