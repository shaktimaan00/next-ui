"use client"
import { Button } from '@nextui-org/react';
import "./components/styles/mainsection.css"
import Link from 'next/link';

export default function Home() {

  return (
    <main className="container">
      <h1 className='semester-title'>Select your Semester</h1>
      <div className='semester-main-container'>
        <div className='semester-left-column'>
          <Button variant="ghost" auto ><Link href="/1">First Semester</Link></Button>
          <Button variant="ghost" auto ><Link href="/2">Second Semester</Link></Button>
          <Button variant="ghost" auto ><Link href="/3">Third Semester</Link></Button>
          <Button variant="ghost" auto ><Link href="/4">Fourth Semester</Link></Button>
        </div>
        <div className='semester-right-column'>
          <Button variant='ghost' auto ><Link href='/5'>Fifth Semester</Link></Button>
          <Button variant='ghost' auto ><Link href="/6">Sixth Semester</Link></Button>
          <Button variant='ghost' auto ><Link href="/7">Seventh Semester</Link></Button>
          <Button variant='ghost' auto ><Link href="/8">Eighth Semester</Link></Button>
        </div>
      </div>
    </main>
  );
}