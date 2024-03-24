import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShopContext } from '../context';

const goodsItemProps = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  full_background: PropTypes.string.isRequired
};

GoodsItem.propTypes = {
  ...goodsItemProps,
};


function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background
  } = props;
   
  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem, goodsItemProps };
