
import { useEffect, useRef, useState} from 'react'
import style from '../App.module.css'


export const MapComponent: React.FC<{}>= () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <>
    <div ref={ref} className={style.map}>lala</div>
    </>
  )
}
