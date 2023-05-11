import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Global from '@mui/styled-engine-sc/GlobalStyles/GlobalStyles'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='navbar'>
      <Navbar/>
    </div>
  )
}

