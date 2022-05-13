import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

const Testimonails: React.FC = () => (
        <Carousel className='bg-black text-white py-10 lg:py-20'>
            <CarouselItem index={0}>
                <Review by='MIrza Samantha'>
                    Excelente trabajo cooperativo que realiza esta pagina para poder 
                    mostrarnos la pasion por el tacnologia y programacion en el ambito de la musica.
                </Review>
            </CarouselItem>
            <CarouselItem index={1}>
                <Review by='MIrza Samantha'>
                    Excelente trabajo cooperativo que realiza esta pagina para poder 
                    mostrarnos la pasion por el tacnologia y programacion en el ambito de la musica.
                </Review>
            </CarouselItem>
            <CarouselItem index={2}>
                <Review by='MIrza Samantha'>
                    Excelente trabajo cooperativo que realiza esta pagina para poder 
                    mostrarnos la pasion por el tacnologia y programacion en el ambito de la musica.
                </Review>
            </CarouselItem>
            <CarouselItem index={3}>
                <Review by='MIrza Samantha'>
                    Excelente trabajo cooperativo que realiza esta pagina para poder 
                    mostrarnos la pasion por el tacnologia y programacion en el ambito de la musica.
                </Review>
            </CarouselItem>
        </Carousel>
    )

export default Testimonails