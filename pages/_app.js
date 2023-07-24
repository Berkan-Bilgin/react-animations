import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import 'animate.css'
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar></Navbar>
     <Component {...pageProps} />
    </>
  )
}
