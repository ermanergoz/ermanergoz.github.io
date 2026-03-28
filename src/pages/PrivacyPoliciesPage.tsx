import Layout from "../components/ui/Layout";
import ExternalLink from "../components/ui/ExternalLink";
import policiesData from "../data/policies.json";
import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import type { Policy } from "../types/policy";

const policies: Policy[] = policiesData;

function PrivacyPoliciesPage() {
  const { t } = useTranslation();
  useDocumentTitle(t("privacyPolicies.title"));

  return (
    <Layout>
      <div className="privacy-policies">
        <h1>{t("privacyPolicies.title")}</h1>
        <ul className="privacy-policies__list">
          {policies.map((policy) => (
            <li key={policy.id}>
              <ExternalLink
                href={`policies/${policy.file}`}
                title={policy.title}
              >
                {policy.title}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default PrivacyPoliciesPage;
