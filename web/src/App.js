import { useEffect, useState } from 'react';

import Header from './components/Header';
import Investments from './components/Investments';
import Main from './components/Main';
import { getInvestments } from './services/investments';

export default function App() {
  const [founds, setFounds] = useState([])

  useEffect(() => {
    (async () => {
      let data = await getInvestments();
      setFounds(data)
    })()
  },[])

  return (
    <>
      <Header isHome title="react investiments" />

      <Main>
        <Investments founds={founds}/>
      </Main>
    </>
  );
}
