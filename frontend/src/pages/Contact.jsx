
import '../styles/contact-page.css';

import Navbar from '../Components/Navbar';
import PageHeader from '../Components/PageHeader';

import GoogleMapReact from 'google-map-react';

import ContactForm from '../Components/Sections/ContactForm';
import Footer from '../Components/Footer/Footer';


const Contact = () => {

  const defaultProps = {
    center: {
      lat: 51.50203339698139,
      lng:  -0.13525420731567164
    },
    zoom: 11
  };

  const handleApiLoaded = (map, maps) => {
    if (maps && maps.ControlPosition && maps.MapTypeControlStyle) {
      const mapOptions = {
        mapTypeControl: true,
        mapTypeId: 'hybrid',
        mapTypeControlOptions: {
          style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: maps.ControlPosition.TOP_RIGHT,
          mapTypeIds: ['roadmap', 'satellite', 'terrain']
        }
      };
      map.setOptions(mapOptions);
    }
  };


  return (
    <>
      <Navbar selectedTab='contact'/>
      <PageHeader heading='Contact Us'/>

      <section className='!pb-[300px]'>
        <div className='container-xl'>
          <div className='office-address'>
              <div className='row'>
                <div className='col-md-4 md:!pr-0'>
                  <div className='widget'>
                    <h1 className='widget-title'>Phone No</h1>
                    <div>
                      <p className='item--subtitle'>Call Us Anytime</p>
                      <h5 className='item--title !text-[var(--text-color)]'>+91 9990387276</h5>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 md:!px-0'>
                  <div className='widget'>
                    <h1 className='widget-title'>Email</h1>
                    <div>
                      <p className='item--subtitle'>SEND US MAIL</p>
                      <h5 className='item--title !text-[var(--text-color)]'>autofixers.services@gmail.com</h5>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 md:!pl-0'>
                  <div className='widget'>
                    <h1 className='widget-title'>Address</h1>
                    <div>
                      <p className='item--subtitle'>VISIT OUR WORKSHOP</p>
                      <h5 className='item--title !text-[var(--text-color)]'>A40/1, Sahibabad Industrial Area Site 4, Ghaziabad, UP 201010</h5>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className='map'>
            <GoogleMapReact
              
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
            </GoogleMapReact>
  
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
