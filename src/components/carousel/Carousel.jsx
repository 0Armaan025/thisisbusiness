import React, { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './carousel.css';


function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <>
      <center>
        <br />
        <br />
        <br />
        <br />
        
      </center>

      <div className="carousel">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              marginLeft: '20px',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span className="idkSpan">{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              marginRight: '20px',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              backgroundColor: 'black',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span className="idkSpan">{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* Slides */}
          <div style={{ width: 600, height: 300 }}>
            <img
              src="https://images.unsplash.com/photo-1611117775350-ac3950990985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Slide 1"
            />
          </div>

          <div style={{ width: 600, height: 300 }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661573649451-e2ddcdfaae9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWRlYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Slide 2"
            />
          </div>

          <div style={{ width: 600, height: 300 }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1673431020419-ebd2793aa6e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8M2QlMjBwcmludGluZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Slide 3"
            />
          </div>
        </ReactSimplyCarousel>
      </div>
    </>
  );
}

export default ReactSimplyCarouselExample;
