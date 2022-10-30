const reservationsService = require("../services/reservationService");

function getReservations(req, res) {
  res.send(reservationsService.getAll());
}

function getReservation(req, res) {
  const reservation = reservationsService.getReservation(req.params.id);
  if (!reservation) res.status(404).send("reservation not found");

  res.send(reservation);
}

function updateReservation(req, res) {
  res.send(reservationsService.updateReservation(req.params.id, req.body));
}

function addReservation(req, res) {
  res.send(reservationsService.addReservation(req.body));
}
function deleteReservation(req, res) {
  res.send(reservationsService.deleteReservation(req.params.id));
}

module.exports = {
  getReservations,
  getReservation,
  updateReservation,
  addReservation,
  deleteReservation,
};
