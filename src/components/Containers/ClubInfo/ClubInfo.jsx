import React from "react";
import styled from "styled-components";

const ClubInfo = ({tags, links, ...props}) => (
  <div>
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
      <p>
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
      </p>
      <div>
        {links.map(link => (
          <Link>
            <CircleIcon src="https://via.placeholder.com/10" />
            <a href={link}>{link}</a>
          </Link>
        ))}
      </div>
    </ClubBody>
  </div>
);

const CircleIcon = styled.img`
  border: 2px solid black;
  border-radius: 50%;
  margin: 5px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Tag = styled.p`
  padding: 2px;
  border: 2px black solid;
`;

const Link = styled.div`
  display: flex;
`;

const TagSection = styled.div`
  display: flex;
  /* TODO: prop tag color */
`;

const ClubBody = styled.div`
  display: flex;
`;

const ClubHeader = styled.div`
  display: flex;
`;

const ClubDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default ClubInfo;
