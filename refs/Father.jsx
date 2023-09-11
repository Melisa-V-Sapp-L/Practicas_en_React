import Formulary from "./Formulary"

const backgroundImageURL =
  "https://i.ibb.co/nw2dgzb/db65202d119dd7360769f732f042ab54.jpg"
const backgroundImageURL1 =
  "https://i.ibb.co/9TKG2tm/40260b226f3b0c204411fe302f34f7f7.jpg"

const box = {
  backgroundImage: `url(${backgroundImageURL})`,
  backgroundPosition: " center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundAttachment: 'contain',
  width: "100%",
  height: "400px",
}
const box1 = {
  backgroundImage: `url(${backgroundImageURL1})`,
  backgroundPosition: " center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundAttachment: 'contain',
  width: "100%", 
  height: "600px",
  color:'white'
}


export const Father = () => {
 return(
    <>
      <div style={box}></div>
      <div style={box1}>
        <div>
          <center>
            <Formulary />
          </center>
        </div>
      </div>
    </>
  )
  
}
