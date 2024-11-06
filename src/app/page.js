"use client";
import { useState } from "react";

//implementation
//X Pick an API
//X Build a button component that has a fetch/clear function
//X Build a component that displays our data (should have an empty fullfilled state)
//X Build a function that will fetch some data
//- Format and handle the data
//- (error handling)
//- Style our app and create breakpoints
//- Components for our button to sit in
//- Clean up code
export default function Home() {
const [artworks, setArtworks] = useState(null);
const [loading , setLoading] = useState(false);

async function fetchArtworks() {
  setLoading(true);
  const API_URL = 
  "https://api.artic.edu/api/v1/artworks?limit=5";
  const response = await fetch(API_URL);

  const data = await response.json();
  setArtworks(data.data);
  console.log(data);
  setLoading(false);
}

const Header = () => (
     <header>
      <div className="wrapper">
      <img className="item1" src="https://api.artic.edu/docs/assets/logo.svg" alt="art-institive-chicago-logo"></img>
      <h1 className="item2" >MDIA-3126 Midterm API Fetching</h1>
      <h3 className="item3" > Click on the button below to fetch data from Art Institute of Chicago API This will fetch name of the art, artist name and date of creation and display the following content below: as the content.</h3>
      <button 
      disabled={loading}
      className="buttonStyle"
      onClick={fetchArtworks}
      >
        Fetch data </button>
        </div>
    </header>
  );



  const ArtworksDisplay = () => {     //Component that displays loading then displays artworks or no artworks fetched
  if (loading) {
    return <section>Loading...</section>;
  }

  if (artworks) {
    const artworkList = [];
    artworks.forEach((artwork, i) => {
      artworkList.push(
        <article key={i} >
          <div className="content">
          <h2 className="ptag">{artwork.title}</h2>
          <p className="ptag">Artist: {artwork.artist_display}</p> 
          <p className="ptag">Date: {artwork.date_display}</p> 
          </div> 
        </article>
      );
    });
    return <section className="artwork-post1">{artworkList}</section>;
  }
    return <section className="artwork-post">
      <h1>Empty State</h1>
      <hr></hr>
      <p>No content to display for now!</p>
      </section> ;
  };

    return(
      <div>
        <Header />
        <ArtworksDisplay />
      </div>
    );
}

