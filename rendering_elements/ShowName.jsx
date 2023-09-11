export default function Showname() {
  
  const user = {
    name: "Melisa Vanesa Sapp Ledesma",
    signo: "piscis",
    mascota: "perra",
    comida: "sushi",
  };

  return (
    <>
      <p>Mi nombre es {user.name}</p>
      <p>Soy del signo {user.signo}</p>
      <p>Tengo un {user.mascota} llamada Brisa</p>
      <p>Y me gusta comer {user.comida}</p>
    </>
  );
}
