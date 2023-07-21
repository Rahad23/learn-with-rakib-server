const { taskListCollections, plannerImagesCollections } = require("../mongoDBConfig/collections")
const { createDoc, updateDoc } = require("../utils/mongoQueries")

const getTaskImages = async (req, res) => {
    const result = await plannerImagesCollections().find({
        email: req.params.email
    }).toArray();
    res.send(result)
}

const saveTaskImages = async (req, res) => {
    const result = await createDoc(req, plannerImagesCollections)
    res.send(result)
}

const getTaskList = async (req, res) => {
    const result = await taskListCollections().find({
        email: req.params.email
    }).toArray();
    res.send(result)
}

const saveTaskList = async (req, res) => {
    const findQuery = await taskListCollections().findOne({ email: req.body.email });

    if (findQuery) {
        const result = await taskListCollections().updateOne(
            {
                _id: findQuery._id
            },
            {
                $push: { [Object.keys(req.body)[0]]: Object.values(req.body)[0][0] }
            }
        )
        res.send(result);
        return
    }

    const result = await createDoc(req, taskListCollections);
    res.send(result)
}

const updateTaskList = async (req, res) => {
    const result = await updateDoc(req, taskListCollections)

    res.send(result)
}

const deleteTaskList = async (req, res) => {
    const result = await taskListCollections().deleteMany({
        email: req.params.email
    })
    const result2 = await plannerImagesCollections().deleteMany({
        email: req.params.email
    })
    res.send(result)
}

module.exports = {
    getTaskImages,
    saveTaskImages,
    getTaskList,
    saveTaskList,
    updateTaskList,
    deleteTaskList,
}