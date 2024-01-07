"use client"
import React, { useState } from 'react';
import subjectsData from './data.json';
import "../styles/mainsection.css"
// import "./FirstYear.css"
import { Button, Card } from '@nextui-org/react';
import Image from 'next/image';
import dogeFirst from "../images/doge-first-year.png"
import dogeSecond from "../images/doge-second-year.png"
import dogeThird from "../images/doge-third-year.png"
import dogeFourth from "../images/doge-fourth-year.png"
import dogeCse from "../images/doge-cse.png"
import dogeMe from "../images/doge-me.png"
import dogeCivil from "../images/doge-civil.png"
import dogeIt from "../images/doge-it.png"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function YourComponent() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [isxLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        console.log("button Clicked")
    };


    const handleYearChange = (event) => {
        setSelectedYear(Number(event.target.value));
    };

    const handleBranchChange = (event) => {
        if (event && event.target) {
            setSelectedBranch(event.target.value);
        }
    };

    const handleBackToBranch = () => {
        setSelectedBranch(null);
    }

    const handleBackToYear = () => {
        setSelectedYear(null);
    }

    const filteredData = subjectsData.find(
        (data) => data.year === selectedYear && data.branch === selectedBranch
    );

    // console.log(filteredData.isLoading)

    return (
        <div className='main-container'>
            {selectedYear === null && (
                <main className="container">
                    <h1 className='semester-title'>Select your Semester</h1>
                    <div className='semester-main-container'>
                        <div className='semester-left-column'>
                            <Button variant="ghost" auto value={1} onPress={handleYearChange}>
                                <p>First Year</p>
                                <Image
                                    src={dogeFirst}
                                    width={38}
                                    alt='doge-1'
                                />
                            </Button>
                            <Button variant="ghost" auto value={2} onPress={handleYearChange}>
                                <p>Second Year</p>
                                <Image
                                    src={dogeSecond}
                                    width={30}
                                    alt='doge-2'
                                />
                            </Button>
                        </div>
                        <div className='semester-right-column'>
                            <Button variant='ghost' auto value={3} onPress={handleYearChange}>
                                <p>Third Year</p>
                                <Image
                                    src={dogeThird}
                                    width={38}
                                    alt='doge-3'
                                />
                            </Button>
                            <Button variant='ghost' auto value={4} onPress={handleYearChange}>
                                <p>Fourth Year</p>
                                <Image
                                    src={dogeFourth}
                                    width={38}
                                    alt='doge-4'
                                />
                            </Button>
                        </div>
                    </div>
                </main>
            )}

            {selectedYear !== null && selectedBranch === null && (
                <div className="branch-container">
                    <h1 className='branch-title'>Select your Branch</h1>
                    <div className='branch-main-container'>
                        <div className='branch-left-column'>
                            <Button className="branch-btn" variant="ghost" auto value={"CSE"} onPress={handleBranchChange}>
                                <p>CSE</p>
                                <Image
                                    src={dogeCse}
                                    width={28}
                                    alt='doge-1'
                                />
                            </Button>
                            <Button className="branch-btn" variant="ghost" auto value={"ME"} onPress={handleBranchChange}>
                                <p>ME</p>
                                <Image
                                    src={dogeMe}
                                    width={29}
                                    alt='doge-2'
                                />
                            </Button>
                        </div>
                        <div className='branch-right-column'>
                            <Button className="branch-btn" variant="ghost" auto value={"CIVIL"} onPress={handleBranchChange}>
                                <p>Civil</p>
                                <Image
                                    src={dogeCivil}
                                    width={38}
                                    alt='doge-3'
                                />
                            </Button>
                            <Button className="branch-btn" variant="ghost" auto value={"ECE"} onPress={handleBranchChange}>
                                <p>IT</p>
                                <Image
                                    src={dogeIt}
                                    width={32}
                                    alt='doge-4'
                                />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Button variant='flat' className='cse-card-btn' color='danger' onPress={handleBackToYear}>
                            <p>&lt; Back</p>
                        </Button>
                    </div>
                </div>
            )}

            {selectedYear !== null && selectedBranch !== null && (
                <div id="main-card">
                    <Button className='card-back-btn' variant='flat' color='danger' onClick={handleBackToBranch}><p>&lt; Back</p></Button>
                    <div id='semi-main-card-2'>
                        <h1 id="title1">{filteredData.sem[0].first}</h1>
                        {filteredData && (
                            <>
                                {filteredData.subjects1.map((item) => (
                                    <div key={item.content_id} id={item.id}>
                                        <Card radius="lg" className={item.class}>
                                            <div className='card-content'>
                                                <p className="subject-id">{item.subject_id}</p>
                                                <p className="subject-name">{item.subject_name}</p>
                                            </div>
                                            <Button className=" card-notes-btn text-white bg-black/20" variant="ghost" color="default" radius="md" size="md" isLoading={isxLoading} onClick={handleClick}> 
                                                <Link
                                                    href={{
                                                        pathname: '../PageDetails',
                                                        query:{
                                                            name: "anurag",
                                                            surname: "mishra"
                                                        }
                                                    }}
                                                    target='_blank'

                                                >
                                                    Click for Notes..
                                                </Link>
                                            </Button>
                                        </Card>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    <div id='semi-main-card-2'>
                        <h1 id="title2">{filteredData.sem[0].second}</h1>
                        {filteredData && (
                            <>
                                {filteredData.subjects2.map((item) => (
                                    <div key={item.content_id} id={item.id}>
                                        <Card radius="lg" className={item.class}>
                                            <div className='card-content'>
                                                <p className="subject-id">{item.subject_id}</p>
                                                <p className="subject-name">{item.subject_name}</p>
                                            </div>
                                            <Button className=" card-notes-btn text-white bg-black/20" variant="ghost" color="default" radius="md" size="md" isLoading={isxLoading} onClick={handleClick}>
                                            <Link
                                                href={{
                                                    pathname: '../PageDetails',
                                                    query:{
                                                        name: "anurag",
                                                        surname: "mishra"
                                                    }
                                                }}
                                                target='_blank'

                                            >
                                                Click for Notes..
                                            </Link>
                                            </Button>
                                        </Card>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                </div>
            )}
        </div>
    );
}

export default YourComponent;
