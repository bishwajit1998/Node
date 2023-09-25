const test = (req, res) => {
    let {name, phone} = req.body;
    res.send({name :"My name is"+ name, phone})
}

module.exports = test;