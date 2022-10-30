const express = require("express");
const {
  getReservations,
  getReservation,
  updateReservation,
  addReservation,
  deleteReservation,
} = require("../controllers/api");

const router = express.Router();

router.get("/", getReservations);
router.get("/:id", getReservation);
router.put("/:id", updateReservation);
router.post("/", addReservation);
router.delete("/:id", deleteReservation);

module.exports = router;
