import React from 'react'
import CertificationCard from '../sub/CertificationCard'

const Certifications = () => {
  return (
   <div
      className="flex flex-col items-center justify-center py-20"
      id="certifications"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
       <CertificationCard
        src="/bnsp.png"
        title="Junior Web Developer by BNSP"
        description="Sertifikasi resmi dari BNSP yang membuktikan kompetensi dalam pengembangan website menggunakan teknologi front-end dan back-end dasar."
        />
        <CertificationCard
        src="/bnsp.png"
        title="Junior Network Engineer by BNSP"
        description="Sertifikasi nasional yang menunjukkan kemampuan dasar dalam merancang, mengelola, dan memelihara jaringan komputer."
        />
        <CertificationCard
        src="/bangkit.png"
        title="Bangkit Academy Cloud Computing Learning Path"
        description="Program Kampus Merdeka oleh Google, GoTo, dan Traveloka yang berfokus pada penguasaan teknologi cloud computing, DevOps, dan pengembangan solusi backend."
        />

      </div>
      
      </div>
  )
}

export default Certifications
