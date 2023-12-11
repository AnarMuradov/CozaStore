import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
    //   caption: "San Francisco"
    },
    {
      image: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
    //   caption: "Scotland"
    },
    {
      image: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
    //   caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
        backgroundColor:'transparent'
        }}>
          <Carousel
            data={data}
            time={5000}
            width="100%"
            height="930px"
            captionStyle={captionStyle}            
            captionPosition="bottom"
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"

            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "930px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
