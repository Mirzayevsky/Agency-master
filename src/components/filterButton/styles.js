import styled from "styled-components";
export const Container = styled.div`
 width: 40%;
 margin: 60px auto;
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media only screen and (max-width:700px){
    width: 60%;
    margin: 40px auto;
 }

 @media only screen and (max-width:578px){
    width: 70%;
    margin: 30px auto;
    flex-direction: column;
    border: 1px solid #F3D1BF;
    width: 90%;
    height: 38px;
    margin-bottom: 100px;
 }

 .filter-btn {
 font-size: 16px;
 font-family: Epilogue,sans-serif;
 font-weight: 500;
 padding: 10px;
 cursor: pointer;
 
 
 @media only screen and (max-width:578px){
   background-color: #fff;
   display: none;
   padding: 0;
   margin: 5px 0;
   background-color: #fff;
   width: 100%;
   text-align: center;
   padding: 8px 0;
   border-radius: 5px;
   &:nth-child(1){
    display: block;
   }
   &:hover{
    display: block !important;
   }
   
 }
 } 
`;
export const FilterBtn = styled.div`
 font-size: 16px;
 font-family: Epilogue,sans-serif;
 font-weight: 500;
 padding: 10px;
 cursor: pointer;
 background-color: #fff;
 
 @media only screen and (max-width:578px){
   display: none;
   padding: 0;
   margin: 5px 0;
   background-color: #fff;
   width: 100%;
   text-align: center;
   padding: 8px 0;
   border-radius: 5px;
   &:nth-child(1){
    display: block;
}
   
 }
 
 
`;