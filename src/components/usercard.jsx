import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "Shivam Jani";
  const email = "shivam21@example.com";
  const phone = "+1 234 567 890";
  const address = "123, chava road , pune , India";

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>
      <p className="text-gray-600 text-sm">{phone}</p>
      <p className="text-gray-600 text-sm mt-2">{address}</p>
    </div>
  );
};

export default Usercard;
