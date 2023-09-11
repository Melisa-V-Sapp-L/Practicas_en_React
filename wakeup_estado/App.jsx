import Text from "./Text";

export default function App() {
  const backgroundImageURL =
    "https://i.ibb.co/qm4McZr/bcda39788878a0ca58f7e4815e8b5a2b.jpg";

  const box = {
    padding: "7% 0px 0px 10%",
    backgroundImage: `url(${backgroundImageURL})`,
    backgroundPosition: " center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundAttachment: "contain",
    width: "50%",
    height: "300px",
  };

  


  return (
    <>
      <div style={box}>
        
          <Text />
        
      </div>
    </>
  );
}
