import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const UserProfileUpdate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`http://172.19.5.234:1120/api/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          telephone,
          email,
          mobile,
        }),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        throw new Error('Error updating profile');

      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }

  };

  return (
    <div>
      <h2>User Profile Update</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telephone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfileUpdate;