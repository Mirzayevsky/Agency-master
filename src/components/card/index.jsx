import React, { useState } from "react";
import { CardWrapper,CardInner, CardImg, CardBtn, Name, Category} from "./style";

const Card = ({menuItem,deleteItem}) => {
    const [show,setShow] = useState(false)

    return(
        <CardWrapper>
             {menuItem.map((Item)=>(
                <CardInner key={Item.id} onClick={()=>setShow(true)}>
                    <CardImg src={Item.img}/>
                    <Name>{Item.name}</Name>
                    <Category>{Item.category}</Category>
                    {show ?<CardBtn onClick={()=>{deleteItem(Item.id)}}>delete</CardBtn>:""}
                </CardInner>
             ))}
        </CardWrapper>
    )
}
export default Card