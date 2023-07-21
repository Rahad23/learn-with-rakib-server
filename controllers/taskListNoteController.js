const { addNoteTaskCollections } = require("../mongoDBConfig/collections")
const { readDoc, createDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQueries")

const getAddNoteTask = async (req, res) => {
    // console.log(req.params.email);
    // return;
    const reviews = await addNoteTaskCollections().findOne({
        email: req.params.email
    })
    res.send(reviews || {})
}

const saveAddNoteTask = async (req, res) => {
    console.log(req.body);
    const result = await createDoc(req, addNoteTaskCollections)

    res.send(result)
}

const updateAddNoteTask = async (req, res) => {
    const { email, userId, note } = req.body
    const result = await addNoteTaskCollections().updateOne({ email, userId }, { $set: { note } }, { upsert: true })

    res.send(result)
}

const deleteAddNoteTask = async (req, res) => {
    const result = await deleteDoc(req, addNoteTaskCollections)

    res.send(result)
}


module.exports = {
    getAddNoteTask,
    saveAddNoteTask,
    updateAddNoteTask,
    deleteAddNoteTask,
}