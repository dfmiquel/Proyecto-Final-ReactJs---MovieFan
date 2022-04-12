import { Link } from "react-router-dom";
import "./itemDetail.css";
import { Card, Avatar, Space, Button, Typography } from '@douyinfe/semi-ui';

export const ItemDetail = ({ item }) => {
  return (
    <div className="cardContainer">
      <Card className='card-body'
        style={{ maxWidth: 360 }}
        title={
          <Card.Meta
            title={item.description}
          />
        }
        cover={
          <img className='card-img-top' variant="top"
            alt={item.description}
            src={item.pictureUrl}
          />
        }
        footerLine={true}
        footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
        footer={
          <Space>
            <Link to={`/tienda`}>
              <Button theme='solid' type='primary'>Seguir Comprando</Button>
            </Link>
          </Space>
        }
      >
        <label className='label'>Precio ${item.price}.-</label>
        {/* <Typography.Text mark strong size='normal'>{description}</Typography.Text> */}
      </Card>
    </div>
  );
};
