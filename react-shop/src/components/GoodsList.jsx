import PropTypes from 'prop-types';
import { GoodsItem } from './GoodsItem';

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      mainId: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      displayDescription: PropTypes.string.isRequired,
      price: PropTypes.shape({
        finalPrice: PropTypes.number.isRequired,
      }).isRequired,
      displayAssets: PropTypes.arrayOf(
        PropTypes.shape({
          full_background: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
  addToBasket: PropTypes.func.isRequired,
};

function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map(item => (
        <GoodsItem key={item.mainId} 
                   id={item.mainId}
                   name={item.displayName}
                   description={item.displayDescription}
                   price={item.price.finalPrice}
                   full_background={item.displayAssets[0].full_background}
                   addToBasket={addToBasket} 
        />
      ))}
    </div>
  );
}

export { GoodsList };
