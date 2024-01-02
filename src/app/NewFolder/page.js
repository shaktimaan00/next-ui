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

function YourComponent() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState(null);

    const handleYearChange = (event) => {
        setSelectedYear(Number(event.target.value));
        console.log(selectedYear);
    };

    const handleBranchChange = (event) => {
        if (event && event.target) {
            setSelectedBranch(event.target.value);
            console.log(selectedBranch);
        }
    };

    const handleBackToBranch = () => {
        setSelectedBranch(null);
        console.log(selectedBranch);
    }

    const handleBackToYear = () => {
        setSelectedYear(null);
        console.log(selectedYear);
    }


    const filteredData = subjectsData.find(
        (data) => data.year === selectedYear && data.branch === selectedBranch
    );

    return (
        <div>
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
                                />
                            </Button>
                            <Button variant='ghost' auto value={1} onPress={handleYearChange}>
                                <p>Third Year</p>
                                <Image
                                    src={dogeThird}
                                    width={38}
                                />
                            </Button>
                        </div>
                        <div className='semester-right-column'>
                            <Button variant="ghost" auto value={1} onPress={handleYearChange}>
                                <p>Second Year</p>
                                <Image
                                    src={dogeSecond}
                                    width={30}
                                />
                            </Button>
                            <Button variant='ghost' auto value={1} onPress={handleYearChange}>
                                <p>Fourth Year</p>
                                <Image
                                    src={dogeFourth}
                                    width={38}
                                />
                            </Button>
                        </div>
                    </div>
                </main>
            )}

            {selectedYear !== null && selectedBranch === null && (
                <div className="container">
                    <h1 className='branch-title'>Select your Branch</h1>
                    <div className='branch-main-container'>
                        <Button className="branch-btn" variant="ghost" auto value={"CSE"} onPress={handleBranchChange}>
                            <p>CSE</p>
                            <Image
                                src={dogeCse}
                                width={28}
                            />
                        </Button>
                        <Button className="branch-btn" variant="ghost" auto value={"ME"} onPress={handleBranchChange}>
                            <p>ME</p>
                            <Image
                                src={dogeMe}
                                width={29}
                            />
                        </Button>
                        <Button className="branch-btn" variant="ghost" auto value={"CIVIL"} onPress={handleBranchChange}>
                            <p>Civil</p>
                            <Image
                                src={dogeCivil}
                                width={38}
                            />
                        </Button>
                        <Button className="branch-btn" variant="ghost" auto value={"ECE"} onPress={handleBranchChange}>
                            <p>IT</p>
                            <Image
                                src={dogeIt}
                                width={32}
                            />
                        </Button>
                    </div>
                    <div>
                    <Button variant='ghost' className='branch-btn' onPress={handleBackToYear}>
                        <p>Go Back !!</p>
                    </Button>
                    </div>
                </div>
            )}

            {selectedYear !== null && selectedBranch !== null && (
                <div id="main-card">
                    <h1 id="title1-grid">5th Sem</h1>
                    {filteredData && (
                        <div>
                            {filteredData.subjects.map((item) => (
                                <div key={item.content_id} id={item.id}>
                                    <Card radius="lg" className={item.class}>
                                        <p className="subject-id">{item.subject_id}</p>
                                        <p className="subject-name">{item.subject_name}</p>
                                        <Button className="text-white bg-black/20" variant="ghost" color="default" radius="md" size="md">
                                            Click for Notes..
                                        </Button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    )}

                    <h1 id="title2-grid">6th Sem</h1>
                    <div id="six-card-1" className="cse-card">Content 1</div>
                    <div id="six-card-2" className="cse-card">Content 2</div>
                    <div id="six-card-3" className="cse-card">Content 3</div>
                    <div id="six-card-4" className="cse-card">Content 4</div>
                    <div id="six-card-5" className="cse-card">Content 5</div>
                    <div id="six-card-6" className="cse-card">Content 6</div>
                    <br />
                    <br />
                    <button onClick={handleBackToBranch}> Go back to branch</button>
                </div>
            )}
        </div>
    );
}

export default YourComponent;
