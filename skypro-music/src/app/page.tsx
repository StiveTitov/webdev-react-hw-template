'use client'
import { MainNavigation } from '@components/MainNavigation'
import { Wrapper } from '@components/Wrapper'
import { PageConteiner } from '@/components/PageContainer';
import { Main } from '@components/Main'
import { CenterBlock } from '@components/CenterBlock';
import { SideBar } from '@components/SideBar';
import { Bar } from '@components/Bar';
import { useEffect, useState } from 'react';
import { getAllTracks, intTrack } from './api/TrackApi';





function Page() {
  const [tracks, setTracks] = useState<intTrack[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<intTrack | null>(null);
  useEffect(() => {
    getAllTracks().then(response => {
      setTracks(response)
      setIsLoading(false)
    })
  }, [])
  console.log(currentTrack);
  return (
    <>




      <Wrapper>
        <PageConteiner>
          <Main>
            <MainNavigation />
            <CenterBlock isLoading={isLoading} tracks={tracks} setCurrentTrack={setCurrentTrack} />
            <SideBar isLoading={isLoading} />
          </Main>
          {currentTrack ? <Bar currentTrack={currentTrack} isLoading={isLoading}/>: <></>}
          <footer className="footer" />
        </PageConteiner>
      </Wrapper>

    </>

  );
}
export default Page