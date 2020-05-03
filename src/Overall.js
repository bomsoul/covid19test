import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Tab } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

export default function Overall(){
    const [confirmed,setConfirmed] = useState();
    const [recovered,setRecovered] = useState();
    const [deaths,setDeaths] = useState();
    const [lastUpdate,setLastUpdate] = useState();

    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api/')
        .then(function(response){ 
            Object.keys(response.data).forEach(function(key){
                console.log(key,response.data[key].value);
                if(key === 'confirmed'){
                    setConfirmed(response.data[key].value)
                }
                else if(key === 'recovered'){
                    setRecovered(response.data[key].value)
                }
                else if(key === 'deaths'){
                    setDeaths(response.data[key].value)
                }
                else if (key === 'lastUpdate'){
                    setLastUpdate((response.data[key].value))
                }
            })
        })
    },[])

    return (
            <Tab.Pane>
            <Card.Group centered>
                <h3>{lastUpdate}</h3>
            <div class="ui blue card">
                <div class="content">
                    <div class="header">Comfirmed</div>
                    <div class="meta">Overall</div>
                    <div class="description">
                        {confirmed}
                    </div>
                </div>
            </div>

            <div class="ui green card">
                <div class="content">
                    <div class="header">Recovered</div>
                    <div class="meta">{((recovered/confirmed)*100).toFixed(2) + " %"}</div>
                    <div class="description">
                        {recovered}
                    </div>
                </div>
            </div>

            <div class="ui red card">
                <div class="content">
                    <div class="header">Deaths</div>
                    <div class="meta">{((deaths/confirmed)*100).toFixed(2) + " %"}</div>
                    <div class="description">
                        {deaths}
                    </div>
                </div>
            </div>
            </Card.Group>
            <h4>Confirmed : <span style={{color: "grey"}}>{confirmed}</span></h4>
            <h4>Recovered : <span style={{color: "green"}}>{recovered}</span></h4>
            <h4>Deaths : <span style={{color: "red"}}>{deaths}</span></h4>
        </Tab.Pane>
    )
}