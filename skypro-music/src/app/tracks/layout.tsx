import { Bar } from "@/components/Bar";

import { Main } from "@/components/Main";

import { PageConteiner } from "@/components/PageContainer";


import { Wrapper } from "@/components/Wrapper";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Wrapper>
            <PageConteiner>
                <Main>
                    {children}
                </Main>
                <Bar />
                <footer className="footer" />
            </PageConteiner>
        </Wrapper>
    );
}