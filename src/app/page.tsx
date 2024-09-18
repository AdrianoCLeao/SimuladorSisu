"use client"
import CustomForm from "@/components/Form";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-200 w-1/3 flex items-center justify-center">
        <CustomForm />
      </div>
      
    </div>
  );
}
