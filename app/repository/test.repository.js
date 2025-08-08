const db = require("../model");
const Test = db.tests;
const Op = db.Sequelize.Op;

const create = async (test) => {
    return await Test.create(test);
};

const findAll = async (title) => {
    const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    return await Test.findAll({ where: condition });
};

const findByPk = async (id) => {
    return await Test.findByPk(id);
};

const update = async (test, id) => {
    return await Test.update(test, {
        where: { id: id }
    });
};

const deleteById = async (id) => {
    return await Test.destroy({
        where: { id: id }
    });
};

const deleteAll = async () => {
    return await Test.destroy({
        where: {},
        truncate: false
    });
};

const findAllPublished = async () => {
    return await Test.findAll({ where: { published: true } });
};

module.exports = {
    create,
    findAll,
    findByPk,
    update,
    deleteById,
    deleteAll,
    findAllPublished
};
