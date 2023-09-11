
import Title from './Title'
import Text from './Text'
import List from './List'
import Link from './Link'


function Loading() {
    const view = true
    if (view===true) {
      return <>
      <Title />
      <Text />
      <List listItem=" Observar el HTML 🔍"/>
      <List listItem=" Pensar en cómo puedo extraer cada trozo en componentes ✂"/>
      <List listItem=" Usarlos, o mejor dicho, reusarlos en React ♻"/>
      <Link />
        
    </>   
    }
      return <>
        <h1>Loading...</h1>
    </>
     
}

export default Loading