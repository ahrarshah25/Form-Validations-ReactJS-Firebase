import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import SideBar from "../components/DashboardPage/SideBar/SideBar";
import ProfileEdit from "../components/ProfilePage/ProfileEdit";

const Profile = () => {
  return (
    <div className="flex min-h-screen">
        <title>Profile - Firebase Authentication</title>
      <SideBar />

      <div className="flex-1 md:ml-64">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Edit Profile
          </h1>

          <ProfileEdit />
        </main>
      </div>
    </div>
  );
};

export default Profile;
