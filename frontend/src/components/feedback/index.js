// import React from './node_modules/react';

// const Feed = () => {


//     return(
//         <h1>a</h1>
//     )
// }

// export default Feed;


import React from 'react';
import { Link } from 'react-router-dom';
import Hashtag from '../../assets/img/etechashtag.png';
import { Container } from './styles';



const Feedback = () => (
    <Container>
     <div className="header">
        <img src={Hashtag}></img>
    </div>
    <div className="main">
    <h1>Se quiser, agora você pode deixar um comentário para nós, com algo que possa contribuir para nosso crescimento. Esse espaço é seu!</h1>
    <textarea rows={20} cols={70}>
        
    </textarea>
    
    </div>
    <div className="footer">
        <Link to='#'><button className="voltar" >Voltar</button></Link>
        <Link to='#'><button >Continuar</button></Link>
    </div>
    </Container>
)
export default Feedback;