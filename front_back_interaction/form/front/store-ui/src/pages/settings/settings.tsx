import { strategySettings } from './settings_init';
import { SettingsBlockGroups } from '../../comps/settings_block';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { StrategyTitle } from '../../datastruct/strats';
import { SettingsGroup } from '../../datastruct/settings';
import Accordion from 'react-bootstrap/Accordion';


function SettingsPage({cfg}: {cfg:SettingsGroup[]}){

    const [strat] = useState(cfg)

    return (
            <>
                {strat.map(
                    (group) =>  <SettingsBlockGroups {...group}/> 
                )}
            </>
    )
}


export function Settings(){

    const strategyTitle = useLoaderData() as StrategyTitle;

    const cfg = strategySettings[strategyTitle]

    return (
        <SettingsPage cfg={cfg}/> 
    )
}



export function AllSettings(){

    const [allStrats] = useState(strategySettings);


    return (
        <Accordion>
            {
                Object.entries(allStrats).map(([key,value],i)=>{
                    return (
                        <Accordion.Item eventKey={`${i}`}>
                            <Accordion.Header>{key}</Accordion.Header>
                            <Accordion.Body>
                                <SettingsPage cfg={value}/> 
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion> 
    )
}