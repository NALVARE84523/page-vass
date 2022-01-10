import logo from './logo.svg';
import '../src/Styles/App.scss';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import TextBanner from '../src/components/TextBanner';
import Form from '../src/components/Form';
import PreFooter from '../src/components/PreFooter';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <TextBanner></TextBanner>
      <Form></Form>
      <PreFooter></PreFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;
