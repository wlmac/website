import React from "react";
import ClubInfo from "../components/Containers/ClubInfo/ClubInfo";

const Clubs = () => (
  <div>
    <ClubInfo
      topGraphic="http://via.placeholder.com/100"
      clubIcon="https://via.placeholder.com/150"
      title="MCPT"
      tags={[
        {
          name: "technology",
          color: "blue"
        },
        {
          name: "science",
          color: "yellow"
        }
      ]}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
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
        justo.`}
      links={["http://example.org/", "http://example.org/1"]}
    />
  </div>
);

export default Clubs;
