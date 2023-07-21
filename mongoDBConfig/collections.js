const { client } = require("./mongoClient")

const adminsCollection = () => client().db("learnpro").collection("admins")
const usersCollection = () => client().db("learnpro").collection("users")
const coursesCollection = () => client().db("learnpro").collection("courses")
const reviewsCollection = () => client().db("learnpro").collection("reviews")
const ImportantLinkCollection = () => client().db("learnpro").collection("importantLink");
const cuponCollection = () => client().db("learnpro").collection("coupons");
const taskListCollections = () => client().db("learnpro").collection("myPlanerTaskList");
const plannerImagesCollections = () => client().db("learnpro").collection("plannerImages");
const addNoteTaskCollections = () => client().db("learnpro").collection("addNoteTask");
// const couponsCollection = () => client().db("learnpro").collection("coupons")
const couponsCollection = () => client().db("learnpro").collection("coupons")
const modulesCollection = () => client().db("learnpro").collection("modules")
const contentsCollection = () => client().db("learnpro").collection("contents")
const faqsCollection = () => client().db("learnpro").collection("faqs")
const workshopsCollection = () => client().db("learnpro").collection("workshops")
const workshopModulesCollection = () => client().db("learnpro").collection("workshopModules")
const resoursesCollection = () => client().db("learnpro").collection("resources")
const resoursesDownLimitCollection = () => client().db("learnpro").collection("resourcesDownload")
const courseCompletedCollection = () => client().db("learnpro").collection("courseCompleted")
const resultsCollection = () => client().db("learnpro").collection("results")

module.exports = {
    adminsCollection,
    usersCollection,
    coursesCollection,
    reviewsCollection,
    ImportantLinkCollection,
    cuponCollection,
    taskListCollections,
    addNoteTaskCollections,
    couponsCollection,
    modulesCollection,
    contentsCollection,
    faqsCollection,
    workshopsCollection,
    workshopModulesCollection,
    resoursesCollection,
    resoursesDownLimitCollection,
    courseCompletedCollection,
    resultsCollection,
    plannerImagesCollections,
}