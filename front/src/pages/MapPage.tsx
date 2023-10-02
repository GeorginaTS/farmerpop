import style from '../App.module.css'

import { Wrapper, Status } from '../components/MapLoading';
import { MapComponent } from '../components/MapComponent';


export const MapPage = () => {

  return (
    <section id='map' className={style.container}>
        <div className={style.content}>
            <h1>Mapa de productors </h1>
         <Wrapper apiKey='AIzaSyBJOGgATeWGC_lFVOaQl-L5Vu4Wjt3psYM'>      
        <MapComponent/>
        </Wrapper>   
        </div>
    </section>
    
  )
}
