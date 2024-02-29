import React from "react";

const Profile = () => {
  return (
    <div className="profile-wrapper flex gap-2 items-center flex-col pt-5 pb-10">
      <div className="profile-picture w-[100px] h-[100px] object-cover">
        <img className="rounded-full w-full h-full object-cover" src="https://i.stack.imgur.com/l60Hf.png" alt="profile"></img>
      </div>
      <div className="profile-info flex flex-col justify-between items-center">
        <h1 className="profile-name text-lg font-semibold">John Doe</h1>
        <h2 className="profile-title text-sm text-blue-400">System Admin</h2>
      </div>
    </div>
  );
};

export default Profile;
