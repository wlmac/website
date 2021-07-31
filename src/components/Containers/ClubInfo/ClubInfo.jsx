import React from "react";
import styled from "styled-components";

import media from "../../../utils/media";

const ClubInfo = ({tags, links, ...props}) => (
  <Wrapper>
    <ClubHeader>
      <CircleIcon src="https://via.placeholder.com/150" />
      <ClubDetails>
        <Title>ClubName</Title>
        <TagSection>
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </TagSection>
      </ClubDetails>
    </ClubHeader>
    <ClubBody>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
        velit cursus, viverra nisl a, commodo odio. Quisque vel urna eget augue
        vehicula bibendum nec quis neque. Nunc laoreet purus sit amet elit
        condimentum faucibus. Ut mi ligula, semper nec pellentesque at, lacinia
        id purus. Phasellus ut pretium leo, vitae rutrum velit. Praesent ac elit
        egestas, scelerisque augue sit amet, aliquet ante. Fusce nec massa
        porttitor, dapibus urna eu, viverra augue. Praesent dignissim vehicula
        est, id fermentum mauris hendrerit sed. Aliquam pellentesque quam ut
        dolor efficitur imperdiet. Etiam ut lacus viverra, aliquam mi in, dictum
        tellus. Nam posuere est ut ante lacinia sagittis. Proin quam augue,
        euismod ac lorem non, faucibus tincidunt purus. Sed vitae convallis
        odio. Donec ligula libero, finibus a tellus accumsan, mollis fermentum
        justo.
      </Description>
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
);

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
  padding: 2px;
  border: 2px black solid;
`;

const Description = styled.p`
  width: 80%;
  margin: 0;
  padding-left: 1.5rem;
  padding-right: 2rem;
  border-left: 2px solid blue;
`;

const Link = styled.div`
  display: flex;
`;

const TagSection = styled.div`
  display: flex;
  /* TODO: prop tag color */
`;

const LinkSection = styled.div`
  width: auto;
  background-color: red;
`;

const ClubHeader = styled.div`
  display: flex;
  ${media(
    600,
    `
    flex-direction: column;
    align-items: center;
    `
  )}
`;

const ClubBody = styled.div`
  display: flex;
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
`;

const Wrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
`;

export default ClubInfo;
