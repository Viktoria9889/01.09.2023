import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card'

function CardInfo(props) {
  const { title } = useParams()

  return (
    <Card bg={'Secondary'.toLowerCase()}
     className="text-center" >
                  {props.data
             .filter((item) => item.title === title)
             .map((item) => (
    <Card.Body>

      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
        {item.article}
      </Card.Text>

    </Card.Body>
          ))}
  </Card>
  )
}

export default CardInfo