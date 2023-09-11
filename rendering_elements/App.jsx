import Greeting from "./Greeting";
import Showname from "./ShowName";
import ShowDate from "./ShowDate";
import ShowMessage from "./ShowMessage";


export default function App() {
  return (
    <>
      <Greeting text='Hola! Este es mi primer componente!' />
      <Showname />
      <ShowDate />
      <ShowMessage showme='true'/>
    </>
  );
}
