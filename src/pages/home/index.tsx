// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutMeArea,
  AboutMeAreaSocialMediaMessage,
  AboutMeImg,
  AboutMeContainer,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              In love with the{" "}
              <Text as="span" type="heading1" color="brand1">
                journey
              </Text>{" "}
              of ideation,{" "}
              <Text as="span" type="heading1" color="brand1">
                development
              </Text>
              , and project completion
            </Text>
            <Text type="body1" color="grey2">
              Delve into a universe of my projects and technological
              explorations
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMeArea id="aboutMe">
        <Container>
          <AboutMeContainer>
            <AboutMeImg />
            <AboutMeAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                About Me
              </Text>
              <Text type="body1" color="grey2">
                Engenheiro de Produção em transição para a área de
                Desenvolvimento Web. No momento, estou fazendo o curso de Full
                Stack oferecido pela Kenzie Brasil, onde já concluí o módulo de
                Front-End e desenvolvi mais de 10 projetos utilizando
                tecnologias como HTML, CSS, JavaScript, React, Typescript,
                Next.js e Node.js, tendo também aplicado metodologias ágeis como
                Scrum e Kanban para aumentar a eficiência e produtividade em
                cada etapa dos projetos. Possuo habilidade na língua inglesa,
                que constantemente utilizo nos meus estudos. Busco consolidar
                minha carreira como programador, e para isso estou aberto ao
                mercado para aplicar meus conhecimentos e evoluir na área de
                desenvolvimento web.
              </Text>
            </AboutMeAreaSocialMediaMessage>
          </AboutMeContainer>
        </Container>
      </AboutMeArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
