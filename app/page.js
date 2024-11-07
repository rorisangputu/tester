"use client"

import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Lox from "./components/Lox/Lox";

export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div>
      <Loader />
     
    </div>
  );
}
