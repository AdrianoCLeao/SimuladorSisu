"use client";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import React, { useState } from "react";
import FilterBar from "@/components/Filters";

export default function Panel() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const cardsData = Array.from({ length: 25 }, (_, index) => ({
    title: `Card Title ${index + 1}`,
    description: "This is a description for card " + (index + 1),
  }));

  const Filters = ["All", "Teste1", "Teste2", "Teste3"];

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    console.log(`Filter selected: ${filter}`);
  };

  return (
    <div className="">
      <Navbar />
      <FilterBar filters={Filters} onFilterSelect={handleFilterSelect} />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            link="#"
          />
        ))}
      </div>
    </div>
  );
}
