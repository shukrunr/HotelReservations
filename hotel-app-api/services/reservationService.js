const reservations = [];

function getAll() {
  return reservations;
}

function getReservation(id) {
  return reservations.find(i => i.id === id);
}

function updateReservation(id, reserve) {
  const userIdx = reservations.findIndex(i => i.id === id);

  reservations[userIdx] = reserve;
  return reservations[userIdx];
}

function addReservation(reserve) {
  const newReserve = { ...reserve, id: Date.now().toString() };
  reservations.push(newReserve);
  return newReserve;
}

function deleteReservation(id) {
  const idx = reservations.findIndex(i => i.id === id);

  reservations.splice(idx, 1);
  return reservations;
}

module.exports = { getAll, getReservation, updateReservation, addReservation, deleteReservation };
