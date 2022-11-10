import {Download, Features, SectionWrapper} from './components';
import assets from './assets';



const App = () => {
  return (
    <>
    <SectionWrapper
    title="You own store of Nifty NFTs. Start Selling & Growing"
    description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
    showBtn
    mockupImg={assets.homeHero} //макет изображения
    banner="banner"
    />
    </>
  );
};

export default App;
