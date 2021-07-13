import React from "react";
import Image from "next/image";
import { Container } from "./styles";

function Item({ item: { img, description, link, bordered = false } }) {
  return (
    <Container href={link} bordered={bordered}>
      <Image
        className="img"
        width={80}
        height={80}
        src={img}
        alt={description}
      />
      <div className="shadow" />
    </Container>
  );
}

export default Item;
