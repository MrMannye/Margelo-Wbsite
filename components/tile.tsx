import React, {useRef, useContext } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

interface WrapperProps{
    numofPages: number
}

interface TileContextValue{
    numofPages: number
    currentPage: number
}

export const TileContext = React.createContext<TileContextValue>({
    numofPages: 0,
    currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({children,numofPages}) => {
    
    const {scrollY} = useContext(ScrollContext);
    const refContainer = useRef<HTMLDivElement>(null);
    
    let currentPage = 0;

    const {current: elContainer} = refContainer;
    if(elContainer){
        const{clientHeight, offsetTop} = elContainer;
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        currentPage = percentY * numofPages;
    }

    return(
        <TileContext.Provider value={{numofPages, currentPage}}>
            <div ref={refContainer} className='relative bg-black text-white' style={{
                height: numofPages * 100 + 'vh'
            }}>
                {children}
            </div>
        </TileContext.Provider>
    )
}

export const TileBackground: React.FC = ({children}) => (
    <div className='absolute h-full w-full'>{children}</div>
)

export const TileContent: React.FC = ({children}) => (
    <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
)

interface Props{
    page: number
    renderContent: (props: {progress: number}) => any
}

export const Tile: React.FC<Props> = ({page, renderContent}) => {
    const {currentPage, numofPages} = useContext(TileContext)
    const progress = Math.max(0,currentPage-page)
    const refContainer = useRef<HTMLDivElement>(null)
    
    let opacity = Math.min(1,Math.max(0,progress*4))
    if(progress > 0.85 && page < numofPages -1){
        opacity = Math.max(0, (1.0-progress) * 4)
    }

    return(
        <div ref={refContainer} style={{
            pointerEvents: progress >= 0 || progress >=1 ? 'none' : undefined,
            opacity
        }} className='absolute top-0 w-full'>
            {renderContent({progress})}
        </div>
    )

}