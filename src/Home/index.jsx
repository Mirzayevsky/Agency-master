import React, { useState } from "react";
import {Header, HomeWraper, Title,Text, TextBox, CardSection } from "./styles";
import Card from "../components/card/index"
import {data} from "../data"
import Button from "../components/filterButton/index"

const Home = () => {
    const {buttons,cards} = data
    const [menuItem, setMenuItem] = useState(cards);

    const filter = (button) => {
      if(button.toLowerCase() === 'all'){
        setMenuItem(cards);
        return;
      }
      const filteredData = cards.filter(item => item.category.toLowerCase().trim() ===  button.toLowerCase().trim());
      setMenuItem(filteredData)
    }

    const deleteItem = (id) => {
      const userArray = menuItem.filter(item => item.id !== id)
      setMenuItem(userArray)
    }

    return(
        <HomeWraper>
                <Header>
                  <TextBox>
                    <Title>Portfolio</Title>
                    <Text>Agency provides a full services range including technical skills,design,business understanding</Text>
                  </TextBox>
                </Header>
                <CardSection>
                 <Button button={buttons} filter={filter} />
                 <Card menuItem={menuItem} deleteItem={deleteItem}/>
                </CardSection>
        </HomeWraper>
    )
}
export default Home;