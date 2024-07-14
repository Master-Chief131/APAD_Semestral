import React, { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';

function Dashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const data = await API.get('ReservationsAPI', '/reservations', {
          headers: { Authorization: user.signInUserSession.idToken.jwtToken },
        });
        setReservations(data);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.reservationId}>{reservation.details}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
