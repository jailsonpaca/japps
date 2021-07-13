import React from "react";
import Item from "./item";
import styles from "./styles";
import {
  linkedin,
  instagram,
  whatsapp,
  github,
} from "../../assets/social-medias";

const SOCIAL_MEDIAS = [
  {
    id: 0,
    description: "Linkedin",
    img: linkedin,
    link: "https://linkedin.com/in/jailson-pacagnan-santana-993a9b127/",
  },
  {
    id: 1,
    description: "Instagram",
    img: instagram,
    link: "https://www.instagram.com/jailsonpaca/",
  },
  {
    id: 2,
    description: "WhatsApp",
    img: whatsapp,
    link: "https://api.whatsapp.com/send?phone=5548996015737/",
    bordered: true,
  },
  {
    id: 3,
    description: "GitHub",
    img: github,
    link: "https://github.com/jailsonpaca/",
    bordered: true,
  },
];

export function SocialMedias() {
  return (
    <div style={styles.container}>
      {SOCIAL_MEDIAS.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
