import React from "react";
import "../styles/main.scss";
import "../components/HeroBanner";
import Layout from "../layouts/Layout";
import policiesData from "../data/policies.json";
import Link from "../components/Link";

const PrivacyPolicies: React.FC = () => {
  return (
    <Layout>
      <div className="privacy-policies">
        <h1>Privacy Policies</h1>
        <ul className="privacy-policies__list">
          {policiesData.map((policy) => (
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
