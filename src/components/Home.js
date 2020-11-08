import React from"react";
import {Link} from "react-router-dom"
import {Card,CardImg, CardTitle, CardSubtitle, Button, CardBody} from "reactstrap";


const Home = (props) => {
  console.log ("Home props :" , props);
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 "alt="pizza"/>
      <h1>Your favorite food, delivered while coding</h1>
      <Link to ="/pizza"><Button color = "primary" >Pizza?</Button></Link>

      <div>
        <h2>Food Delivery in Gotham City</h2>

        <Card>
          <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRwS2btqK21wqvtneFOmL6VLshkN8_7YRxcg&usqp=CAU" alt = "Chipotle's Mexican Grill" />
          <CardBody>
            <CardTitle>Chipotle's Mexican Grill</CardTitle>
            <CardSubtitle> $ - Mexican - Fast Food - Grill</CardSubtitle>
            <Button>20-30min</Button> <Button>$5.99 Delivery Fee</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%"src="https://pixy.org/src/77/775101.jpg" alt = "McDonald's" />
          <CardBody>
            <CardTitle>McDonald's</CardTitle>
            <CardSubtitle> $ - American - Fast Food - Burgers</CardSubtitle>
            <Button>20-30min</Button> <Button>$5.99 Delivery Fee</Button>
          </CardBody>
        </Card>

        <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Sweetgreen_Storefront_%2848237024662%29.jpg" alt="SweetGreen" />
                <CardBody>
                    <CardTitle>SweetGreen</CardTitle>
                    <CardSubtitle>$ - Healthy - Salads</CardSubtitle>
                    <Button>30-45 min</Button><Button>$4.99 Delivery Fee</Button>
                </CardBody>
                </Card>

                <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Starbucks_logo.jpg" alt="StarBucks" />
                <CardBody>
                    <CardTitle>StarBucks</CardTitle>
                    <CardSubtitle>$ - Cafe - Coffee & Tea - Breakfast & Brunch</CardSubtitle>
                    <Button>10-20 min</Button><Button>$3.99 Delivery Fee</Button>
                </CardBody>
                </Card>

        
      </div>
    </div>
  )
}

export default Home; 