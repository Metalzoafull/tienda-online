const userModel = require('../models').user
const encry = require('../libs/pass')
const jwt = require('jsonwebtoken');
const config = require('../config/configDef');

const controller = {}

controller.post = async (req, res) => {
    const user = await userModel.create(req.body)
    const pass = await user.password

    user.password = await encry.encryptPassword(pass);

    await user.save();

    // Create a Token
    const token = jwt.sign({ id: user.id }, config.secret, {
        //expiresIn: 60 * 60 * 24, // expires in 24 hours
        expiresIn: 60 * 15
      });

    res.json(token)
}

controller.get = async (req, res) => {
    const user = await userModel.findAll();
    const contra = await encry.encryptPassword(user[0].password);


    res.json(contra)
}

controller.singIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModel.findAll({
        where: {email: email}
    }).catch(() => res
        .status(500)
        .send({email: false, message: "Email invalid."}));

    //res.json(await encry.matchPassword(password, user[0].password))
    
    const result = await encry.matchPassword(password, user[0].password);
    //console.log(result)
    if (!result){
        return res
            .status(404)
            .send("password no valid."); 
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
        //expiresIn: 60 * 60 * 24, // expires in 24 hours
        expiresIn: 60 * 15
    });
    res.json(token);


}

module.exports = controller;