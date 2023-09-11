import TextContext from "./TextContext";
import Text1 from "./Text1";
import Button from "./Button";

const text2 = {
  p1: "In Spanish and in English",
  p2: "Keep calm and click",
};

function MainText() {
  return (
    <>
      <Text1 />

      <TextContext.Provider value={text2}>
        <Button />
      </TextContext.Provider>
    </>
  );
}

export default MainText;
