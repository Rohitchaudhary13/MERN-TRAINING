import React from 'react'
import BlogCards from './BlogCards'
import Newsletter from './Newsletter'
import Tags from './Tags'
import Talk from './Talk'
import Topics from './Topics'
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div>
        <div style={{backgroundColor: '#F7F7F7', paddingBottom: '5rem'}} className="">
            <div className='container section'>
        <div className='blogs'>
        <h1 style={{marginBottom: '2rem'}}>Latest Blogs!</h1>
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <button className='btn btn-primary' style={{marginTop: '2rem'}}>Load More</button>
      </div>
      <div className='aisde'>
        <Topics />
        <Tags />
        <Talk />
        <Newsletter />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Blog