// layout.tsx
import React from 'react';
import {  } from 'react-native';

import Background from '@/screens/components/background';
import Header from '@/screens/components/header';
import Content from '@/screens/components/content';
import Container from '@/screens/components/container';
import PlayerBanner from '@/screens/Hub/components/playerbanner';

import TextButton from '@/screens/components/textbutton';
import Navbar from '@/screens/components/navbar';

interface Props
{
    playerData:
    {
        username: string;
        elo: string;
    };
    logout: () => void;
    ready: () => void;
}

const Layout: React.FC<Props> = ({ playerData, logout, ready }) =>
{
  return (
    <>
      <Header title="Lobby"/>
      <Background>

        <Content spacedEvenly={true}>
          <Container>

            <PlayerBanner
              name="Mason Johnstone" 
              division="D1" 
              dp={10} 
              status="waiting" 
            />

            <PlayerBanner
              name="Lebron James" 
              division="D1" 
              dp={10} 
              status="waiting" 
            />

          </Container>

          <Container>

            <TextButton text='READY' onPress={ready} width='90%' fontSize={30} padding={10} borderRadius={10} color={'#00FFCC'} fontColor='#006633'/>

            <Container width={'90%'} horizontal={true} spacedEvenly={true}>
                
              <TextButton text='HUB' onPress={ready} width='48.5%' fontSize={20} padding={8} borderRadius={10} color={'#00CCFF'} fontColor='#003366'/>
              <TextButton text='LEAVE' onPress={ready} width='48.5%' fontSize={20} padding={8} borderRadius={10} color={'#CC99FF'} fontColor='#330066'/>

            </Container>

          </Container>

        </Content>

      </Background>

      <Navbar/>
    </>
  );
};

export default Layout;