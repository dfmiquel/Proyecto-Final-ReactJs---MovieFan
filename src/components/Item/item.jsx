// import { Card, Button } from "react-bootstrap";
import { Card, Avatar, Space, Button, Typography } from '@douyinfe/semi-ui';
import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ id, title, price, image, description}) => {
  return (

    <Card
    style={{ maxWidth: 360 }}
    title={
        <Card.Meta 
            title={title} 
            avatar={
                <Avatar 
                    alt='Card meta img'
                    size="default"
                    src={image}
                />
            }
        />
    }
    headerExtraContent={
        <Typography.Text link>
            More
        </Typography.Text>
    }
    cover={ 
        <img 
            alt={title} 
            src={image}
        />
    }
    footerLine={ true }
    footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
    footer={
        <Space>
          <Link to={`/item/${id}`}>
            {/* <Button theme='borderless' type='primary'>Featured Case</Button> */}
            <Button theme='solid' type='primary'>Ver mas detalles</Button>
          </Link>
        </Space>
    }
>
    {description} 
</Card>





    // <Card className="cardContainer">
    //   <Card.Img variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Link to={`/item/${id}`}>
    //       <Button variant="primary">Ver mas detalles</Button>
    //     </Link>
    //   </Card.Body>
    // </Card>
  );
};
