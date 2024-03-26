'use client'
import { MainNavigation } from '@components/MainNavigation'
import { Wrapper } from '@components/Wrapper'
import { PageConteiner } from '@/components/PageContainer';
import { Main } from '@components/Main'
import { CenterBlock } from '@components/CenterBlock';
import { SideBar } from '@components/SideBar';
import { Bar } from '@components/Bar';
import { useEffect, useState } from 'react';
import { getAllTracks, TracksType } from './api/TrackApi';





function Page() {
  const [tracks, setTracks] = useState<TracksType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    getAllTracks().then(response => {
      setTracks(response)
      setIsLoading(false)
    })
  }, [])
  
  return (
    <>




      <Wrapper>
        <PageConteiner>
          <Main>
            <MainNavigation />
            <CenterBlock tracks={tracks} />
            <SideBar isLoading={isLoading} />
          </Main>
          <Bar />
          <footer className="footer" />
        </PageConteiner>
      </Wrapper>

    </>

  );
}
export default Page