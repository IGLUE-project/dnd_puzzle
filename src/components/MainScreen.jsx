import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "./GlobalContext";
import './../assets/scss/main.scss';
import MainDropComponent from './MainDropComponent.jsx';
const MainScreen = (props) => {
  const { escapp, appSettings, Utils, I18n } = useContext(GlobalContext)
  let [showModalStart, setShowModalStart] = useState(true);
  let [showModalEnd, setShowModalEnd] = useState(false);
  let [showModalCodes, setShowModalCodes] = useState(false);
  let [showModalFeedback, setShowModalFeedback] = useState(false);
  const [centerImages, setCenterImages] = useState(JSON.parse(appSettings.initialImages || "[]"))
  const [leftImages, setLeftImages] = useState([])
  const [rightImages, setRightImages] = useState([])

  const reorder = () => {
    const orderedleftImages = leftImages.map(x=>x.id).sort().join("_");
    const orderedrightImages = rightImages.map(x=>x.id).sort().join("_");
    return(orderedleftImages + ";" + orderedrightImages)
  }
     
  const check = () => {
    const solution = reorder();
    props.check(solution)
  }
  
  return <div className={"passed-"+props.passed}>
    <MainDropComponent 
          passed = {props.passed} 
          setCenterImages={setCenterImages}
          setLeftImages={setLeftImages}
          setRightImages={setRightImages}
          rightImages={rightImages}
          leftImages={leftImages}
          centerImages={centerImages}/>
      
      <div className='confirm-div'>
          <button className="confirm" onClick={check}>{appSettings.confirmationText || I18n.getTrans("i.confirm")}</button> 
      </div>
    </div>;
};

export default MainScreen;



