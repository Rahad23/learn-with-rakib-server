const { saveWorkshop, saveWorkshopModule, workshopPaymentSuccess, workshopPaymentFailure, workshopPaymentCancel, workshopPaymentIpn, makeWorkshopPayment, getAllWorkshop, getAWorkshops, getWorkshopContent, updateWorkshops, completeWorkshop } = require("../controllers/workshopController")

const workshopRouter = require("express").Router()


// save a workshop
workshopRouter.post("/", saveWorkshop)

// save workshop module
workshopRouter.post("/module", saveWorkshopModule)

// workshop payment
workshopRouter.post("/payment/success", workshopPaymentSuccess)

// workshop payment
workshopRouter.post("/payment/failure", workshopPaymentFailure)

// workshop payment
workshopRouter.post("/payment/cancel", workshopPaymentCancel)

// workshop payment
workshopRouter.post("/payment/ipn", workshopPaymentIpn)

// workshop payment
workshopRouter.post("/:id", updateWorkshops)

// workshop payment
workshopRouter.get("/payment", makeWorkshopPayment)

workshopRouter.get("/complete", completeWorkshop)

workshopRouter.get("/", getAllWorkshop)

workshopRouter.get("/name/:id", getWorkshopContent)

workshopRouter.get("/:id", getAWorkshops)





module.exports = workshopRouter