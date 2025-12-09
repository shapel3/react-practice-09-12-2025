import Image from "./components/image/image";
import Product from "./components/Product/Product";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return <>
  <UserProfile name='Shapel' age={15}  email='shapel@gmail.com' />
  {/* <UserProfile name='Tom' age='23' email='tom@gmail.com' />
  <UserProfile name='Alex' age='35' email='alexl@gmail.com' /> */}
 {/* < Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR96bi1iH6GWM1wRmQezQHTqC30PPUaBNVmg&s' url="picture"/> */}
 <table>
  <tr>
    <th>title</th>
    <th>price</th>
    <th>quantity</th>
  </tr>
  <Product title="Milk" price={32} quantity={1} />
 </table>
  </>;
  
}

export default App;
