import React,{useState} from 'react';
import './SideNavBar.css'

function SideNavBar() {
    const [appState, setAppState] = useState({
        active:0,
        objects: [{id: 1, name:'Dashboard'}, {id:2, name:'Admins'}, {id:3,name:'Logout'}]
    })

    const toggleActive = (index)=>{
        setAppState({...appState, active: appState.objects[index]})
    }
    const toggleActiveClassname = (index) =>{
        if(appState.objects[index] === appState.active){
            return 'active'
        }
        else{
            return ''
        }
    }

  return (
    <div className='side_bar shadow-xl'>
        {
            appState.objects.map((id,index)=>(
                <div key={index} className="items">
                    <p onClick={()=>toggleActive(index)}
                    className={toggleActiveClassname(index)}>{id.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default SideNavBar