import img1 from './assets/macBook.jpg';
import img2 from './assets/iphone.webp';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice'; 
import {calculatePrice} from './cartSlice';
import img3 from './assets/black-shoes.webp';
import img4 from './assets/ps4.jpg';
// Import the addToCart action creator 

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "iPhone 12 pro",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 290,
      imgSrc: img3,
      id: "sabcdefkjkkjkj",
    },
    {
      name: "ps4",
      price: 600,
      imgSrc: img4,
      id: "sabcdefkjkkjkj",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch(addToCart(options)); // Use addToCart from cartSlice
    toast.success("Added To Cart");
    dispatch(calculatePrice());
   
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
