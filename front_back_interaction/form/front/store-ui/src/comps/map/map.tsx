// https://codesandbox.io/p/sandbox/rlv3-routing-machine-gzdt1
import { MapContainer,TileLayer,  } from "react-leaflet"
import { Routing} from "./machine"
import {  useState } from "react"
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


export interface MapProps{
    points: Array<[number,number]>,
    setter: (arg: number) => void,
    show: boolean
}

export function MapElement(){

    const [distance, setDistance]= useState<number>(0)

    const [positions] = useState<Array<[number,number]>>( [[16.506, 80.648],[17.384, 78.4866]])
    

    return (
        <div>
            <MapContainer center={[17.4, 78.4]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Routing show={false} setter={setDistance} points={positions}/> 
            </MapContainer>
            {distance}
        </div>
    )
}