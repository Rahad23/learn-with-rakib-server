const { resultsCollection } = require("../mongoDBConfig/collections")
const { createDoc } = require("../utils/mongoQueries")

const getResult = async (req, res) => {
    console.log(req.query);
    const { resultOf, courseId, moduleNo, studentUid, studentEmail } = req.query

    const result = await resultsCollection().findOne({
        resultOf,
        courseId,
        studentUid,
        moduleNo: Number(moduleNo),
        studentEmail
    })

    res.send(result || {})
}

const saveResult = async (req, res) => {
    const result = await createDoc(req, resultsCollection)

    res.send(result)
}

module.exports = {
    saveResult,
    getResult
}