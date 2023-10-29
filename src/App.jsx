import React, { useEffect, useLayoutEffect, useState } from 'react'
import ButtonArea from './ButtonArea'
import QRCode from 'react-qr-code'
import '../node_modules/bootstrap/dist/js/bootstrap'

export default function App() {
    const [teamNumber, setTeamNumber] = useState(localStorage.getItem("teamNumber") == null ? "" : localStorage.getItem("teamNumber")) 
    const [matchNumber, setMatchNumber] = useState(localStorage.getItem("matchNumber") == null ? "" : localStorage.getItem("matchNumber"))
    const [scoutName, setScoutName] = useState(localStorage.getItem("scoutName") == null ? "" : localStorage.getItem("scoutName"))
    const [startingPosition, setStartingPosition] = useState(localStorage.getItem("startingPosition") == null ? "" : localStorage.getItem("startingPosition"))
    const [leaveCommunity, setLeaveCommunity] = useState(localStorage.getItem("leaveCommunity") == null ? "" : localStorage.getItem("leaveCommunity"))
    const [autoConesHigh, setAutoConesHigh] = useState(localStorage.getItem("autoConesHigh") == null ? 0 : localStorage.getItem("autoConesHigh"))
    const [autoConesMid, setAutoConesMid] = useState(localStorage.getItem("autoConesMid") == null ? 0 : localStorage.getItem("autoConesMid"))
    const [autoConesLow, setAutoConesLow] = useState(localStorage.getItem("autoConesLow") == null ? 0 : localStorage.getItem("autoConesLow"))
    const [autoConesMissed, setAutoConesMissed] = useState(localStorage.getItem("autoConesMissed") == null ? 0 : localStorage.getItem("autoConesMissed"))
    const [autoCubesHigh, setAutoCubesHigh] = useState(localStorage.getItem("autoCubesHigh") == null ? 0 : localStorage.getItem("autoCubesHigh"))
    const [autoCubesMid, setAutoCubesMid] = useState(localStorage.getItem("autoCubesMid") == null ? 0 : localStorage.getItem("autoCubesMid"))
    const [autoCubesLow, setAutoCubesLow] = useState(localStorage.getItem("autoCubesLow") == null ? 0 : localStorage.getItem("autoCubesLow"))
    const [autoCubesMissed, setAutoCubesMissed] = useState(localStorage.getItem("autoCubesMissed") == null ? 0 : localStorage.getItem("autoCubesMissed"))
    const [autoChargingStation, setAutoChargingStation] = useState(localStorage.getItem("autoChargingStation") == null ? "" : localStorage.getItem("autoChargingStation"))
    const [teleConesHigh, setTeleConesHigh] = useState(localStorage.getItem("teleConesHigh") == null ? 0 : localStorage.getItem("teleConesHigh"))
    const [teleConesMid, setTeleConesMid] = useState(localStorage.getItem("teleConesMid") == null ? 0 : localStorage.getItem("teleConesMid"))
    const [teleConesLow, setTeleConesLow] = useState(localStorage.getItem("teleConesLow") == null ? 0 : localStorage.getItem("teleConesLow"))
    const [teleConesMissed, setTeleConesMissed] = useState(localStorage.getItem("teleConesMissed") == null ? 0 : localStorage.getItem("teleConesMissed"))
    const [teleCubesHigh, setTeleCubesHigh] = useState(localStorage.getItem("teleCubesHigh") == null ? 0 : localStorage.getItem("teleCubesHigh"))
    const [teleCubesMid, setTeleCubesMid] = useState(localStorage.getItem("teleCubesMid") == null ? 0 : localStorage.getItem("teleCubesMid"))
    const [teleCubesLow, setTeleCubesLow] = useState(localStorage.getItem("teleCubesLow") == null ? 0 : localStorage.getItem("teleCubesLow"))
    const [teleCubesMissed, setTeleCubesMissed] = useState(localStorage.getItem("teleCubesMissed") == null ? 0 : localStorage.getItem("teleCubesMissed"))    
    const [intakeFromFloorCommunity, setIntakeFromFloorCommunity] = useState(localStorage.getItem("intakeFromFloorCommunity") == null ? 0 : localStorage.getItem("intakeFromFloorCommunity"))
    const [intakeFromFloorNotCommunity, setIntakeFromFloorNotCommunity] = useState(localStorage.getItem("intakeFromFloorNotCommunity") == null ? 0 : localStorage.getItem("intakeFromFloorNotCommunity"))
    const [intakeFromShelf, setIntakeFromShelf] = useState(localStorage.getItem("intakeFromShelf") == null ? 0 : localStorage.getItem("intakeFromShelf"))
    const [intakeFromChute, setIntakeFromChute] = useState(localStorage.getItem("intakeFromChute") == null ? 0 : localStorage.getItem("intakeFromChute"))
    const [defenseQuantity, setDefenseQuantity] = useState(localStorage.getItem("defenseQuantity") == null ? "" : localStorage.getItem("defenseQuantity"))
    const [defenseQuality, setDefenseQuality] = useState(localStorage.getItem("defenseQuality") == null ? "" : localStorage.getItem("defenseQuality"))
    const [endgameChargingStation, setEndgameChargingStation] = useState(localStorage.getItem("endgameChargingStation") == null ? "" : localStorage.getItem("endgameChargingStation"))
    const [additionalRobots, setAdditionalRobots] = useState(localStorage.getItem("additionalRobots") == null ? "" : localStorage.getItem("additionalRobots"))
    const [speed, setSpeed] = useState(localStorage.getItem("speed") == null ? "" : localStorage.getItem("speed"))
    const [movedBetween, setMovedBetween] = useState(localStorage.getItem("movedBetween") == null ? "" : localStorage.getItem("movedBetween"))
    const [droppedCycling, setDroppedCycling] = useState(localStorage.getItem("droppedCycling") == null ? "" : localStorage.getItem("droppedCycling"))
    const [timeToIntake, setTimeToIntake] = useState(localStorage.getItem("timeToIntake") == null ? "" : localStorage.getItem("timeToIntake"))
    const [droppedHit, setDroppedHit] = useState(localStorage.getItem("droppedHit") == null ? "" : localStorage.getItem("droppedHit"))
    const [tripleClimb, setTripleClimb] = useState(localStorage.getItem("tripleClimb") == null ? "" : localStorage.getItem("tripleClimb"))
    const [comment, setComment] = useState(localStorage.getItem("comment") == null ? "" : localStorage.getItem("comment"))
    const [missingDataMessage, setMissingDataMessage] = useState([])
    const [verticalButtons, setVerticalButtons] = useState(false)

    useEffect(()=> {
        localStorage.setItem("teamNumber", teamNumber)
    }, [teamNumber])

    useEffect(()=> {
        localStorage.setItem("matchNumber", matchNumber)
    }, [matchNumber])

    useEffect(()=> {
        localStorage.setItem("scoutName", scoutName)
    }, [scoutName])

    useEffect(()=> {
        localStorage.setItem("startingPosition", startingPosition)
    }, [startingPosition])

    useEffect(()=> {
        localStorage.setItem("leaveCommunity", leaveCommunity)
    }, [leaveCommunity])

    useEffect(()=> {
        localStorage.setItem("autoConesHigh", autoConesHigh)
    }, [autoConesHigh])

    useEffect(()=> {
        localStorage.setItem("autoConesMid", autoConesMid)
    }, [autoConesMid])
    
    useEffect(()=> {
        localStorage.setItem("autoConesLow", autoConesLow)
    }, [autoConesLow])

    useEffect(()=> {
        localStorage.setItem("autoConesMissed", autoConesMissed)
    }, [autoConesMissed])

    useEffect(()=> {
        localStorage.setItem("autoCubesHigh", autoCubesHigh)
    }, [autoCubesHigh])

    useEffect(()=> {
        localStorage.setItem("autoCubesMid", autoCubesMid)
    }, [autoCubesMid])

    useEffect(()=> {
        localStorage.setItem("autoCubesLow", autoCubesLow)
    }, [autoCubesLow])

    useEffect(()=> {
        localStorage.setItem("autoCubesMissed", autoCubesMissed)
    }, [autoCubesMissed])

    useEffect(()=> {
        localStorage.setItem("autoChargingStation", autoChargingStation)
    }, [autoChargingStation])

    useEffect(()=> {
        localStorage.setItem("teleConesHigh", teleConesHigh)
    }, [teleConesHigh])

    useEffect(()=> {
        localStorage.setItem("teleConesMid", teleConesMid)
    }, [teleConesMid])

    useEffect(()=> {
        localStorage.setItem("teleConesLow", teleConesLow)
    }, [teleConesLow])

    useEffect(()=> {
        localStorage.setItem("teleConesMissed", teleConesMissed)
    }, [teleConesMissed])

    useEffect(()=> {
        localStorage.setItem("teleCubesHigh", teleCubesHigh)
    }, [teleCubesHigh])

    useEffect(()=> {
        localStorage.setItem("teleCubesMid", teleCubesMid)
    }, [teleCubesMid])

    useEffect(()=> {
        localStorage.setItem("teleCubesLow", teleCubesLow)
    }, [teleCubesLow])

    useEffect(()=> {
        localStorage.setItem("teleCubesMissed", teleCubesMissed)
    }, [teleCubesMissed])

    useEffect(()=> {
        localStorage.setItem("intakeFromFloorCommunity", intakeFromFloorCommunity)
    }, [intakeFromFloorCommunity])

    useEffect(()=> {
        localStorage.setItem("intakeFromFloorNotCommunity", intakeFromFloorNotCommunity)
    }, [intakeFromFloorNotCommunity])

    useEffect(()=> {
        localStorage.setItem("intakeFromShelf", intakeFromShelf)
    }, [intakeFromShelf])

    useEffect(()=> {
        localStorage.setItem("intakeFromChute", intakeFromChute)
    }, [intakeFromChute])

    useEffect(()=> {
        localStorage.setItem("defenseQuantity", defenseQuantity)
    }, [defenseQuantity])

    useEffect(()=> {
        localStorage.setItem("defenseQuality", defenseQuality)
    }, [defenseQuality])

    useEffect(()=> {
        localStorage.setItem("endgameChargingStation", endgameChargingStation)
    }, [endgameChargingStation])

    useEffect(()=> {
        localStorage.setItem("additionalRobots", additionalRobots)
    }, [additionalRobots])

    useEffect(()=> {
        localStorage.setItem("speed", speed)
    }, [speed])

    useEffect(()=> {
        localStorage.setItem("movedBetween", movedBetween)
    }, [movedBetween])

    useEffect(()=> {
        localStorage.setItem("droppedCycling", droppedCycling)
    }, [droppedCycling])

    useEffect(()=> {
        localStorage.setItem("timeToIntake", timeToIntake)
    }, [timeToIntake])

    useEffect(()=> {
        localStorage.setItem("droppedHit", droppedHit)
    }, [droppedHit])

    useEffect(()=> {
        localStorage.setItem("tripleClimb", tripleClimb)
    }, [tripleClimb])

    useEffect(()=> {
        localStorage.setItem("comment", comment)
    }, [comment])

    function clear() {
        setTeamNumber("")
        setMatchNumber("")
        setScoutName("")
        setStartingPosition("")
        setLeaveCommunity("")
        setAutoConesHigh(0)
        setAutoConesMid(0)
        setAutoConesLow(0)
        setAutoConesMissed(0)
        setAutoCubesHigh(0)
        setAutoCubesMid(0)
        setAutoCubesLow(0)
        setAutoCubesMissed(0)
        setAutoChargingStation("")
        setTeleConesHigh(0)
        setTeleConesMid(0)
        setTeleConesLow(0)
        setTeleConesMissed(0)
        setTeleCubesHigh(0)
        setTeleCubesMid(0)
        setTeleCubesLow(0)
        setTeleCubesMissed(0)
        setIntakeFromFloorCommunity(0)
        setIntakeFromFloorNotCommunity(0)
        setIntakeFromShelf(0)
        setIntakeFromChute(0)
        setDefenseQuantity("")
        setDefenseQuality("")
        setEndgameChargingStation("")
        setAdditionalRobots("")
        setSpeed("")
        setMovedBetween("")
        setDroppedCycling("")
        setTimeToIntake("")
        setDroppedHit("")
        setTripleClimb("")
        setComment("")
    } 

    const data = [
        matchNumber,
        teamNumber,
        comment,
        !!startingPosition,
        leaveCommunity,
        parseInt(autoConesHigh),
        parseInt(autoConesMid),
        parseInt(autoConesLow),
        parseInt(autoConesMissed),
        parseInt(autoCubesHigh),
        parseInt(autoCubesMid),
        parseInt(autoCubesLow),
        parseInt(autoCubesMissed),
        autoChargingStation,
        parseInt(teleConesHigh),
        parseInt(teleConesMid),
        parseInt(teleConesMid),
        parseInt(teleConesMissed),
        parseInt(teleCubesHigh),
        parseInt(teleCubesMid),
        parseInt(teleCubesLow),
        parseInt(teleCubesMissed),
        parseInt(intakeFromFloorCommunity),
        parseInt(intakeFromFloorNotCommunity),
        parseInt(intakeFromShelf),
        parseInt(intakeFromChute),
        defenseQuantity,
        defenseQuality,
        endgameChargingStation,
        additionalRobots,
        speed,
        movedBetween == "" ? "" : movedBetween,
        droppedCycling == "" ? "" : droppedCycling,
        timeToIntake == "" ? "" : timeToIntake,
        droppedHit == "" ? "" : droppedHit,
        tripleClimb == "" ? "" : tripleClimb,
        scoutName
    ]

    function checkMissing() {
        let missings = []
        if (!teamNumber) missings.push("Team number")
        if (!matchNumber) missings.push("Match number")
        if (!scoutName) missings.push("Scout name")
        if (!startingPosition) missings.push("Starting position")
        if (!leaveCommunity) missings.push("Leave community")
        if (!autoChargingStation) missings.push("Auto charging station")
        if (!defenseQuantity) missings.push("Defense quantity")
        if (!defenseQuality) missings.push("Defense quality")
        if (!endgameChargingStation) missings.push("Endgame charging station")
        if (!additionalRobots) missings.push("Additional robots")
        // if (!speed) missings.push("Slow or Fast")
        // if (!movedBetween) missings.push("Moved Pieces Between Nodes")
        // if (!droppedCycling) missings.push("Dropped Pieces While Cycling")
        // if (!timeToIntake) missings.push("Long Time To Intake")
        // if (!droppedHit) missings.push("Dropped When Hit")
        // if (!tripleClimb) missings.push("Triple Climb")
        if (!comment) missings.push("Comment")
        setMissingDataMessage(missings.length == 0 ? ["No missing data!"] : missings )
    }

    useEffect(()=> {
        console.log(data)
    }, [data])

    function changeButtonOrientation() {
        window.innerWidth < 768 ? setVerticalButtons(true) : setVerticalButtons(false)
    }

    useLayoutEffect(()=> {
        changeButtonOrientation()
        window.addEventListener('resize', changeButtonOrientation)
        window.addEventListener('orientationchange', changeButtonOrientation)
    },[])

    return (
        <>
            {/* missing */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title fs-5" id="exampleModalLabel">Missing Data</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            {missingDataMessage.filter(missing => !!missing).map(missing => {return <li key={missing}>{missing}</li>})}
                        </ul>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>
                    </div> */}
                    </div>
                </div>
            </div>

            {/* get match */}
            <section>
                <div className="container-fluid bg-secondary py-3 text-center display-5">
                    <p>Match info</p>
                </div>
                <div className='container mx-auto my-5 col-sm-4'>
                    <div>
                        <input type="text" placeholder='Team Number' className='form-control' onInput={e => setTeamNumber(e.target.value)} autoComplete='false' value={teamNumber}/>
                    </div>
                    <div className="pt-4">
                        <input type="text" placeholder='Match Number' className='form-control' onInput={e => setMatchNumber(e.target.value)} autoComplete='false' value={matchNumber}/>
                    </div>
                    <div className="pt-4">
                        <input type="text" placeholder='Scout Name' className='form-control' onInput={e => setScoutName(e.target.value)} autoComplete='false' value={scoutName}/>
                    </div>
                </div>
            </section>

            {/* autonomous */}
            <section>
                <div className="container-fluid bg-secondary py-3 text-center display-5">
                    <p>Autonomous</p>
                </div>
                <div className="container mx-auto pt-4">
                    <div className="text-center">
                        <img src="./robotPositions.png" alt="Robot positions" className='img-fluid' />
                    </div>
                    <div className='pt-5 row'>
                        <div className="col text-center">
                            <p>Starting Position</p>
                            <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                                <input type="radio" className="btn-check" name="startingposition" id="startingpositionA" onClick={()=> setStartingPosition("A")} checked={startingPosition == "A"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="startingpositionA">A</label>

                                <input type="radio" className="btn-check" name="startingposition" id="startingpositionB" onClick={()=> setStartingPosition("B")} checked={startingPosition == "B"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="startingpositionB">B</label>

                                <input type="radio" className="btn-check" name="startingposition" id="startingpositionC" onClick={()=> setStartingPosition("C")} checked={startingPosition == "C"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="startingpositionC">C</label>

                                <input type="radio" className="btn-check" name="startingposition" id="startingpositionD" onClick={()=> setStartingPosition("D")} checked={startingPosition == "D"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="startingpositionD">D</label>
                            </div>
                        </div>
                        <div className="col text-center">
                            <p>Leave Community?</p>
                            <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                                <input type="radio" className="btn-check" name="leavecommuntiy" id="leavecommunityyes" onClick={()=> setLeaveCommunity("true")} checked={leaveCommunity == "true"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="leavecommunityyes">Yes</label>

                                <input type="radio" className="btn-check" name="leavecommuntiy" id="leavecommunityno" onClick={()=> setLeaveCommunity("false")} checked={leaveCommunity == "false"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="leavecommunityno">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm">
                            <ButtonArea label={"Cones High"} variable={autoConesHigh} setter={setAutoConesHigh}></ButtonArea>
                        </div>
                        <div className="col-sm">
                            <ButtonArea label={"Cones Mid"} variable={autoConesMid} setter={setAutoConesMid}></ButtonArea>
                        </div>
                        <div className="col-sm">
                            <ButtonArea label={"Cones Low"} variable={autoConesLow} setter={setAutoConesLow}></ButtonArea>
                        </div>
                        <div className="col-sm">
                            <ButtonArea label={"Cones Missed (while placing high/mid)"} variable={autoConesMissed} setter={setAutoConesMissed}></ButtonArea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <ButtonArea label={"Cubes High"} variable={autoCubesHigh} setter={setAutoCubesHigh}></ButtonArea>
                        </div>
                        <div className="col-sm">
                            <ButtonArea label={"Cubes Mid"} variable={autoCubesMid} setter={setAutoCubesMid}></ButtonArea>
                        </div>
                        <div className="col-sm">
                            <ButtonArea label={"Cubes Low"} variable={autoCubesLow} setter={setAutoCubesLow}></ButtonArea>
                        </div>
                        <div className="col-sm">
                            <ButtonArea label={"Cubes Missed (while placing high/mid)"} variable={autoCubesMissed} setter={setAutoCubesMissed}></ButtonArea>
                        </div>
                    </div>
                    <div className='my-5 text-center'>
                        <p className='mb-2'>Charging Station</p>
                        <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                            <input type="radio" className="btn-check" name="autochargingstation" id="autochargingstationdocked" onClick={()=> setAutoChargingStation("Docked")} checked={autoChargingStation == "Docked"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="autochargingstationdocked">Docked</label>

                            <input type="radio" className="btn-check" name="autochargingstation" id="autochargingstationengaged" onClick={()=> setAutoChargingStation("Engaged")} checked={autoChargingStation == "Engaged"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="autochargingstationengaged">Engaged</label>

                            <input type="radio" className="btn-check" name="autochargingstation" id="autochargingstationnone" onClick={()=> setAutoChargingStation("None")} checked={autoChargingStation == "None"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="autochargingstationnone">None</label>
                        </div>
                    </div>

                </div>
            </section>

            {/* teleoperated */}
            <section>
                <div className="container-fluid bg-secondary py-3 text-center display-5">
                    <p>Teleoperated</p>
                </div>
                <div className="container mx-auto pt-4">
                    <div className="row">
                        <div className='col-sm'>
                            <ButtonArea label={"Cubes High"} variable={teleCubesHigh} setter={setTeleCubesHigh}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Cubes Mid"} variable={teleCubesMid} setter={setTeleCubesMid}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Cubes Low"} variable={teleCubesLow} setter={setTeleCubesLow}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Cubes Missed"} variable={teleCubesMissed} setter={setTeleCubesMissed}></ButtonArea>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm'>
                            <ButtonArea label={"Cones High"} variable={teleConesHigh} setter={setTeleConesHigh}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Cones Mid"} variable={teleConesMid} setter={setTeleConesMid}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Cones Low"} variable={teleConesLow} setter={setTeleConesLow}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Cones Missed"} variable={teleConesMissed} setter={setTeleConesMissed}></ButtonArea>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm'>
                            <ButtonArea label={"Intake From Floor (Community)"} variable={intakeFromFloorCommunity} setter={setIntakeFromFloorCommunity}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Intake From Floor (Outside Community)"} variable={intakeFromFloorNotCommunity} setter={setIntakeFromFloorNotCommunity}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Intake From Shelf"} variable={intakeFromShelf} setter={setIntakeFromShelf}></ButtonArea>
                        </div>
                        <div className='col-sm'>
                            <ButtonArea label={"Intake From Chute"} variable={intakeFromChute} setter={setIntakeFromChute}></ButtonArea>
                        </div>
                    </div>
                    <div className="row gy-5 my-5">
                        <div className="col-sm text-center">
                            <p>Defense Quantity %</p>
                            <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                                <input type="radio" className="btn-check" name="defenseQuantity" id="defenseQuantity0" onClick={()=> setDefenseQuantity("0")} checked={defenseQuantity == "0"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuantity0">0</label>

                                <input type="radio" className="btn-check" name="defenseQuantity" id="defenseQuantity25" onClick={()=> setDefenseQuantity("25")} checked={defenseQuantity == "25"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuantity25">25</label>

                                <input type="radio" className="btn-check" name="defenseQuantity" id="defenseQuantity50" onClick={()=> setDefenseQuantity("50")} checked={defenseQuantity == "50"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuantity50">50</label>

                                <input type="radio" className="btn-check" name="defenseQuantity" id="defenseQuantity75" onClick={()=> setDefenseQuantity("75")} checked={defenseQuantity == "75"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuantity75">75</label>

                                <input type="radio" className="btn-check" name="defenseQuantity" id="defenseQuantity100" onClick={()=> setDefenseQuantity("100")} checked={defenseQuantity == "100"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuantity100">100</label>
                            </div>
                        </div>
                        <div className="col-sm text-center">
                            <p>Defense Quality</p>
                            <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                                <input type="radio" className="btn-check" name="defenseQuality" id="defenseQuality0" onClick={()=> setDefenseQuality("0")} checked={defenseQuality == "0"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuality0">0</label>

                                <input type="radio" className="btn-check" name="defenseQuality" id="defenseQuality1" onClick={()=> setDefenseQuality("1")} checked={defenseQuality == "1"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuality1">1</label>

                                <input type="radio" className="btn-check" name="defenseQuality" id="defenseQuality2" onClick={()=> setDefenseQuality("2")} checked={defenseQuality == "2"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuality2">2</label>

                                <input type="radio" className="btn-check" name="defenseQuality" id="defenseQuality3" onClick={()=> setDefenseQuality("3")} checked={defenseQuality == "3"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuality3">3</label>

                                <input type="radio" className="btn-check" name="defenseQuality" id="defenseQuality4" onClick={()=> setDefenseQuality("4")} checked={defenseQuality == "4"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuality4">4</label>

                                <input type="radio" className="btn-check" name="defenseQuality" id="defenseQuality5" onClick={()=> setDefenseQuality("5")} checked={defenseQuality == "5"} readOnly/>
                                <label className="btn btn-primary p-5" htmlFor="defenseQuantity5">5</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* endgame */}
            <section>
                <div className="container-fluid bg-secondary py-3 text-center display-5">
                    <p>Endgame</p>
                </div>
                <div className="row mx-auto mt-4 mb-5 gy-4">
                    <div className='col-6 col-lg-12 text-center'>
                        <p className='mb-2'>Charging Station</p>
                        <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                            <input type="radio" className="btn-check" name="endgameChargingStation" id="endgameChargingStationdocked" onClick={()=> setEndgameChargingStation("Docked")} checked={endgameChargingStation == "Docked"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="endgameChargingStationdocked">Docked</label>

                            <input type="radio" className="btn-check" name="endgameChargingStation" id="endgameChargingStationengaged" onClick={()=> setEndgameChargingStation("Engaged")} checked={endgameChargingStation == "Engaged"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="endgameChargingStationengaged">Engaged</label>

                            <input type="radio" className="btn-check" name="endgameChargingStation" id="endgameChargingStationparked" onClick={()=> setEndgameChargingStation("Parked")} checked={endgameChargingStation == "Parked"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="endgameChargingStationparked">Parked</label>

                            <input type="radio" className="btn-check" name="endgameChargingStation" id="endgameChargingStationnone" onClick={()=> setEndgameChargingStation("None")} checked={endgameChargingStation == "None"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="endgameChargingStationnone">None</label>
                        </div>
                    </div>
                    <div className='col-6 col-lg-12 text-center'>
                        <p className='mb-2'>Additional Robots</p>
                        <div className={`${verticalButtons ? 'btn-group-vertical' : 'btn-group'}`} role="group">
                            <input type="radio" className="btn-check" name="additionalRobots" id="additionalRobots0" onClick={()=> setAdditionalRobots("0")} checked={additionalRobots == "0"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="additionalRobots0">0</label>

                            <input type="radio" className="btn-check" name="additionalRobots" id="additionalRobots1" onClick={()=> setAdditionalRobots("1")} checked={additionalRobots == "1"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="additionalRobots1">1</label>

                            <input type="radio" className="btn-check" name="additionalRobots" id="additionalRobots2" onClick={()=> setAdditionalRobots("2")} checked={additionalRobots == "2"} readOnly/>
                            <label className="btn btn-primary p-5" htmlFor="additionalRobots2">2</label>
                        </div>
                    </div>
                </div>
            </section>

            {/* export */}
            <section>
                <div className="container-fluid bg-secondary py-3 text-center display-5">
                    <p>Export</p>
                </div>
                <div className="mt-5 mx-auto text-center">
                    <QRCode
                        title="Export QR Code"
                        value={JSON.stringify(data)}
                        bgColor="white"
                        fgcolor="black"
                        size={384}
                        style={{border: "20px solid white"}}
                    />
                </div>
                <div className='mx-auto text-center mt-3 mb-5'>
                    <button className='btn btn-primary btn-lg' onClick={()=> checkMissing()} data-bs-toggle='modal' data-bs-target='#exampleModal'>Show missing data</button>
                </div>
                <div className="container text-center">
                    <p className='h2'>The following questions are OPTIONAL fields</p>
                    <p className='h3'>However, please still fill out the comments box</p>
                    <div>
                        <div className="row m-0 gy-5">
                            <div className="col-sm">
                                <p className='mb-2'>Slow or Fast</p>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="speed" id="speedSlow" onClick={()=> setSpeed("Slow")} checked={speed == "Slow"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="speedSlow">Slow</label>

                                    <input type="radio" className="btn-check" name="speed" id="speedFast" onClick={()=> setSpeed("Fast")} checked={speed == "Fast"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="speedFast">Fast</label>
                                </div>
                            </div>
                            <div className="col-sm">
                                <p className='mb-2'>Moved Pieces Between Nodes?</p>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="movedBetween" id="movedBetweenYes" onClick={()=> setMovedBetween("true")} checked={movedBetween == "true"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="movedBetweenYes">Yes</label>

                                    <input type="radio" className="btn-check" name="movedBetween" id="movedBetweenNo" onClick={()=> setMovedBetween("false")} checked={movedBetween == "false"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="movedBetweenNo">No</label>
                                </div>
                            </div>
                            <div className="col-sm">
                                <p className='mb-2'>Dropped Pieces While Cycling?</p>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="droppedCycling" id="droppedCyclingYes" onClick={()=> setDroppedCycling("true")} checked={droppedCycling == "true"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="droppedCyclingYes">Yes</label>

                                    <input type="radio" className="btn-check" name="droppedCycling" id="droppedCyclingNo" onClick={()=> setDroppedCycling("false")} checked={droppedCycling == "false"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="droppedCyclingNo">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 gy-5">
                            <div className="col-sm">
                                <p className='mb-2'>Long Time To Intake?</p>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="timeToIntake" id="timeToIntakeYes" onClick={()=> setTimeToIntake("true")} checked={timeToIntake == "true"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="timeToIntakeYes">Yes</label>

                                    <input type="radio" className="btn-check" name="timeToIntake" id="timeToIntakeNo" onClick={()=> setTimeToIntake("false")} checked={timeToIntake == "false"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="timeToIntakeNo">No</label>
                                </div>
                            </div>
                            <div className="col-sm">
                                <p className='mb-2'>Dropped When Hit?</p>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="droppedHit" id="droppedHitYes" onClick={()=> setDroppedHit("true")} checked={droppedHit == "true"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="droppedHitYes">Yes</label>

                                    <input type="radio" className="btn-check" name="droppedHit" id="droppedHitNo" onClick={()=> setDroppedHit("false")} checked={droppedHit == "false"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="droppedHitNo">No</label>
                                </div>
                            </div>
                            <div className="col-sm">
                                <p className='mb-2'>Triple Climb?</p>
                                <div className="btn-group" role="group">
                                    <input type="radio" className="btn-check" name="tripleClimb" id="tripleClimbYes" onClick={()=> setTripleClimb("true")} checked={tripleClimb == "true"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="tripleClimbYes">Yes</label>

                                    <input type="radio" className="btn-check" name="tripleClimb" id="tripleClimbNo" onClick={()=> setTripleClimb("false")} checked={tripleClimb == "false"} readOnly/>
                                    <label className="btn btn-primary p-5" htmlFor="tripleClimbNo">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='mb-1 h4'>Comment</p>
                        <p>i.e if they can intake from the grid, did they score many links, etc. etc.</p>
                        <textarea name="" id="" cols="30" rows="5" className='form-control' placeholder='Comment' onChange={e => setComment(e.target.value)} value={comment}></textarea>
                    </div>
                </div>
            </section>

            {/* clear */}
            <section className='mt-5'>
                <button className='btn btn-success container-fluid py-5' onClick={clear}><span className='display-4 text-white'>Clear</span></button>
            </section>
        </>
    )
}
