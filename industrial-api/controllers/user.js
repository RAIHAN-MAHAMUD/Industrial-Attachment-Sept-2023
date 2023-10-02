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


exports.getUsers = (req, res) => { res.send(users) }
exports.getUserById = (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    res.send(user);
}
exports.getUserByName = (req, res) => {
    let user = users.find(u => u.name == req.body.name);
    res.send(user);
}

exports.createUser = (req, res) => {
    users.push(req.body);
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