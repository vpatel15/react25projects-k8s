import * as React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LazyGrid from './components/lazy-grid';
import NestedMenu from './components/nested-menu';
import menus from './components/nested-menu/data';
import QRCodeGenerator from './components/qr-code-generator';
import ThemeSwitcher from './components/theme-switcher';
import ScrollProgress from './components/scroll-progress';
import TabsList from './components/tabs/tabs-list';
import ModalContainer from './components/modal/modal-container';
import GithubProfile from './components/github-profile';
import FedEconomicGraph from './components/fed-economic-graph';
import SearchAutocomplete from './components/search-autocomplete';
import AppContextProvider from './context/index';

function App() {
  return (
    <div className="App">
      <p>React 25 Projects</p>
      <AppContextProvider>
        <Accordion />
        <RandomColor />
        <StarRating totalStars={5} />
        <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />
        <LazyGrid />
        <NestedMenu menus={menus} />
        <QRCodeGenerator />
        <ThemeSwitcher />
        <ScrollProgress url={'https://dummyjson.com/products?limit=100'} />
        <TabsList />
        <ModalContainer />
        <GithubProfile />
        <FedEconomicGraph />
        <SearchAutocomplete />
      </AppContextProvider>
    </div>
  );
}

export default App;
