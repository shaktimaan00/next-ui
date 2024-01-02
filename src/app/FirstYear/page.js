"use client"
import { Button } from '@nextui-org/react';
import "../styles/mainsection.css"
import Link from 'next/link';
import Image from 'next/image';
import dogeCse from "../images/doge-cse.png"
import dogeMe from "../images/doge-me.png"
import dogeCivil from "../images/doge-civil.png"
import dogeIt from "../images/doge-it.png"
import { useRouter } from 'next/navigation';

const SelectBranch = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.back();
  }

  return (
    <div className="container">
      <h1 className='branch-title'>Select your Branch</h1>
      <div className='branch-main-container'>
        <Button className="branch-btn" variant="ghost" auto onClick={()=> router.push("FirstYear/cse")}>
          <p>CSE</p>
          <Image 
            src={dogeCse}
            width={28}
          />
        </Button>
        <Button className="branch-btn" variant="ghost" auto onClick={()=> router.push("FirstYear/me")}>
        <p>ME</p>
          <Image 
            src={dogeMe}
            width={29}
          />
        </Button>
        <Button className="branch-btn" variant="ghost" auto onClick={()=> router.push("FirstYear/civil")}>
        <p>Civil</p>
          <Image 
            src={dogeCivil}
            width={38}
          />
        </Button>
        <Button className="branch-btn" variant="ghost" auto onClick={()=> router.push("FirstYear/civil")}>
        <p>IT</p>
          <Image 
            src={dogeIt}
            width={32}
          />
        </Button>
      </div>
      <div>
        <Button variant='ghost' className='branch-btn' onClick={handleRoute}>
          <p>Go Back !!</p>
        </Button>
      </div>
    </div>
  );
}

export default SelectBranch;