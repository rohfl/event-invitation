


// About us Page

import { PageBase } from "../components/Common/Page-Base/page-base.component";
import { HeaderTitle } from "../components/Common/Typography/header-title.component";
import { Container  } from "../components/Common/Container/container.component"
import { Member } from "../components/About/member.component";

export const About = () => {
    return <PageBase>
        <HeaderTitle className="mt-24" title="Hello there! Meet with our Community." />
        <Container className="grid sm:grid-cols-4 lg:w-1/2 w-ful">
            <Member />
            <Member />
            <Member />
            <Member />
        </Container>
        <Container className="grid sm:grid-cols-5 lg:w-7/12 w-full">
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
        </Container>
        <Container className="grid sm:grid-cols-4 lg:w-1/2 w-ful">
            <Member />
            <Member />
            <Member />
            <Member />
        </Container>
    </PageBase>
}

export default About;