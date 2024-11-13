"use client";
import React, { useEffect, useState } from "react";
import GridCard from "./gridCard";
import { MageCupHot } from "../icons/MageCupHot";
import { BuildingConstruction } from "../icons/BuildingConstruction";
import { Corporate } from "../icons/Corporate";
import { Industry } from "../icons/Industry";
import { Agro } from "../icons/Agro";
import { Lamp } from "../icons/Lamp";
import { Mecanic } from "../icons/Mecanic";
import { Pipe } from "../icons/Pipe";
import { Fire } from "../icons/Fire";
import { Metal } from "../icons/Metal";
import "./card.css";

interface CardData {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  cardWidth: string;
  cardHeight: string;
  cardBackgroundColor: string;
  className: string;
  cardTitle: string;
  key: number;
  type: number;
  children?: React.ReactNode;
}

const commonCardProps = {
  cardWidth: "auto",
  cardHeight: "250px",
  cardBackgroundColor: "var(--lightColor)",
  className: "gridCards roll-out",
};

interface GridComponentProps {
  cardFilter: number | null; // Accepts a direct number argument
}

const cardsData: CardData[] = [
  {
    ...commonCardProps,
    icon: BuildingConstruction,
    type: 2,
    cardTitle: "Construção Civil",
    children: (
      <>
        Canteiros de obra; <br />
        Alojamentos; <br />
        Turn-Key; <br />
        Facilities;
      </>
    ),
    key: 1,
  },
  {
    ...commonCardProps,
    icon: Corporate,
    type: 2,
    cardTitle: "Corporate",
    children: (
      <>
        Lojas; <br />
        Data Center; <br />
        Banco; <br />
        Escritório;
      </>
    ),
    key: 2,
  },
  {
    ...commonCardProps,
    icon: Industry,
    type: 2,
    cardTitle: "Indústria",
    children: (
      <>
        Canteiros de Obra; <br />
        Escritório Técnico; <br />
        Banheiro/Vestiário; <br />
        Almoxarifado; <br />
        Laboratório;
      </>
    ),
    key: 3,
  },
  {
    ...commonCardProps,
    icon: Agro,
    type: 2,
    cardTitle: "Agronegócio",
    children: (
      <>
        Alojamentos; <br />
        Depósitos; <br />
        Banheiro/Vestiário; <br />
        Almoxarifado; <br />
        Cozinha;
      </>
    ),
    key: 4,
  },
  {
    ...commonCardProps,
    icon: Mecanic,
    type: 1,
    cardTitle: "Projetos mecânicos",
    children: (
      <>
        Fazemos o modelamento e detalhamos com o Autodesk Inventor em conjunto
        com o o AutoCAD para criar modelos 3D detalhados e desenhos técnicos de
        alta qualidade.
      </>
    ),
    key: 5,
  },
  {
    ...commonCardProps,
    icon: Fire,
    type: 1,
    cardTitle: "Projetos de caldeiraria",
    children: (
      <>
        Criamos o modelamento em 3D e detalhamos em 2D para a fabricação e
        montagem de seus projetos.
      </>
    ),
    key: 6,
  },
  {
    ...commonCardProps,
    icon: Metal,
    type: 1,
    cardTitle: "Estruturas Metálicas",
    children: (
      <>
        Projetamos em 3D e geramos os detalhamentos em cad e os cálculos pelo
        Cypecad.
      </>
    ),
    key: 7,
  },
  {
    ...commonCardProps,
    icon: Pipe,
    type: 1,
    cardTitle: "Tubulação",
    children: <>Elaboramos os desenhos no plant3D e detalhamentos em cad.</>,
    key: 8,
  },
];

const GridComponentList: React.FC<GridComponentProps> = ({ cardFilter }) => {
  useEffect(() => {
    setSelectedType(cardFilter);
  }, [cardFilter]);

  const [selectedType, setSelectedType] = useState(cardFilter);
  const filteredCards = selectedType
    ? cardsData.filter((card) => card.type === selectedType)
    : [];

  return (
    <>
      {filteredCards.map((card) => (
        <GridCard {...card} key={card.key} />
      ))}
    </>
  );
};

export default GridComponentList;
