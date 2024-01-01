"use client"
import { button } from '@nextui-org/react';
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

  return (
    <div className="container">
      <h1 className='branch-title '>Select your Branch</h1>
      <div className='branch-main-container'>
        <button className="branch-btn" variant="ghost" auto >
          <p>CSE</p>
          <Image 
            src={dogeCse}
            width={28}
          />
        </button>
        <button className="branch-btn" variant="ghost" auto >
        <p>ME</p>
          <Image 
            src={dogeMe}
            width={29}
          />
        </button>
        <button className="branch-btn" variant="ghost" auto >
        <p>Civil</p>
          <Image 
            src={dogeCivil}
            width={38}
          />
        </button>
        <button className="branch-btn" variant="ghost" auto >
        <p>IT</p>
          <Image 
            src={dogeIt}
            width={32}
          />
        </button>
      </div>
      <div>
        <button variant='ghost' className='branch-btn' onClick={()=> router.back()}>
          <p>Go Back !!</p>
        </button>
      </div>
    </div>
  );
}

export default SelectBranch;