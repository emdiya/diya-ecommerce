const testRepository = require("../repository/test.repository");

const create = async (test) => {
    return await testRepository.create(test);
};

const findAll = async (title) => {
    return await testRepository.findAll(title);
};

const findOne = async (id) => {
    return await testRepository.findByPk(id);
};

const update = async (test, id) => {
    return await testRepository.update(test, id);
};

const deleteById = async (id) => {
    return await testRepository.deleteById(id);
};

const deleteAll = async () => {
    return await testRepository.deleteAll();
};

const findAllPublished = async () => {
    return await testRepository.findAllPublished();
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    deleteById,
    deleteAll,
    findAllPublished
};
