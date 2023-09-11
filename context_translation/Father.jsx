import Maintext from "./MainText";

const backgroundImageURL =
  "https://i.ibb.co/rwpJXL1/a6fc3d5a909b95e98a39ae5ddc3ba74d.jpg";

const box = {
  padding: "50% 0px 0px 0px",
  backgroundImage: `url(${backgroundImageURL})`,
  backgroundPosition: " center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "contain",
  width: "100%",
  height: "1000px",
};

function Father() {
  return (
    <>
      <div style={box}>
        <center>
          <h2>Vamos a traducir....</h2>
          <h2>Let's translate....</h2>
          <Maintext></Maintext>
        </center>
      </div>
    </>
  );
}

export default Father;
