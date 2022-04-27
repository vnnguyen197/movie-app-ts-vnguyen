import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = ({ children } :any) => {
  return (
    <div style={{position: 'relative'}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Index;