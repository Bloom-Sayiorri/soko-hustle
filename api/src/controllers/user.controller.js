import User from ('../models/user.model.js');

const getAllUsers = async (res, req, next) => {
    try {
        const users = await User.findAll(req.params.user);
        if(res.ok) {return json(users);}
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await User.findOne(req.params.user);
        if (res.ok) {return json(user)}
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

export default { getAllUsers, getUser };