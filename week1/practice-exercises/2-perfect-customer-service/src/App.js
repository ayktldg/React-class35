import "./App.css";
import Guarantee from "./Guarantee";
import imgDelivery from "./assets/exercises/f-delivery.png";
import imgCoin from "./assets/exercises/coin.png";
import imgChat from "./assets/exercises/chat.png";

function App() {
  const guarantee = {
    delivery: {
      img: imgDelivery,
      title: "Free Shipping",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      At deleniti consectetur qui quos doloremque, non esse beatae.
      `,
    },
    coin: {
      img: imgCoin,
      title: "100% Money Back",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      At deleniti consectetur qui quos doloremque.
      `,
    },
    chat: {
      img: imgChat,
      title: "Online Support 24 / 7",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      At deleniti consectetur qui quos doloremque, non esse.
      `,
    },
  };
  return (
    <div className="App">
      <Guarantee
        img={guarantee.delivery.img}
        title={guarantee.delivery.title}
        description={guarantee.delivery.description}
      />
      <Guarantee
        img={guarantee.coin.img}
        title={guarantee.coin.title}
        description={guarantee.coin.description}
      />
      <Guarantee
        img={guarantee.chat.img}
        title={guarantee.chat.title}
        description={guarantee.chat.description}
      />
    </div>
  );
}

export default App;
