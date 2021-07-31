import React from "react";
import styled from "styled-components";

import media from "../../../utils/media";

const ClubInfo = ({
  topGraphic,
  clubIcon,
  title,
  tags,
  description,
  links,
  ...props
}) => (
  <div>
    <TopGraphic src={topGraphic} />
    <Wrapper>
      <ClubHeader>
        <CircleIcon src={clubIcon} />
        <ClubDetails>
          <Title>{title}</Title>
          <TagSection>
            {tags.map(tag => (
              <Tag key={tag.name} color={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </TagSection>
        </ClubDetails>
      </ClubHeader>
      <ClubBody>
        <Description>{description}</Description>
        <LinkSection>
          {links.map(link => (
            <Link key={link}>
              <CircleIcon src="https://via.placeholder.com/10" />
              <a href={link}>{link}</a>
            </Link>
          ))}
        </LinkSection>
      </ClubBody>
    </Wrapper>
  </div>
);

const TopGraphic = styled.img`
  border-bottom: 8px solid blue;
  margin-bottom: 2rem;
  width: 100%;
  height: 200px;
`;

const CircleIcon = styled.img`
  border: 2px solid black;
  border-radius: 50%;
  margin: 5px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
`;

const Tag = styled.p`
  padding: 2px 4px;
  margin-right: 6px;
  border: 2px black solid;
  ${({color}) => `
    background-color: ${color}
  `}
`;

const Description = styled.p`
  width: 60%;
  margin: 0;
  padding-left: 1.5rem;
  padding-right: 2rem;
  margin-left: 80px;
  border-left: 5px solid blue;
  ${media(
    600,
    `
      border: 0;
      padding: 0;
      margin: 10px 0;
      width: auto;
    `
  )}
`;

const Link = styled.div`
  display: flex;
`;

const TagSection = styled.div`
  display: flex;
`;

const LinkSection = styled.div`
  width: auto;
`;

const ClubHeader = styled.div`
  display: flex;
  ${media(
    600,
    `
      flex-direction: column;
      align-items: center;
      text-align: center;
    `
  )}
`;

const ClubBody = styled.div`
  display: flex;
  margin-top: 10px;
  ${media(
    600,
    `
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
    `
  )}
`;

const ClubDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export default ClubInfo;
