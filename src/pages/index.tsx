// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Recipes from './qcomps/recipes'
import List from './qcomps/list_keys_id'
import Gallery from './qcomps/gallery_props'


export default function Home() {
  return (
      <><Recipes/><Gallery/><List/></>
  )
}
