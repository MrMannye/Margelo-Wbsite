import React from 'react'
import ClientLogos from './client-logos'
import Testimonials from './testimonails'

const TrustedBy: React.FC = () => (
    <section className='bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32'>
        <div className='flex flex-col justify-center items-center mt-10'>
            <h3 className='text-xl mb-10 flex flex-col justify-center font-bold text-center'>
                <span className=' whitespace-nowrap'>truested by</span>
                <span className=' whitespace-nowrap'>some of the apps you use daily</span>
            </h3>
        </div>
        <ClientLogos></ClientLogos>
        <div className='flex flex-col justify-center items-center'>
            <div className='container mx-auto lg:max-w-[70%] lg:px-10'>
                <h3 className='text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]'>We belive in good communication and fully transparent developemnt</h3>
            </div>
        </div>
        <Testimonials></Testimonials>
    </section>
)

export default TrustedBy