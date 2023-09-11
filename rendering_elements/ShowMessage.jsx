export default function ShowMessage({showme}) {
    console.log(showme)
  if (showme === "true") {
    return (
      <>
        <p>Ahora puedes leer este mensaje.</p>
      </>
    );
  }
}
