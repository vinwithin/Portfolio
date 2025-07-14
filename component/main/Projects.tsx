
import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern Next.js Portfolio"
          description="Portofolio pribadi modern menggunakan Next.js untuk menampilkan proyek, sertifikasi, skill, dan kontak secara profesional."
        />
        <ProjectCard
          src="/pro-ide.png"
          title="Sistem Informasi Pro-IDe"
          description="Platform digital untuk mempermudah pendaftaran, pengelolaan, sampai pelaporan kegiatan Pro-IDe oleh mahasiswa Universitas Jambi."
        />
        <ProjectCard
          src="/disdik.png"
          title="Redesain Website Dinas Pendidikan Provinsi Jambi"
          description="Pembaruan tampilan dan sistem website Dinas Pendidikan Provinsi Jambi agar lebih modern, responsif, dan mudah diakses oleh masyarakat."
        />
      </div>
     <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/seo.png"
          title="SEO AUDIT TOOLS"
          description="Alat bantu untuk menganalisis dan mengevaluasi performa SEO suatu website secara otomatis dan efisien."
        />
        <ProjectCard
          src="/kebunhandil.png"
          title="Sistem Informasi Kelurahan Kebun Handil"
          description="Sistem informasi berbasis web untuk pengelolaan data administrasi dan pelayanan masyarakat di Kelurahan Kebun Handil."
        />
        <ProjectCard
          src="/halitra.png"
          title="Hasta Lingua Translator"
          description="Aplikasi penerjemah berbasis mobile untuk membantu pengguna menerjemahkan bahasa isyarat dengan antarmuka sederhana."
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ahp.png"
          title="Sistem Pendukung Keputusan Dengan Metode AHP"
          description="Aplikasi untuk membantu pengambilan keputusan menggunakan metode Analytical Hierarchy Process (AHP)."
        />
        <ProjectCard
          src="/wp.png"
          title="Sistem Pendukung Keputusan Dengan Metode WP"
          description="SPK berbasis metode Weighted Product untuk menentukan keputusan terbaik berdasarkan kriteria yang ditentukan."
        />
        <ProjectCard
          src="/himasi.png"
          title="Sistem Informasi Profil Himpunan Mahasiswa Sistem Informasi"
          description="Website HIMASI untuk mengelola informasi organisasi, termasuk berita, kegiatan, dan prestasi mahasiswa Sistem Informasi."
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Docs to Pdf API"
          description="API konversi dokumen Word, Excel, dan lainnya ke format PDF secara otomatis dan cepat."
        />
        <ProjectCard
          src="/saw.png"
          title="Sistem Pendukung Keputusan Dengan Metode SAW"
          description="Aplikasi pendukung keputusan berbasis metode Simple Additive Weighting (SAW) untuk membantu proses seleksi."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Text to Speech API"
          description="Layanan API untuk mengubah teks menjadi suara menggunakan teknologi text-to-speech (TTS)."
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Aplikasi POS C#"
          description="Aplikasi Point of Sale berbasis desktop menggunakan C# untuk mengelola transaksi penjualan, stok, dan sebagainya."
        />
      </div>

    </div>
    
  );
};

export default Projects;