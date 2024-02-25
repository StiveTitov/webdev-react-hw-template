import { MainNavigation } from '@components/MainNavigation'
import { Wrapper } from '@components/Wrapper'
import { PageConteiner } from '@/components/PageContainer';
import { Main } from '@components/Main'
import { CenterBlock } from '@components/CenterBlock';
import { SideBar } from '@components/SideBar';
import { Bar } from '@components/Bar';





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