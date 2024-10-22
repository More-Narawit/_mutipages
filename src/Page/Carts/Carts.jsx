import './Carts.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Carts({ carts, setCarts }) {
    return (
        <div className='carts-container'>
            <div className='carts-items-container'>
                {carts.map((cart) => {

                    return (
                        <Card style={{ width: '18rem', height: '32rem' }} key={cart.id}>
                            <Card.Img variant="top" src={cart.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text>
                                    <b className='price'>${cart.price.toFixed(2)}</b>
                                </Card.Text>
                                <span className='remove-button'>
                                <Button variant="outline-danger" onClick={() => setCarts(carts.filter((c) => c.id !== cart.id))}>Remove from Cart</Button>
                                </span>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <div className='carts-total-price-container'>
                <h4>Items: {carts.length} Items - Total Price: ${carts.reduce((prev, cart) => {
                    return prev + cart.price
                }, 0).toFixed(2)}</h4>
                <button className='btn btn-warning'>Checkout</button>
            </div>
        </div>
    )
}

export default Carts