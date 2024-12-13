import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab/';
import { Fade, Box ,Tab } from '@mui/material';
import Stake from './Stake';
import Unstake from './Unstake';
import ClaimRewards from './ClaimRewards';

function StakingCard() {
  const [value, setValue] = useState("1");
  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='border rounded-2xl'>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
              <Tab label="Stake" value="1" />
              <Tab label="Unstake" value="2" />
              <Tab label="Claim Rewards" value="3" />
          </TabList>
        </Box>
        <Fade in={value === '1'} timeout={500}>
          <TabPanel value="1"><Stake/></TabPanel>
        </Fade>
        <Fade in={value === '2'} timeout={500}>
          <TabPanel value="2"><Unstake/></TabPanel>
        </Fade>
        <Fade in={value === '3'} timeout={500}>
          <TabPanel value="3"><ClaimRewards/></TabPanel>
        </Fade>
      </TabContext>
    </div>
    
  )
}

export default StakingCard