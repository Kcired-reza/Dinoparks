import dinoparksLogo from './dinoparks-logo.png'
import './App.css';
import GridItem from './components/GridItem'
// const express = require('express')

function App() {

  // Stores months to be displayed
  const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];

  const d = new Date();
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  


  return (
    <div className="App">
      <div className='App-container'>
        <img src={dinoparksLogo} alt= "Dinoparks logo" />{/*Displays logo*/}
        <header className='App-header'>{/*Container of the form*/}
          <div className='App-container-headings'>
            <h1 className='App-container-headings-head'>Park Zones</h1>{/*Displays 'Park Zones heading'*/}
            <h3 className='App-container-headings-date'>{day} {month} {year}</h3>{/*Displays the current date*/}
          </div>
          <div id='grid' className='Grid-container'>{/*Container of the grid and its items*/}
            {/*grid items that change according to data*/}
            <GridItem gridLabel='1'/>  <GridItem id='A1'/><GridItem id='B1' /><GridItem id='C1' /><GridItem id='D1' /><GridItem id='E1' /><GridItem id='F1' /><GridItem id='G1' /><GridItem id='H1' /><GridItem id='I1' /><GridItem id='J1' /><GridItem id='K1' /><GridItem id='L1' /><GridItem id='M1' /><GridItem id='N1' /><GridItem id='O1' /><GridItem id='P1' /><GridItem id='Q1' /><GridItem id='R1' /><GridItem id='S1' /><GridItem id='T1'/><GridItem id='U1'/><GridItem id='V1'/><GridItem id='W1'/><GridItem id='X1'/><GridItem id='Y1'/><GridItem id='Z1'/>
            <GridItem gridLabel='2'/>  <GridItem id='A2'/><GridItem id='B1' /><GridItem id='C2' /><GridItem id='D2' /><GridItem id='E2' /><GridItem id='F2' /><GridItem id='G2' /><GridItem id='H2' /><GridItem id='I2' /><GridItem id='J2' /><GridItem id='K2' /><GridItem id='L2' /><GridItem id='M2' /><GridItem id='N2' /><GridItem id='O2' /><GridItem id='P2' /><GridItem id='Q2' /><GridItem id='R2' /><GridItem id='S2' /><GridItem id='T2'/><GridItem id='U2'/><GridItem id='V2'/><GridItem id='W2'/><GridItem id='X2'/><GridItem id='Y2'/><GridItem id='Z2'/>
            <GridItem gridLabel='3'/>  <GridItem id='A3'/><GridItem id='B3' /><GridItem id='C3' /><GridItem id='D3' /><GridItem id='E3' /><GridItem id='F3' /><GridItem id='G3' /><GridItem id='H3' /><GridItem id='I3' /><GridItem id='J3' /><GridItem id='K3' /><GridItem id='L3' /><GridItem id='M3' /><GridItem id='N3' /><GridItem id='O3' /><GridItem id='P3' /><GridItem id='Q3' /><GridItem id='R3' /><GridItem id='S3' /><GridItem id='T3'/><GridItem id='U3'/><GridItem id='V3'/><GridItem id='W3'/><GridItem id='X3'/><GridItem id='Y3'/><GridItem id='Z3'/>
            <GridItem gridLabel='4'/>  <GridItem id='A4'/><GridItem id='B4' /><GridItem id='C4' /><GridItem id='D4' /><GridItem id='E4' /><GridItem id='F4' /><GridItem id='G4' /><GridItem id='H4' /><GridItem id='I4' /><GridItem id='J4' /><GridItem id='K4' /><GridItem id='L4' /><GridItem id='M4' /><GridItem id='N4' /><GridItem id='O4' /><GridItem id='P4' /><GridItem id='Q4' /><GridItem id='R4' /><GridItem id='S4' /><GridItem id='T4'/><GridItem id='U4'/><GridItem id='V4'/><GridItem id='W4'/><GridItem id='X4'/><GridItem id='Y4'/><GridItem id='Z4'/>
            <GridItem gridLabel='5'/>  <GridItem id='A5'/><GridItem id='B5' /><GridItem id='C5' /><GridItem id='D5' /><GridItem id='E5' /><GridItem id='F5' /><GridItem id='G5' /><GridItem id='H5' /><GridItem id='I5' /><GridItem id='J5' /><GridItem id='K5' /><GridItem id='L5' /><GridItem id='M5' /><GridItem id='N5' /><GridItem id='O5' /><GridItem id='P5' /><GridItem id='Q5' /><GridItem id='R5' /><GridItem id='S5' /><GridItem id='T5'/><GridItem id='U5'/><GridItem id='V5'/><GridItem id='W5'/><GridItem id='X5'/><GridItem id='Y5'/><GridItem id='Z5'/>
            <GridItem gridLabel='6'/>  <GridItem id='A6'/><GridItem id='B6' /><GridItem id='C6' /><GridItem id='D6' /><GridItem id='E6' /><GridItem id='F6' /><GridItem id='G6' /><GridItem id='H6' /><GridItem id='I6' /><GridItem id='J6' /><GridItem id='K6' /><GridItem id='L6' /><GridItem id='M6' /><GridItem id='N6' /><GridItem id='O6' /><GridItem id='P6' /><GridItem id='Q6' /><GridItem id='R6' /><GridItem id='S6' /><GridItem id='T6'/><GridItem id='U6'/><GridItem id='V6'/><GridItem id='W6'/><GridItem id='X6'/><GridItem id='Y6'/><GridItem id='Z6'/>
            <GridItem gridLabel='7'/>  <GridItem id='A7'/><GridItem id='B7' /><GridItem id='C7' /><GridItem id='D7' /><GridItem id='E7' /><GridItem id='F7' /><GridItem id='G7' /><GridItem id='H7' /><GridItem id='I7' /><GridItem id='J7' /><GridItem id='K7' /><GridItem id='L7' /><GridItem id='M7' /><GridItem id='N7' /><GridItem id='O7' /><GridItem id='P7' /><GridItem id='Q7' /><GridItem id='R7' /><GridItem id='S7' /><GridItem id='T7'/><GridItem id='U7'/><GridItem id='V7'/><GridItem id='W7'/><GridItem id='X7'/><GridItem id='Y7'/><GridItem id='Z7'/>
            <GridItem gridLabel='8'/>  <GridItem id='A7'/><GridItem id='B8' /><GridItem id='C8' /><GridItem id='D8' /><GridItem id='E8' /><GridItem id='F8' /><GridItem id='G8' /><GridItem id='H8' /><GridItem id='I8' /><GridItem id='J8' /><GridItem id='K8' /><GridItem id='L8' /><GridItem id='M8' /><GridItem id='N8' /><GridItem id='O8' /><GridItem id='P8' /><GridItem id='Q8' /><GridItem id='R8' /><GridItem id='S8' /><GridItem id='T8'/><GridItem id='U8'/><GridItem id='V8'/><GridItem id='W8'/><GridItem id='X8'/><GridItem id='Y8'/><GridItem id='Z8'/>
            <GridItem gridLabel='9'/>  <GridItem id='A9'/><GridItem id='B9' /><GridItem id='C9' /><GridItem id='D9' /><GridItem id='E9' /><GridItem id='F9' /><GridItem id='G9' /><GridItem id='H9' /><GridItem id='I9' /><GridItem id='J9' /><GridItem id='K9' /><GridItem id='L9' /><GridItem id='M9' /><GridItem id='N9' /><GridItem id='O9' /><GridItem id='P9' /><GridItem id='Q9' /><GridItem id='R9' /><GridItem id='S9' /><GridItem id='T9'/><GridItem id='U9'/><GridItem id='V9'/><GridItem id='W9'/><GridItem id='X9'/><GridItem id='Y9'/><GridItem id='Z9'/>
            <GridItem gridLabel='10'/> <GridItem id='A10'/><GridItem id='B10'/><GridItem id='C10' /><GridItem id='D10' /><GridItem id='E10' /><GridItem id='F10' /><GridItem id='G10' /><GridItem id='H10' /><GridItem id='I10' /><GridItem id='J10' /><GridItem id='K10' /><GridItem id='L10' /><GridItem id='M10' /><GridItem id='N10' /><GridItem id='O10' /><GridItem id='P10' /><GridItem id='Q10' /><GridItem id='R10' /><GridItem id='S10'/><GridItem id='T10'/><GridItem id='U10'/><GridItem id='V10'/><GridItem id='W10'/><GridItem id='X10'/><GridItem id='Y10'/><GridItem id='Z10'/>
            <GridItem gridLabel='11'/> <GridItem id='A11'/><GridItem id='B11' /><GridItem id='C11' /><GridItem id='D11' /><GridItem id='E11' /><GridItem id='F11' /><GridItem id='G11' /><GridItem id='H11' /><GridItem id='I11' /><GridItem id='J11' /><GridItem id='K11' /><GridItem id='L11' /><GridItem id='M11' /><GridItem id='N11' /><GridItem id='O11' /><GridItem id='P11' /><GridItem id='Q11' /><GridItem id='R11' /><GridItem id='S11'/><GridItem id='T11'/><GridItem id='U11'/><GridItem id='V11'/><GridItem id='W11'/><GridItem id='X11'/><GridItem id='Y11'/><GridItem id='Z11'/>
            <GridItem gridLabel='12'/> <GridItem id='A12'/><GridItem id='B12' /><GridItem id='C12' /><GridItem id='D12' /><GridItem id='E12' /><GridItem id='F12' /><GridItem id='G12' /><GridItem id='H12' /><GridItem id='I12' /><GridItem id='J12' /><GridItem id='K12' /><GridItem id='L12' /><GridItem id='M12' /><GridItem id='N12' /><GridItem id='O12' /><GridItem id='P12' /><GridItem id='Q12' /><GridItem id='R12' /><GridItem id='S12'/><GridItem id='T12'/><GridItem id='U12'/><GridItem id='V12'/><GridItem id='W12'/><GridItem id='X12'/><GridItem id='Y12'/><GridItem id='Z12'/>
            <GridItem gridLabel='13'/> <GridItem id='A13'/><GridItem id='B13' /><GridItem id='C13' /><GridItem id='D13' /><GridItem id='E13' /><GridItem id='F13' /><GridItem id='G13' /><GridItem id='H13' /><GridItem id='I13' /><GridItem id='J13' /><GridItem id='K13' /><GridItem id='L13' /><GridItem id='M13' /><GridItem id='N13' /><GridItem id='O13' /><GridItem id='P13' /><GridItem id='Q13' /><GridItem id='R13' /><GridItem id='S13'/><GridItem id='T13'/><GridItem id='U13'/><GridItem id='V13'/><GridItem id='W13'/><GridItem id='X13'/><GridItem id='Y13'/><GridItem id='Z13'/>
            <GridItem gridLabel='14'/> <GridItem id='A14'/><GridItem id='B14' /><GridItem id='C14' /><GridItem id='D14' /><GridItem id='E14' /><GridItem id='F14' /><GridItem id='G14' /><GridItem id='H14' /><GridItem id='I14' /><GridItem id='J14' /><GridItem id='K14' /><GridItem id='L14' /><GridItem id='M14' /><GridItem id='N14' /><GridItem id='O14' /><GridItem id='P14' /><GridItem id='Q14' /><GridItem id='R14' /><GridItem id='S14'/><GridItem id='T14'/><GridItem id='U14'/><GridItem id='V14'/><GridItem id='W14'/><GridItem id='X14'/><GridItem id='Y14'/><GridItem id='Z14'/>
            <GridItem gridLabel='15'/> <GridItem id='A15'/><GridItem id='B15' /><GridItem id='C15' /><GridItem id='D15' /><GridItem id='E15' /><GridItem id='F15' /><GridItem id='G15' /><GridItem id='H15' /><GridItem id='I15' /><GridItem id='J15' /><GridItem id='K15' /><GridItem id='L15' /><GridItem id='M15' /><GridItem id='N15' /><GridItem id='O15' /><GridItem id='P15' /><GridItem id='Q15' /><GridItem id='R15' /><GridItem id='S15'/><GridItem id='T15'/><GridItem id='U15'/><GridItem id='V15'/><GridItem id='W15'/><GridItem id='X15'/><GridItem id='Y15'/><GridItem id='Z15'/>
            <GridItem gridLabel='16'/> <GridItem id='A16'/><GridItem id='B16' /><GridItem id='C16' /><GridItem id='D16' /><GridItem id='E16' /><GridItem id='F16' /><GridItem id='G16' /><GridItem id='H16' /><GridItem id='I16' /><GridItem id='J16' /><GridItem id='K16' /><GridItem id='L16' /><GridItem id='M16' /><GridItem id='N16' /><GridItem id='O16' /><GridItem id='P16' /><GridItem id='Q16' /><GridItem id='R16' /><GridItem id='S16'/><GridItem id='T16'/><GridItem id='U16'/><GridItem id='V16'/><GridItem id='W16'/><GridItem id='X16'/><GridItem id='Y16'/><GridItem id='Z16'/>
            <GridItem gridLabel=''/>   <GridItem id='A'gridLabel='A'/><GridItem gridLabel='B'/><GridItem gridLabel='C'/><GridItem gridLabel='D'/><GridItem gridLabel='E'/><GridItem gridLabel='F'/><GridItem gridLabel='G'/><GridItem gridLabel='H'/><GridItem gridLabel='I'/><GridItem gridLabel='J'/><GridItem gridLabel='K'/><GridItem gridLabel='L'/><GridItem gridLabel='M'/><GridItem gridLabel='N'/><GridItem gridLabel='O'/><GridItem gridLabel='P'/><GridItem gridLabel='Q'/><GridItem gridLabel='R'/><GridItem gridLabel='S'/><GridItem gridLabel='T'/><GridItem gridLabel='U'/><GridItem gridLabel='V'/><GridItem gridLabel='W'/><GridItem gridLabel='X'/><GridItem gridLabel='Y'/><GridItem gridLabel='Z'/>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
