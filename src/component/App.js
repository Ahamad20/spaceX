import React, {useState, useEffect} from 'react';
import SideBar from './SideBar'
import MissionDetails from './MissionDetails'

const App =()=> {
  
            const [year, setYear] = useState(null);
            const [launched, setLaunched] = useState(null);
            const [landed, setLanded] = useState(null);
            const [details, setDetails] = useState([])
    useEffect(() => {
        const details = []
        let url = `https://api.spacexdata.com/v3/launches?limit=100` 
        if (year) {
            url =  url+`&launch_year=${year}`
        }
        if (launched!==null) {
            url = url + `&launch_success=${launched}`
        }
        if (landed!==null) {
            
            url = url + `&land_success=${landed}`
        }
            fetch(url)
                      .then(res => res.json().then(data=>setDetails(data)))
      
    },[year, launched,landed])
            return (
              <div className="home_dashboard">
                <div>
                  <h1>SpaceX Launch Programs</h1>
                </div>
                <div className="d-flex justify-content-between">
                  <SideBar
                    yearHook={{ year, setYear }}
                    launchHook={{ launched, setLaunched }}
                    landHook={{ landed, setLanded }}
                  />
                        <MissionDetails details={details}/>
                </div>
              </div>
            );
}



export default App;