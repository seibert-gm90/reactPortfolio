import React, { Dispatch, SetStateAction } from 'react';
import {PageNameProps} from '../App/App';


export interface LandingPageProps {
  setPage: Dispatch<SetStateAction<PageNameProps['pageNames']>>
}

const LandingPage: React.FC<LandingPageProps> = (Props) => {
  return (
    <div>
      <h1>Hi, I'm Gabby</h1>

      <div>
        <h2>Welcome to my portfolio.</h2>
        <br/><br/>
        
        <p>A Web Developer extraordinaire.</p>
        <p>Let's create together.</p>
        
        <br/><br/>
      </div>

      {/* use passed setPage property to set 'page' in App.tsx */}
      <div onClick={() => Props.setPage('portfolio')} style={{cursor: 'pointer'}}>
        <p>Continue to Portfolio</p>
      </div>
    </div>
  )
};

export default LandingPage;