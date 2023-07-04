import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Display = (props) => {

    const [resource, setResource] = useState(null)
    const {selectedResource} = useParams()
    const {resourceId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${selectedResource}/${resourceId}`)
        .then((response) => {
            setResource(response.data)
            })
        .catch(()=>{navigate("/Error")})
    }, [selectedResource, resourceId]);

  return (
    <div>
        <hr />
        {resource == null && <img alt='loading' src='https://i0.wp.com/codemyui.com/wp-content/uploads/2018/07/Lightsaber-Progress-Bar.gif?w=880&ssl=1' />}
        {
            {
                "people" : <div>
                                <h2>{resource.name}</h2>
                                His height: <h4>{resource.height}</h4>
                                His mass: <h4>{resource.mass}</h4>
                                His hair color:<h4>{resource.hair_color}</h4>
                                His skin color:<h4>{resource.skin_color}</h4>
                                His home world:<h4><a href={resource.homeworld} target='_blanked'>{resource.homeworld}</a></h4>
                            </div>,
                "planets" : <div>
                                <h2>{resource.name}</h2>
                                His rotation period: <h4>{resource.rotation_period}</h4>
                                His orbital period: <h4>{resource.orbital_period}</h4>
                                His diameter:<h4>{resource.diameter}</h4>
                                His climate:<h4>{resource.climate}</h4>
                            </div>,
                "films":<div>
                            <h2>{resource.title}</h2>
                            His number of episode: <h4>{resource.episode_id}</h4>
                            His opening crawl: <h4>{resource.opening_crawl}</h4>
                            His director:<h4>{resource.director}</h4>
                            His producer:<h4>{resource.producer}</h4>
                        </div>,
                "species":<div>
                            <h2>{resource.name}</h2>
                            His classification: <h4>{resource.classification}</h4>
                            His designation: <h4>{resource.designation}</h4>
                            His hair colors:<h4>{resource.hair_colors}</h4>
                            His skin colors:<h4>{resource.skin_colors}</h4>
                        </div>,
                "vehicles":<div>
                            <h2>{resource.name}</h2>
                            His model: <h4>{resource.model}</h4>
                            His manufacturer: <h4>{resource.manufacturer}</h4>
                            His vehicle class:<h4>{resource.vehicle_class}</h4>
                        </div>,
                "starships":<div>
                            <h2>{resource.name}</h2>
                            His modal: <h4>{resource.modal}</h4>
                            His manifacturer: <h4>{resource.manifacturer}</h4>
                            His consumables:<h4>{resource.consumables}</h4>
                            His hyperdrive rating:<h4>{resource.hyperdrive_rating}</h4>
                        </div>            
            }[selectedResource]
        }
    </div>
  )
}

export default Display