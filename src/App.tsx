import './App.css';
import { CardsContainer } from './Components/CardsContainer';
import { Customer } from './types/Customer';



function App() {

  // placeholder
  let customersTest = [] as Customer[];
  customersTest.push({
    name: "Test",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });

  customersTest.push({
    name: "Test2",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });

  customersTest.push({
    name: "Test24",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });
  customersTest.push({
    name: "Test",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });

  customersTest.push({
    name: "Test2",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });

  customersTest.push({
    name: "Test24",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });
  customersTest.push({
    name: "Test",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });

  customersTest.push({
    name: "Test2",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });

  customersTest.push({
    name: "Test24",
    logo: "https://a.mktgcdn.com/p/AS7vfs1HOJueXoCeCstfI9m0w5nzW4KpUnzqr7L80-g/480x170.png"
  });


  return (
   <CardsContainer customers={customersTest} />
  );
}

export default App;
