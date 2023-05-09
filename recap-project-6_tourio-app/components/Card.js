import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";

const Article = styled.article`
  border: 2px solid #f5f5dc;
  border-radius: 0.8rem;
  padding: 0.5rem;
  background-color: #acb1d6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Figcaption = styled.figcaption`
  font-family: Geneva;
  font-size: 1.3rem;
  font-weight: 600;
  padding-top: 0.5rem;
`;

const Paragraph = styled.p`
  font-family: Geneva;
  font-size: 1rem;
`;

export default function Card({ name, image, location, id }) {
  return (
    <Article>
      <Figure>
        <ImageContainer>
          <StyledImage
            src={image}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt=""
          />
        </ImageContainer>
        <Figcaption>{name}</Figcaption>
      </Figure>
      <Paragraph>Location: {location}</Paragraph>
      <Link href={`places/${id}`} passHref legacyBehavior>
        <Anchor>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </Anchor>
      </Link>
    </Article>
  );
}
