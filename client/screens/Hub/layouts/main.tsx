// layout.tsx
import React from 'react';
import {  } from 'react-native';

import Background from '@/screens/components/background';
import Header from '@/screens/components/header';
import Content from '@/screens/components/content';
import Container from '@/screens/components/container';
import SeasonHeader from '@/screens/Hub/components/seasonheader';
import PlayerCard from '@/screens/Hub/components/playerbanner';
import Schedule from '@/screens/Hub/components/schedule';
import TextButton from '@/screens/components/textbutton';
import Navbar from '@/screens/components/navbar';

interface Props {
  playerData: {
    username: string;
    elo: string;
  };
  logout: () => void;
  play: () => void;
}

const Layout: React.FC<Props> = ({ playerData, logout, play }) => {
  return (
    <>
      <Header title="Home"/>
      <Background>

        <Content spacedEvenly={true}>

          <SeasonHeader user_location='UBL'/>

          <PlayerCard
            name="Mason Johnstone"
            division="D1"
            dp={10}
            status="waiting"
          />

          <Schedule/>

          <Container width='90%'>
            <TextButton text='PLAY' onPress={play} width='100%' fontSize={30} padding={10} borderRadius={10} color={'#00FFCC'} fontColor='#006666'/>
            <Container horizontal={true} spacedEvenly={true}>
              <TextButton text='???' onPress={play} width='48.5%' fontSize={20} padding={10} borderRadius={10} color={'#00CCFF'} fontColor='#1F4E79'/>
              <TextButton text='???' onPress={play} width='48.5%' fontSize={20} padding={10} borderRadius={10} color={'#CC99FF'} fontColor='#7030A0'/>
            </Container>
          </Container>

        </Content>

      </Background>

      <Navbar/>
    </>
  );
};

export default Layout;