const { responseModel } = require('../models/response');
const { IsIdPresent } = require('../validators/user');
const UserTable = require('../models/user')

// Temp code
let users = [
    {
        id: 1,
        name: 'MD RAIHAN MAHAMUD',
        age: 28,
        roles: ['super_admin', 'app_user'],
        address: {
            postcode: '1201',
            contract: '+8801771442552'
        }
    },
    {
        id: 2,
        name: 'DHAMAN SHARKAR',
        age: 25,
        roles: ['admin', 'app_user'],
        address: {
            postcode: '1205',
            contract: '+8801771111111'
        }
    }
];


exports.getUsers = async (req, res) => {
    responseModel(res, await UserTable.find(), null)
}






exports.getUserById = (req, res) => {
    if (IsIdPresent(req.params)) {
        let user = users.find(u => u.id == req.params.id);
        responseModel(res, [user], null);
    }
    else {
        responseModel(res, null, 'Id not Present')
    }
}

exports.getUserByName = (req, res) => {
    let user = users.find(u => u.name == req.body.name);
    res.send(user);
}

exports.createUser = async (req, res) => {
    // users.push(req.body);

    //Create User in DB
    const user = new UserTable(req.body);
    await user.save();
    res.send('user created');
}

exports.updateUser = (req, res) => {
    console.log(req.params)
    const _id = req.params.id;
    users.find(user => {
        if (user.id == _id) {
            user.roles.push(req.body.role);
        }
    })
    res.send('user updated');
}

exports.deleteUser = (req, res) => {
    const _id = req.params.id;
    users = users.filter(u => u.id != _id);
    res.send('user deleted');
}