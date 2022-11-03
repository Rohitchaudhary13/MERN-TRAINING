import './App.css';
import BlogCards from './components/BlogCards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{backgroundColor: '#F7F7F7', paddingBottom: '5rem'}}>
        <div className='container' style={{textAlign: 'center'}}>
        <h1 style={{marginBottom: '2rem', paddingTop: '5rem'}}>Latest Blogs!</h1>
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <button className='btn btn-primary' style={{marginTop: '2rem'}}>Load More</button>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
