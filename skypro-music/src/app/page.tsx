
import { MainNavigation } from '@components/MainNavigation'
import { Wrapper } from '@components/Wrapper'
import { PageConteiner } from '@/components/PageContainer';
import { Main } from '@components/Main'
import { CenterBlock } from '@components/CenterBlock';
import { SideBar } from '@components/SideBar';
import { Bar } from '@components/Bar';
import { useEffect, useState } from 'react';
import { getAllTracks, TracksType } from './api/TrackApi';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setTracks } from '@/store/features/playlistSlice';





function Page() {
    
  
  
  return (
    <>
      <Wrapper>
        <PageConteiner>
          <Main>
            <MainNavigation />
            <CenterBlock />
            <SideBar />
          </Main>
          <Bar />
          <footer className="footer" />
        </PageConteiner>
      </Wrapper>

    </>

  );
}
export default Page