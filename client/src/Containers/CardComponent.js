import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

function CardComponent(props) {
    return (

            <Card>
                <Card.Body>
                    {props.data.map((item) => (
                        <div>
                            <h3>{item.title}</h3>
                            <Alert key={'primary'} variant={'primary'}>
                                <Link to={`/info/${item.title}/`}>Дивитись статтю</Link>
                            </Alert>
                        </div>
                    ))}
                </Card.Body>
            </Card>
    )
}

export default CardComponent