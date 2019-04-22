import React from 'react';
import { Link } from 'react-router-dom';

const itemListView = () => {
  return (
    <>
      <h1 className="text-center">My Requests</h1>

      <Link to="/createrequest-form" className="nav-link">
        <p>
          <button className="btn btn-success">Create New</button>
        </p>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Pickup Address</th>
            <th>Drop Off Address</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody />
      </table>
    </>
  );
};

export default itemListView;
