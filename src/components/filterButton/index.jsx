import { Container, FilterBtn } from "./styles";

function Button({button, filter}) {
    return (
        <Container>
            {
                button.map((Item,index)=>{
                    return <div className="filter-btn" key={index} type="button" onClick={()=> filter(Item)}>{Item}</div>
                })
            }
        </Container>
    )
}

export default Button;