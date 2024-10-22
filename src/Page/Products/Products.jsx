import './Products.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Products({ products, carts, setCarts }) {
    return (
        <div className='products-container'>
            <div className='products-items-container'>
                {products.map((product) => {

                    return (
                        <Card style={{ width: '18rem', height: '32rem' }} key={product.id}>
                            <Card.Img variant="top" src={product.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    <b className='price'>${product.price.toFixed(2)}</b>
                                </Card.Text>
                                <span className='add-button'>
                                    {carts.find((cart) => cart.id === product.id) ? (
                                        <span className='badge bg-success'>Added</span>
                                    ) : (
                                        <Button variant="outline-primary" onClick={() => setCarts([...carts, product])}>Add to Cart</Button>
                                    )}
                                </span>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Products