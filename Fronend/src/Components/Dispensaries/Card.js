
import React, { useState ,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Nav from '../Navbar/Nav';
import { ImLocation } from 'react-icons/im';
import { RiTimeFill } from 'react-icons/ri';
import { MdMedicalServices } from 'react-icons/md';
import { MdLocalOffer } from 'react-icons/md';
import {FaRegComments } from 'react-icons/fa';

import "./card.css"
export default function Card() {
    const p = useParams();
    const[CardList, setCardList] = useState([])
    const [comment, setAddcomment] = useState([])
    const [commentone,setcommentone]= useState([])
    useEffect(async() => {
        const result = await axios.get(`http://localhost:5000/dates/${p.id}`);
        console.log(result.data,"result.data")
        setCardList(result.data);
        const aditcomment  = await axios.get(`http://localhost:5000/comment/${p.id}`);
        console.log(aditcomment)
        setcommentone(aditcomment.data);
     },[])
     const aditcomment = async() => {
        const res = await axios.post(`http://localhost:5000/comment/${p.id}`, {comment:comment});
        console.log("comment", res.data);
        setcommentone(res.data);
    }
       const chengecomment=(e)=>{
           setAddcomment(e.target.value)
       }
    return (
       <div >
           <Nav/>
     <div>

         <h1>{CardList[0] && CardList[0].name}</h1>
         <hr/>
         <br/>
               
               
                 <div>
                 <h1>عروضنا <MdLocalOffer/></h1>

                    <div  className="dd">

                <div className="polaroids"> <img className="nn" src={CardList[0] && CardList[0].phto[0]}   /></div>
                <div className="polaroids">  <img className="nn" src={CardList[0] && CardList[0].phto[1]}   /></div>
                 <div className="polaroids"> <img className="nn" src={CardList[0] && CardList[0].phto[2]}   /></div>
                 <h1> تعليقات <FaRegComments/> </h1><br/>
                 <div className="b">
                 <h1 className="description">{CardList.id}</h1><br/>
                 {commentone.map((elem) => {
                    return (
                        <div>
                       <h4> {elem} </h4>
                        </div>

                  ) })}
                  <div className="text">
                <textarea type="text" placeholder="Enter comment" onChange={(e) =>{chengecomment(e)}}></textarea>
                <button onClick={()=>{aditcomment()}}>add comment</button>
                
                  </div></div>
                 
                 </div>
                 </div>
                 <div>
                 
                 <hr/>

                 <div className="hh"> 
                 <div>
                 <h1> موقعنا <ImLocation/></h1>
                 <iframe src= {CardList[0] && CardList[0].location1} ></iframe>
                 <h4 >{CardList[0] && CardList[0].Location}</h4>
                 </div>
                 <div>
                 <h1> أوقات العمل <RiTimeFill/> </h1>
                 <ul>
                 <p>{CardList[0] && CardList[0].times[0]}</p>
                 <p>{CardList[0] && CardList[0].times[1]}</p>
                 </ul>
                 </div>
                 <div>
                 <h1> خدماتنا  <MdMedicalServices/></h1>
                 <ul>
                 <h4> {CardList[0] && CardList[0].service[0]}</h4>
                 <h4> {CardList[0] && CardList[0].service[1]}</h4>
                 <h4> {CardList[0] && CardList[0].service[2]}</h4>
                 <h4> {CardList[0] && CardList[0].service[3]}</h4>
                 <h4> {CardList[0] && CardList[0].service[4]}</h4>
                 </ul>
                 </div>
                
               
                 </div>
                </div><br/><br/><br/>
       </div>
   </div>
    );
}