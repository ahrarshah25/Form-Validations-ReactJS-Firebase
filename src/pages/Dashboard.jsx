import React, { useEffect, useState } from "react";
import Hero from "../components/DashboardPage/Hero/Hero";
import SideBar from "../components/DashboardPage/SideBar/SideBar";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      <title>{userName && `${userName}'s Dashboard`}</title>

      <SideBar />

      <main className="flex-1 md:ml-64">
        <Hero />
      </main>
    </div>
  );
};

export default Dashboard;
