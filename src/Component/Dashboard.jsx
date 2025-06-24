import React, { useState, useEffect } from "react";

import {
  FaTachometerAlt,
  FaUser,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";

function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [email, setEmail] = useState("");



  useEffect(()=>{
    const storedEmail =  localStorage.getItem("email")
    setEmail(storedEmail)


  },[])


  {/* 
      const [apiData, setApiData] = useState(null);
    this is for api  
    {useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("accessToken");

    setEmail(storedEmail);

    if (
      storedEmail === "faizannasim59@gmail.com" &&
      storedToken
    ) {
      fetch("https://api.github.com/user/repos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          console.log("GitHub Data:", data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }
  }, []); */}

  

  const isOwner = email === "faizannasim59@gmail.com";

  const navItems = [
    { title: "Total Sales", value: "$120K", icon: <FaChartLine size={28} /> },
    { title: "Users", value: "3.2K", icon: <FaUser size={28} /> },
    { title: "Revenue", value: "$98K", icon: <FaTachometerAlt size={28} /> },
    { title: "Settings", value: "Configured", icon: <FaCog size={28} /> },
  ];

  return (
    <div className="flex">

      <aside className="min-h-screen w-64 bg-gradient-to-b from-indigo-900 to-purple-900 shadow-lg flex flex-col p-6">
        <h1 className="font-extrabold text-3xl text-pink-800 mb-8 tracking-wide">
          My DashBoard
        </h1>
        <nav className="flex flex-col gap-6 text-lg">
          <button
            onClick={() => setSelectedSection("dashboard")}
            className="flex items-center gap-4 hover:text-pink-400 text-white transition-colors"
          >
            <FaTachometerAlt size={22} /> Dashboard
          </button>
          <button
            onClick={() => setSelectedSection("profile")}
            className="flex items-center gap-4 hover:text-pink-400 text-white transition-colors"
          >
            <FaUser size={22} /> Profile
          </button>
          <button
            onClick={() => setSelectedSection("analytics")}
            className="flex items-center gap-4 hover:text-pink-400 text-white transition-colors"
          >
            <FaChartLine size={22} /> Analytics
          </button>
          <button
            onClick={() => setSelectedSection("settings")}
            className="flex items-center gap-4 hover:text-pink-400 text-white transition-colors"
          >
            <FaCog size={22} /> Settings
          </button>
        </nav>
        <div className="mt-auto pt-10 border-t border-purple-700">
          <button
            className="flex items-center gap-3 text-pink-500 hover:text-pink-400 transition-colors cursor-pointer"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            <FaSignOutAlt size={22} /> Logout
          </button>
        </div>
      </aside>

      
      <main className="flex-1 p-10 bg-gradient-to-tr from-pink-800 via-indigo-900 to-pink-900 overflow-auto">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-pink-400 drop-shadow-lg">
            Welcome, {email || "User"}!
          </h2>
          <button className="relative bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold animate-pulse"></span>
          </button>
        </header>

        {/* Dashboard mapppp */}
        {selectedSection === "dashboard" && (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {navItems.map(({ title, value, icon }, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 rounded-xl p-6 shadow-xl transform hover:scale-105 transition-transform cursor-pointer text-white"
                >
                  <div className="flex items-center gap-4 mb-4">{icon}</div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-3xl font-bold mt-1">{value}</p>
                </div>
              ))}
            </section>
            <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-xl p-6 shadow-2xl h-96 flex flex-col justify-center items-center text-pink-200 text-2xl font-semibold select-none">
              ⚙️ DashBoard Overview
            </section>
          </>
        )}

        {/* Profile  logiccccc*/}
        {selectedSection === "profile" && (
          <section className="bg-purple-900 text-white rounded-xl p-10 text-2xl font-bold shadow-2xl text-center">
            {isOwner ? (
              <div>
                👤 <p>Name: Faizan Nasim</p>
                <p>Email: {email}</p>
                <p>Role: Admin</p>
              </div>
            ) : (
              <p className="text-pink-300">Welcome! Excited to have you on board</p>
            )}
          </section>
        )}

       
        {selectedSection === "analytics" && (
          <section className="bg-indigo-800 text-white rounded-xl p-10 text-2xl font-bold shadow-2xl text-center">
            {isOwner ? (
              <div>
                📊 <p>Sales: 120K</p>
                <p>Users: 3.2K</p>
                <p>Revenue: 98K</p>
                
              </div>
            ) : (
              <p className="text-pink-300">
                No analytics available for this account.
              </p>
            )}
          </section>
        )}

        
        {selectedSection === "settings" && (
          <section className="bg-pink-800 text-white rounded-xl p-10 text-2xl font-bold shadow-2xl text-center">
            ⚙️ Settings Section
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
