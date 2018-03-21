import React from 'react';
import PropTypes from 'prop-types';

const data = [
    {
        place: 'theater',
        placeName: 'Teatro Nacional',
        title: 'Mi vida entre limites',
        about: 'Toda mi vida he vivido al limite...al limite de Ate y La Molina xd.',
        address: 'Avenida Javier Prado San Borja 1234',
        img: 'https://cdne.diariocorreo.pe/thumbs/uploads/articles/images/los-suenos-y-alegrias-de-wendy-ramos-en-su-u-76772-jpg_604x0.jpg',
        tickets: [
            {
                zone: 'general',
                adults: 80,
                elderly: 70,
                kids: 40,
                disabled: 50,
            },
            {
                zone: 'platinium',
                adults: 90,
                elderly: 80,
                kids: 50,
                disabled: 60,
            },
            {
                zone: 'VIP',
                adults: 100,
                elderly: 90,
                kids: 60,
                disabled: 70,
            },
            {
                zone: 'gold',
                adults: 110,
                elderly: 100,
                kids: 70,
                disabled: 80,
            }
        ],
        seats:[
            {
                zone: 'general',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'general',
                type: 'adults',
                code: '40-A',
                price: 80,
            },
            {
                zone: 'general',
                type: 'eldery',
                code: '20-J',
                price: 70,
            },
            {
                zone: 'general',
                type: 'disabled',
                code: '10-N',
                price: 50,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            }
        ]
    },
    {
        place: 'theater',
        placeName: 'Teatro Ricardo Palma',
        title: 'El arcoiris en las manos',
        about: 'Hola a todxs, soy Mariana, me encanta bailar, es mi pasion mas grande desde que era niño, era mi unico consuelo.',
        address: 'Avenida Larco Miraflores 5678',
        img: 'https://s3.amazonaws.com/joinnus.com-tester-bucket/user/202471/599c62b3661b5.jpg',
        tickets: [
            {
                zone: 'general',
                adults: 80,
                elderly: 70,
                kids: 40,
                disabled: 50,
            },
            {
                zone: 'platinium',
                adults: 90,
                elderly: 80,
                kids: 50,
                disabled: 60,
            },
            {
                zone: 'VIP',
                adults: 100,
                elderly: 90,
                kids: 60,
                disabled: 70,
            },
            {
                zone: 'gold',
                adults: 110,
                elderly: 100,
                kids: 70,
                disabled: 80,
            }
        ],
        seats:[
            {
                zone: 'general',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'general',
                type: 'adults',
                code: '40-A',
                price: 80,
            },
            {
                zone: 'general',
                type: 'eldery',
                code: '20-J',
                price: 70,
            },
            {
                zone: 'general',
                type: 'disabled',
                code: '10-N',
                price: 50,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'Platinium',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'VIP',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            },
            {
                zone: 'gold',
                type: 'kids',
                code: '30-B',
                price: 40,
            }
        ]
    },
    
]

const event = data.map((ev)=>{
    return (
        <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={ev.img}/>
              <span className="card-title">{ev.title}</span>
            </div>
            <div className="card-content">
              <p>{ev.about}</p>
            </div>
            <div className="card-action">
              <a href="/">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
})

const Events = () => {
        return (
            <div className='container events'>
            {event}
          </div>
        )
  }
  
  
  /*SongsOrder.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      vote: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  //   onSongsMoreClick: PropTypes.func.isRequired,
  //   onSongsMinusClick: PropTypes.func.isRequired
  }*/
  
  export default Events;