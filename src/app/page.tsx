import Header from "@/components/header/header";
import "./global.css";
import Section from "@/components/Section/Section";
import Card from "@/components/card/card";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Container className="HotSpotContainer">
          <Section
            SectionHeight="808px"
            sectionBackgroundColor="rgb(6, 78, 44)"
            className="MainSection"
          >
            <Card
              cardWidth="560px"
              cardHeight="490px"
              cardBackgroundColor="rgb(6, 78, 44)"
              className="CardComponent"
            >
              <h1 style={{ fontSize: "2.9rem", paddingBottom: "1.8rem" }}>
                Serviços de engenharia, foco em{" "}
                <span
                  style={{
                    color: "var(--secondaryColor)",
                    textShadow: "1px 1px 1px var(--darkColor)",
                  }}
                >
                  mecânica, caldeiraria, tubulação e estrutura metálica
                </span>
              </h1>
              <p
                style={{
                  paddingBottom: "1.4rem",
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: "var(--lightColor)",
                }}
              >
                De olho no seu futuro, desenvolvemos e construimos seu projeto,
                trabalhando com construções modulares ágeis, limpas e
                eficientes. Vendas e locações sustentáveis.
              </p>
              <div>
                <Button
                  buttonWidth={"400px"}
                  buttonHeight={"60px"}
                  buttonBackgroundColor={"var(--primaryColor)"}
                  buttonTextColor={"white"}
                  className="transitionButton"
                >
                  Agende uma consulta técnica
                </Button>
              </div>
            </Card>
            <Card
              cardWidth="560px"
              cardHeight="490px"
              cardBackgroundColor="rgb(6, 78, 44)"
              className="mainGif"
            >
              <Image
                src="/projetos.gif"
                alt="projetos GIF"
                width={750}
                height={400}
              />
            </Card>
          </Section>
        </Container>
        <Container className="AboutContainer">
          <Section
            SectionHeight="660px"
            sectionBackgroundColor="#555"
            className="AboutSection"
          >
            <Card
              cardWidth="560px"
              cardHeight="640px"
              className="CardAboutUs"
            ></Card>
            <Card
              cardWidth="560px"
              cardHeight="640px"
              className="CardAboutUs"
            ></Card>
          </Section>
        </Container>
        <Container className="GridContainer">
          <Section
            SectionHeight="100px"
            sectionBackgroundColor="#999"
            className="TitleSection"
          >
            <h1>adfasdasdasda</h1>
          </Section>
          <Section
            SectionHeight="700px"
            sectionBackgroundColor="#999"
            className="GridSection"
          >
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
            <Card
              cardWidth="auto"
              cardHeight="200px"
              className="CardServices"
            ></Card>
          </Section>
        </Container>
        <Container className="PortifolioContainer">
          <Section
            SectionHeight="180px"
            sectionBackgroundColor="#444"
            className="TitleSection"
          >
            <h1>Clients</h1>
          </Section>
          <Section SectionHeight="180px" sectionBackgroundColor="#666">
            <h1>Carrousel</h1>
          </Section>
        </Container>
        <Container className="ArticlesContainer">
          <Section SectionHeight="360px" sectionBackgroundColor="#444">
            <h1>Posts</h1>
          </Section>
        </Container>
        <Container className="ContactContainer">
          <Section SectionHeight="420px" sectionBackgroundColor="#fff">
            <h1>Contact us</h1>
          </Section>
        </Container>
        <Container className="FooterContainer">
          <Section SectionHeight="300px" sectionBackgroundColor="#999">
            <h1>Footer</h1>
          </Section>
        </Container>
      </Container>
    </div>
  );
}
