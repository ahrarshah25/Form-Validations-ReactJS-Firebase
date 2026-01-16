import React from 'react'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import Welcome from '../components/DashboardPage/Hero/Welcome'
import ProfileImage from '../components/DashboardPage/Hero/ProfileImage'

const Dashboard = () => {
  return (
    <div>
        <title>Dashboard</title>
        <Navbar />
        <section className="w-full bg-gradient-to-r from-blue-50 to-white px-4 py-12 sm:py-16">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg border border-blue-100">
            <Welcome />
            <div className="flex items-center justify-end">
              <ProfileImage />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Dashboard