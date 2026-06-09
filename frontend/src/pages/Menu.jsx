import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuList from "../sections/MenuList";
import { useCart }
from "../contexts/CartContext";

function Menu() {
  const { addToCart } = useCart();
  
  return (
    <>
      <Navbar />
      <MenuList />
      <Footer />
    </>
  );
}

export default Menu;
