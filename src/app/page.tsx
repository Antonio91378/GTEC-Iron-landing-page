"use client";
import Link from "next/link";
import React, { useState } from "react";
import Header from "@/components/header/header";
import "./global.css";
import Section from "@/components/Section/Section";
import Card from "@/components/card/card";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
import Image from "next/image";
import GridComponentList from "@/components/card/gridCardList";
import InfoIcon from "@/components/infoIcon/infoIcon";
import ContactUs from "@/components/form/contactUsForm";
import FooterNav from "@/components/header/FooterNav";
import { Linkedin } from "@/components/icons/Linkedin";
import { WhatsApp } from "@/components/icons/WhatsApp";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<number>(1);
  const [serviceButton1, setserviceButton1] = useState<string>("Active");
  const [serviceButton2, setserviceButton2] = useState<string>("Desactive");

  const changeFilterOurServices = (filterValue: number) => {
    if (filterValue == 1) {
      setserviceButton1("Active");
      setserviceButton2("Desactive");
    } else {
      setserviceButton1("Desactive");
      setserviceButton2("Active");
    }
    setSelectedFilter(filterValue);
  };

  const handleScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top - 100;
      window.scrollTo({
        top: window.pageYOffset + topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Container>
        <Container className="Navbar">
          <Header />
        </Container>
        <Container className="HotSpotContainer" id="Home">
          <Section
            SectionHeight="808px"
            sectionBackgroundColor="rgb(6, 78, 44)"
            className="MainSection"
          >
            <Card
              cardWidth="550px"
              cardHeight="490px"
              cardBackgroundColor="rgb(6, 78, 44)"
              className="CardComponent"
            >
              <h1
                style={{
                  fontSize: "2.5rem",
                  paddingBottom: "1.8rem",
                  lineHeight: "3rem ",
                }}
              >
                Serviços de engenharia, foco em{" "}
                <span
                  style={{
                    color: "var(--secondaryColor)",
                    textShadow: "1px 1px 1px var(--darkColor)",
                  }}
                >
                  mecânica, caldeiraria, tubulação <br /> e estrutura metálica
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
            </Card>
            <Card
              cardWidth="600px"
              cardHeight="490px"
              cardBackgroundColor="rgb(6, 78, 44)"
              className="mainGif"
            >
              <Image
                src="/projetos.gif"
                alt="projetos GIF"
                width={600}
                height={400}
              />
            </Card>
          </Section>
        </Container>
        <Container className="AboutContainer" id="About">
          <Section
            SectionHeight="612px"
            sectionBackgroundColor="rgb(0, 143, 88)"
            className="AboutSection"
          >
            <Card
              cardWidth="35%"
              cardHeight="640px"
              className="CardAboutUs"
              cardBackgroundColor="rgb(0, 143, 88)"
            >
              <Image
                className="aboutImage1"
                src="/aboutUs1.png"
                alt="aboutUs1"
                width={100}
                height={80}
                layout="responsive"
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "2.4rem",
                  color: "var(--lightColor)",
                  textShadow: "1px 1px 5px var(--primaryColor)",
                }}
              >
                Com uma sólida experiência de 17 anos em projetos de engenharia,
                na GTEC Iron, estamos comprometidos em garantir que todas as
                nossas operações sejam conduzidas com segurança e
                responsabilidade ambiental. Na GTEC Iron, estamos comprometidos
                em criar soluções de engenharia de ponta para nossos clientes.
              </p>
            </Card>
            <Card
              cardWidth="65%"
              cardHeight="640px"
              className="CardAboutUs"
              cardBackgroundColor="rgb(0, 143, 88)"
            >
              <Section
                SectionHeight="100px"
                sectionBackgroundColor="rgb(0, 143, 88)"
                className="TitleSection"
              >
                <h1
                  style={{
                    marginTop: "1.2rem",
                    color: "var(--lightColor)",
                    textShadow: "1px 1px 5px var(--primaryColor)",
                  }}
                >
                  Sobre nós
                </h1>
              </Section>
              <p
                style={{
                  paddingLeft: "15px",
                  marginTop: ".6rem",
                  fontSize: "1.2rem",
                  paddingBottom: "3.5rem",
                  color: "var(--lightColor)",
                  textShadow: "1px 1px 5px var(--primaryColor)",
                }}
              >
                Com uma equipe altamente qualificada e especializada,
                desenvolvemos projetos abrangentes e inovadores nas áreas de
                mecânica, caldeiraria, tubulação e estrutura metálica. Nossa
                dedicação à excelência e nossa paixão por desafios nos
                impulsionam a buscar constantemente novas formas de aprimorar e
                aperfeiçoar nossos serviços. Em nossa empresa, estamos sempre
                prontos para enfrentar os desafios mais complexos e entregar
                resultados que superem as expectativas dos nossos clientes. Seja
                qual for o projeto, você pode confiar na expertise e no
                comprometimento da equipe da GTEC Iron para fornecer soluções de
                engenharia de alta qualidade e eficiência.
              </p>

              <Image
                className="about2"
                src="/aboutUs2.png"
                alt="aboutUs2"
                width={750}
                height={235}
                // layout="responsive"
              />
            </Card>
          </Section>
        </Container>
        <Container className="GridContainer" id="Services">
          <Section
            SectionHeight="100px"
            sectionBackgroundColor="var(--primaryColor)"
            className="TitleSection"
          >
            <h1 style={{ color: "var(--lightColor)" }}>Área de Negócio</h1>
          </Section>
          <Section
            SectionHeight="50px"
            sectionBackgroundColor="var(--primaryColor)"
            className="ourServicesButtons"
          >
            <button onClick={() => changeFilterOurServices(1)}>
              <Button
                buttonWidth="260px"
                buttonHeight="100%"
                buttonBackgroundColor="var(--darkColor)"
                buttonTextColor="var(--lightColor)"
                className={`transitionButton servicesButton ${serviceButton1}`}
              >
                <div>Projetos de Engenharia</div>
              </Button>
            </button>
            <button onClick={() => changeFilterOurServices(2)}>
              <Button
                buttonWidth="260px"
                buttonHeight="100%"
                buttonBackgroundColor="var(--darkColor)"
                buttonTextColor="var(--lightColor)"
                className={`transitionButton servicesButton ${serviceButton2}`}
              >
                <div>Construções Modulares</div>
              </Button>
            </button>
          </Section>
          <Section
            SectionHeight="1500px"
            sectionBackgroundColor="var(--lightColor)"
            className="GridSection"
          >
            <GridComponentList cardFilter={selectedFilter} />
          </Section>
        </Container>
        <Container className="PortifolioContainer" id="Portifolio">
          <Section
            SectionHeight="328px"
            sectionBackgroundColor="rgb(0, 143, 88)"
            className="TitleSection portifolio"
          >
            <Card
              cardWidth="680px"
              cardHeight="100%"
              cardBackgroundColor="rgb(0, 143, 88)"
              className="portifolio-card-1"
            >
              <Card
                cardWidth="100%"
                cardHeight="auto"
                cardBackgroundColor="rgb(0, 143, 88)"
                className=""
              >
                <h1>
                  Temos Parceria com Grandes <br />
                  Nomes do Mercado
                </h1>
              </Card>
              <Card
                cardWidth="auto"
                cardHeight="auto"
                cardBackgroundColor="rgb(0, 143, 88)"
                className="ImagesPotifolioCard"
              >
                <Image
                  src="/logo1.png"
                  alt="projetos GIF"
                  width={100}
                  height={100}
                />
                <Image
                  src="/logo2.png"
                  alt="projetos GIF"
                  width={150}
                  height={90}
                />
                <Image
                  src="/logo3.png"
                  alt="projetos GIF"
                  width={160}
                  height={90}
                />
                <Image
                  src="/logo4.png"
                  alt="projetos GIF"
                  width={150}
                  height={100}
                />
              </Card>
            </Card>
            <Card
              cardWidth="680px"
              cardHeight="100%"
              cardBackgroundColor="#222"
              className="ImagesPotifolioCard2"
            >
              <Image
                src="/portifolio.png"
                alt="portifolio"
                width={100}
                height={80}
                layout="responsive"
              />
            </Card>
          </Section>
        </Container>
        <Container className="FooterContainer">
          <Section
            SectionHeight="200px"
            sectionBackgroundColor="#222"
            className="FooterSection"
          >
            <Card cardWidth="1200px" cardHeight="auto" className="FooterCard">
              <FooterNav className="FooterHeader" />
              <Card cardWidth="110px" cardHeight="50px" className="IconsFooter">
                <p>suporte@gmail.com</p>
                <a
                  href="https://www.linkedin.com/company/gtec-ironn/?viewAsMember=true"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </Card>
            </Card>
            <div
              style={{
                width: "100%",
                borderTop: "3px dotted #444",
                position: "relative",
                zIndex: "300",
              }}
            />
            <p>
              {" "}
              copyright © 2024, all rights reserved. Powered by{" "}
              <a
                href="https://www.linkedin.com/in/antonio-dias2000/"
                target="_blank"
                style={{ color: "#666" }}
              >
                Antônio Dias
              </a>
            </p>
          </Section>
        </Container>
      </Container>
    </div>
  );
}
