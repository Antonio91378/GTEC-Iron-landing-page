import Header from "@/components/header/header";
import "./global.css";
import Section from "@/components/Section/Section";
import Card from "@/components/card/card";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Section
          SectionHeight="808px"
          sectionBackgroundColor="#888"
          className="MainSection"
        >
          <Card cardWidth="560px" cardHeight="490px" className="CardComponent">
            <h1 style={{ fontSize: "3.9rem", paddingBottom: "1.8rem" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore?
            </h1>
            <p style={{ paddingBottom: "2.5rem" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
              vel architecto atque cum distinctio incidunt! Suscipit voluptate
              repudiandae iusto voluptates!
            </p>
            <div>
              <Button
                buttonWidth={"400px"}
                buttonHeight={"60px"}
                buttonBackgroundColor={"red"}
                buttonTextColor={"white"}
              />
            </div>
          </Card>
        </Section>
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
            <h1>Teste</h1>
          </Section>
          <Section
            SectionHeight="180px"
            sectionBackgroundColor="#666"
          ></Section>
        </Container>
      </Container>
    </div>
  );
}
