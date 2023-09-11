export default function ShowDate() {
  const actualdate = new Date();
  
  const day = actualdate.getDate();
  const month = actualdate.getMonth() + 1;
  const year = actualdate.getFullYear();
  
  return (
    <>
      <p>
        Hoy es el día <span>{day}</span> del mes <span>{month}</span> del año <span>{year}</span>.
      </p>
      
    </>
  );
}
