import Icon from "@components/ui/Icon";
import { Link } from "react-router-dom";
import styles from "./styles/OAuthLinks.module.css";

type OAuthProvider = "google" | "twitter" | "facebook" | "whats app"; // Explicit provider types

interface OAuthLinksProps {
  providers: OAuthProvider[];
}

const OAuthLinks = ({ providers }: OAuthLinksProps) => {
  return (
    <div className={`${styles.authLinksContainer} gap-4`}>
      {providers.map((provider) => (
        <Link to={`*`} key={provider} className={`${styles.link} p-1`}>
          <Icon name={provider} className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
};

export default OAuthLinks;
