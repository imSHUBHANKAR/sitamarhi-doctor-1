import Image from "next/image";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutDoctor from "@/components/home/AboutDoctor";
import Statistics from "@/components/home/Statistics";
import Specializations from "@/components/home/Specializations";
import HealthcareServices from "@/components/home/HealthcareServices";
import DoctorProfile from "@/components/home/DoctorProfile";
import Testimonials from "@/components/home/Testimonials";
import PhotoGallery from "@/components/home/PhotoGallery";
import PhotoGallery2 from "@/components/home/PhotoGallery2";
import FAQ from "@/components/home/FAQ";
import Location from "@/components/home/Location";
import WorkingHours from "@/components/home/WorkingHours";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <AboutDoctor />
        <Statistics />
        <Specializations />
        <HealthcareServices />
        <DoctorProfile />
        <Testimonials />
        <PhotoGallery />
        {/* <PhotoGallery2 /> */}
        <FAQ />
        <Location />
        <WorkingHours />
        <Contact />
      </main>

      <Footer />
    </>
  );
}