import { MainNavigation } from '@/components/MainNavigation/MainNavigation'
import { Wrapper } from '@/components/Wrapper/Wrapper'
import { PageConteiner } from '@/components/PageContainer/PageConteiner'
import { Main } from '@/components/Main/Main'
import { CenterBlock } from '@/components/CenterBlock/CenterBlock';
import { SideBar } from '@/components/SideBar/SideBar';
import { Bar } from '@/components/Bar/Bar';




function Page() {
  return (
    <>


      <title>Skypro</title>

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