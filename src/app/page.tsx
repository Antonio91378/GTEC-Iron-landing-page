import Header from "@/components/header/header";
import "./global.css";
import Section from "@/components/Section/Section";
import Card from "@/components/card/card";
import Button from "@/components/button/button";
export default function Home() {
  return (
    <div>
      <Header />
      <Section SectionHeight="650px">
        <Card cardWidth="580px" cardHeight="470px" className="CardComponent">
          <h1 style={{ fontSize: "3.9rem", paddingBottom: "2rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore?
          </h1>
          <p style={{ paddingBottom: "1.6rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, vel
            architecto atque cum distinctio incidunt! Suscipit voluptate
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
    </div>
  );
}
