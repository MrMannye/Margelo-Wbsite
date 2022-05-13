import React, {useRef, useContext, useCallback, useState} from 'react'
import { ScrollContext } from '../utils/scroll-observer';
import {ChevronDownIcon} from '@heroicons/react/solid'
import { AcademicCapIcon } from '@heroicons/react/solid';

const Masthead: React.FC = () => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const refContainer = useRef<HTMLDivElement>(null);
    const {scrollY} = useContext(ScrollContext);

    let progress = 0;
    const {current: elContainer} = refContainer
    if(elContainer){
        progress = Math.min(1, scrollY/elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true);
    },[])

    return(
        <div ref={refContainer} style={{transform: `translateY(-${progress * 20})vh`}} className='min-h-screen sticky top-0 -z-10 flex flex-col justify-center items-center'>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src='/assets/masthead-bg.webm' type='video/webm; codecs=vp9'/>
                <source src='/assets/masthead-bg.mp4' type='video/mp4; codecs=hvc1'/>
            </video>
            <div className={`${imageLoaded ? 'opacity-0': 'opacity-100'} flex-grow-0 mb-20 pt-10 z-20 transition-opacity duration-1000`}>
                <AcademicCapIcon className='w-8 h-8 text-white'/>
            </div>
            <div className=' flex flex-col items-center justify-center p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>Margelo</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>App Developer, <span>donde right</span></span>
                </h2>
            </div>
            <div className={`flex-grow-0 mt-20 pb-20 z-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-0': 'opacity-100'}`}>
                <ChevronDownIcon className='w-8 h-8 text-white' onLoad={handleImageLoaded}/> 
            </div>
        </div>
    )
}

export default Masthead;