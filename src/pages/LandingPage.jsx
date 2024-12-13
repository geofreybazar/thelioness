import React from 'react';
import HeroSection from '../components/Landingpage/HeroSection';
import FeatureSection from '../components/Landingpage/FeatureSection';
import BenefitsSection from '../components/Landingpage/BenefitsSection';
import CalltoActionSection from '../components/Landingpage/CalltoActionSection';
import FaqsSection from '../components/Landingpage/FaqsSection';

function LandingPage({handleStakeNow}) {

  return (
    <div>
      <HeroSection handleStakeNow={handleStakeNow}/>
      <FeatureSection handleStakeNow={handleStakeNow}/>
      <BenefitsSection handleStakeNow={handleStakeNow}/>
      <CalltoActionSection handleStakeNow={handleStakeNow}/>
      <FaqsSection handleStakeNow={handleStakeNow}/>
    </div>
  )
}

export default LandingPage