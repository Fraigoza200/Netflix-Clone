import React from 'react';
import './App.css';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import requests from './request'

function App() {
  return (
    <div className="app">

      {/* NavBar */}
      <Nav />
      <Banner />
     <Row title="NETFILX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
