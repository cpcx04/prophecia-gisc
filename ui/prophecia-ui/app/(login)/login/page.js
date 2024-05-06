'use client'
import Image from "next/image";
import LoginPage from "../../ui/login";
import { useState } from "react";


export default function Home() {
  return (
    <main className="bg-green-600">
        <LoginPage/>      
    </main>
  );
}
