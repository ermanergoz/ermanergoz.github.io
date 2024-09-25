import React, { useState } from "react";
import "../styles/main.scss";
import "../components/HeroBanner";
import Layout from "../layouts/Layout";
import DropdownSelectionComponent from "../components/DropdownSelectionComponent";
import policiesData from "../data/policies.json";
import Link from "../components/Link";

const PrivacyPolicies: React.FC = () => {
  const filterOptions = ["Android", "iOS", "Web"];
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredPolicies = selectedFilters.length
    ? (
        policiesData as {
          id: number;
          title: string;
          file: string;
          type: string;
        }[]
      ).filter((policy) => selectedFilters.includes(policy.type))
    : policiesData;

  return (
    <Layout>
      <div className="privacy-policies">
        <h1>Privacy Policies</h1>
        <DropdownSelectionComponent
          options={filterOptions}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />

        <ul className="privacy-policies__list">
          {filteredPolicies.map((policy) => (
            <li key={policy.id}>
              <Link
                destination={`policies/${policy.file}`}
                children={policy.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default PrivacyPolicies;
