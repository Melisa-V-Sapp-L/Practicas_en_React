
export function Son({say}) {

    const message='Hola a todos!'

    const onPress = (e) => {
        e.preventDefault();
        console.log({message});
      }
    
    return <>
    <button onClick={onPress}>
        {say}
    </button>
    </>
}

