import React from 'react'

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-10">
        About <span className="text-orange-500">Me</span>
      </h1>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-xl p-8 text-center mb-12">
        <p className="text-lg text-gray-700">
          Hello! I'm <span className="font-semibold text-orange-500">Komethagan T</span>,
          a passionate web developer currently pursuing 
          <span className="font-semibold"> B.Sc Computer Science</span>.  
          I enjoy building modern, responsive, and user-friendly web applications.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-14">
        <h2 className="text-3xl font-semibold text-center mb-8">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          <div className="p-6 bg-gradient-to-r bg-orange-400 text-white rounded-lg text-center hover:scale-105 transition">
            HTML
          </div>

          <div className="p-6 bg-gradient-to-r bg-orange-400  text-white rounded-lg text-center hover:scale-105 transition">
            CSS
          </div>

          <div className="p-6 bg-gradient-to-r bg-orange-400 text-white rounded-lg text-center hover:scale-105 transition">
            JavaScript
          </div>

          <div className="p-6 bg-gradient-to-r bg-orange-400 text-white rounded-lg text-center hover:scale-105 transition">
            React
          </div>

          <div className="p-6 bg-gradient-to-r bg-orange-400  text-white rounded-lg text-center hover:scale-105 transition">
            Node.js
          </div>

          <div className="p-6 bg-gradient-to-r bg-orange-400  text-white rounded-lg text-center hover:scale-105 transition">
            MongoDB
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500">6+</h2>
          <p className="text-gray-600">Projects Completed</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500">6</h2>
          <p className="text-gray-600">Months Experience</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500">2026</h2>
          <p className="text-gray-600">Graduation Year</p>
        </div>

      </div>

      {/* Education */}
      <div className="bg-gray-100 rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>

        <p className="text-gray-700 text-lg">
          🎓 B.Sc Computer Science  
          <br />
          Government Arts College  
          <br />
          Graduating in 2026
        </p>
      </div>

      {/* Career Goal */}
      <div className="bg-orange-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Career Goal</h2>

        <p className="text-lg">
          My goal is to become a full-stack developer and create scalable
          web applications that solve real-world problems.
        </p>
      </div>

    </div>
  )
}

export default About