import React, { useState } from 'react';
import Depoimento from './componente/Depoimentos';
import doce from './assets/cat.jpg';
import erotic from './assets/cat1.jpg';



const App = () => {

 const [mudar, setMudar] = useState(0);
 const [mudar1, setMudar1] = useState(0);

 // cat 1
 const [nome, setNome] = useState('');
 const [nomes, setNomes] = useState([]);
 const add = () => {
   nomes.splice(0, 1, nome);
    setNome('');
    
 }

  return (
    <div className="App">
      
      <div className="caixaimg">

        <Depoimento nome={nomes[0]} foto={doce}/>
      </div>

      <div className="caixa">
          <input className="caixatext" value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
          <button className="meio" onClick={add}>Add</button>
          <button onClick={() => setMudar1(mudar1+1)}>&#10084;</button>
          <p className="tex">{mudar1} Curtida</p>
      </div>
      
    </div>
  );
}

export default App;
