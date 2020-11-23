import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import Countdown from 'react-countdown';

const Banner: React.FC = () => {

    return (
      <span style={{ width: '175px', height: '175px' }} id="globe-vid-container" dangerouslySetInnerHTML={{ __html: `
        <video
          style="width: 175px; height: 175px;"
          id="banner-vid"
          loop
          muted
          autoplay
          playsinline
        ><source src="https://i.imgur.com/V1VFx8E.mp4" type="video/mp4"/></video>
      ` }}></span>
    )
  
}

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<Banner/>}
        title="Benchmark Launchpad"
        subtitle="Stake Uniswap LP tokens to farm MARK."
      />
      <Container>
        <Balances />
      </Container>
      <Spacer size="md" />
            <Spacer size="md" />
      <div
        style={{
          margin: '0 auto',
          width: 752
        }}
      >
        <Button pools={true} text="View Pools" to="/pools" variant="secondary" />
      </div>
      <Spacer size="md" />
            <Spacer size="md" />

            {(new Date() < new Date(1608814800*1000)) ?
        <StyledInfo>
        <span>Fair Launch ends in:</span> <CountdownWrapper><Countdown date={new Date(1608814800*1000)} /></CountdownWrapper>
        </StyledInfo>
        :
        <StyledInfo>
        Thanks for participating! The fair launch is now over. Please unstake your LP tokens and claim your MARK rewards. 
        </StyledInfo>
      }

      <Spacer size="lg" />
      <Spacer size="md" />
    </Page>
  )
}
const CountdownWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 18px;
  text-transform:uppercase;
  font-weight: 700;
`
const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
