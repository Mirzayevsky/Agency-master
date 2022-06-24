import styled from "styled-components";

export const CardWrapper = styled.div`
width: 90%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
@media only  screen and (max-width: 600px) {
    justify-content: center;
}
`;
export const CardInner = styled.div`
height: 340px;
width: 280px;
border: 2px solid green;
margin: 20px 0;
position: relative;
cursor: pointer;
`;
export const Name = styled.div`
color: #fff;
font-size: 26px;
font-family: Epilogue,sans-serif;
font-weight: 500;
position: absolute;
bottom: 25%;
left: 10%;
`;
export const Category = styled.div`
color: #222;
font-size: 14px;
font-family: Epilogue,sans-serif;
font-weight: 500;
position: absolute;
background-color: #fff;
border-radius: 10px;
padding: 3px 6px;
left: 10%;
bottom: 40%;
`;
export const CardImg = styled.img`
height: 100%;
width: 100%;
position: absolute;
`;
export const CardBtn = styled.button`

height: 34px;
width: 100px;
color: #222;
font-family: Epilogue,sans-serif;
background-color: #fff;
position: absolute;
bottom: 10px;
border-radius: 10px;
right: 20px;
cursor: pointer;
&:hover{

    transition: 0.5s;
    background-color: #f20f20;
}
`;

