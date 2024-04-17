import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";
import { useMap } from "react-leaflet";


interface RoutingProps{
    points: Array<[number,number]>,
    setter: (arg: number) => void,
    show: boolean
}



export function Routing(props: RoutingProps){
    const map = useMap()

    useEffect(()=>{
        L.Routing.control({
          waypoints: props.points.map(
            (tuple) => L.latLng(tuple)
          ),
          lineOptions: {
            styles: [
              {
                color: "red",
                opacity: 0.6,
                weight: 2,
              }
            ],
            extendToWaypoints: true,
            missingRouteTolerance: 0.5,
          },
          show: props.show,
          addWaypoints: false,
          fitSelectedRoutes: false,
          showAlternatives: false,
        }).
          addTo(map).
          on('routesfound', (e) => props.setter(e.routes[0].summary.totalDistance))
      }, [map,props])

  return (<></>)
}

