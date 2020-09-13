import React from 'react';
import './SideBar.scss';

const SideBar = ({yearHook,launchHook, landHook}) => {
   
   
    const selectLaunch = (e) => {
        if (launchHook.launched === null || launchHook.launched !== e.target.id){
            launchHook.setLaunched(e.target.id);
            return;
        }
        if(launchHook.launched === e.target.id){
            launchHook.setLaunched(null);
            return;
        }
    }

    const selectLanding = (e) => {
        if (landHook.landed === null || landHook.landed !== e.target.id) {
          landHook.setLanded(e.target.id);
          return;
        }
        if (landHook.landed === e.target.id) {
          landHook.setLanded(null);
          return;
        }
    }

    const selectYear = (e) =>{
        if (yearHook.year === null || yearHook.year !== parseInt(e.target.id)) {
          yearHook.setYear(parseInt(e.target.id));
          return;
        }
        if (yearHook.year === parseInt(e.target.id)) {
          yearHook.setYear(null);
          return;
        }
        

    }


        var launchYear = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
        var launchedDetails = ["true", "false"];

        return (
            <div className="filerPanel">
            <h6>Filters</h6>
            <div className="HeaderText">Launch Year</div>
            <div className="pl-1 buttonDetails">
            { launchYear.map(a =>{
                return(
                    <button type="button" className={`btn btn-sm btn-success mr-2 mt-2 mb-2 buttonText ${yearHook.year === a ? 'selected' : ''}`}
                    onClick={selectYear}
                    id={a}
                    >{a}</button>
                    )
            })
            }
            </div>
            <div className="mt-3">
                <h6 className="HeaderText">Successful Launch</h6>
                {launchedDetails.map(a =>{
                    return(
                    <button type="button" className={`btn btn-sm btn-success buttonText mr-2 ${launchHook.launched === a ? 'selected' : ''}`}
                    onClick={selectLaunch}
                    id={a}
                    >{a}</button>
                    )
                })}

            </div>
            <div className="mt-3">
                <h6 className="HeaderText">Successful Landing</h6>
                {launchedDetails.map(a =>{
                    return(
                    <button type="button" className={`btn btn-sm btn-success buttonText mr-2 ${landHook.landed === a ? 'selected' : ''}`}
                    onClick={selectLanding}
                    id={a}
                    >{a}</button>
                    )
                })}

            </div>
            </div>
        )
}

export default SideBar;