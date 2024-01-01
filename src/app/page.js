"use client"
import { Button } from '@nextui-org/react';
import "./styles/mainsection.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dogeFirst from "./images/doge-first-year.png"
import dogeSecond from "./images/doge-second-year.png"
import dogeThird from "./images/doge-third-year.png"
import dogeFourth from "./images/doge-fourth-year.png"

export default function Home() {
  const router = useRouter();

  const handleClick1 = () =>{
    router.push("FirstYear");
  }
  const handleClick2 = () =>{
    router.push("SecondYear");
  }
  const handleClick3 = () =>{
    router.push("ThirdYear");
  }
  const handleClick4 = () =>{
    router.push("FourthYear");
  }

  return (
    <main className="container">
      <h1 className='semester-title'>Select your Semester</h1>
      <div className='semester-main-container'>
        <div className='semester-left-column'>
          <Button variant="ghost" auto onClick={handleClick1}>
            <p>First Year</p>
            <Image 
            src={dogeFirst}
            width={38}
          />
          </Button>
          <Button variant='ghost' auto onClick={handleClick3}>
          <p>Third Year</p>
            <Image 
            src={dogeThird}
            width={38}
          />
          </Button>
        </div>
        <div className='semester-right-column'>
          <Button variant="ghost" auto onClick={handleClick2}>
          <p>Second Year</p>
            <Image 
            src={dogeSecond}
            width={30}
          />
          </Button>
          <Button variant='ghost' auto onClick={handleClick4}>
          <p>Fourth Year</p>
            <Image 
            src={dogeFourth}
            width={38}
          />
          </Button>
        </div>
      </div>
    </main>
  );
}