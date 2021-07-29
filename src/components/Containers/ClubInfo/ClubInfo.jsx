import React from "react";
import styled from "styled-components";

const ClubInfo = ({tags, links, ...props}) => (
  <div>
    <CircleIcon src="https://via.placeholder.com/150" />
    <Title>ClubName</Title>
    <TagSection>
      {tags.map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </TagSection>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae velit
      cursus, viverra nisl a, commodo odio. Quisque vel urna eget augue vehicula
      bibendum nec quis neque. Nunc laoreet purus sit amet elit condimentum
      faucibus. Ut mi ligula, semper nec pellentesque at, lacinia id purus.
      Phasellus ut pretium leo, vitae rutrum velit. Praesent ac elit egestas,
      scelerisque augue sit amet, aliquet ante. Fusce nec massa porttitor,
      dapibus urna eu, viverra augue. Praesent dignissim vehicula est, id
      fermentum mauris hendrerit sed. Aliquam pellentesque quam ut dolor
      efficitur imperdiet. Etiam ut lacus viverra, aliquam mi in, dictum tellus.
      Nam posuere est ut ante lacinia sagittis. Proin quam augue, euismod ac
      lorem non, faucibus tincidunt purus. Sed vitae convallis odio. Donec
      ligula libero, finibus a tellus accumsan, mollis fermentum justo.
    </p>
    {links.map(link => (
      <div>
        <CircleIcon src="https://via.placeholder.com/10" />
        <a href={link}>{link}</a>
      </div>
    ))}
  </div>
);

const CircleIcon = styled.img`
  border: 2px solid black;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Tag = styled.p`
  padding: 2px;
  background-color: light-blue;
  border: 2px black solid;
`;

const TagSection = styled.div`
  display: flex;
`;

export default ClubInfo;
