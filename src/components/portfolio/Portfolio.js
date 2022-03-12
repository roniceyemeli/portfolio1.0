import { useEffect, useState } from "react";
import { designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from "../../data";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {

    switch (selected) {
        case "featured":
            return setData(featuredPortfolio);
        case "web":
            return setData(webPortfolio);
        case "mobile":
            return setData(mobilePortfolio);
        case "design":
            return setData(designPortfolio);
        default:
            return setData(featuredPortfolio);

    }
    
  }, [selected])
  console.log(selected)

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
          {
              data.map( data => 
        <div className="item" key={data.id}>
          <img src={data.img} alt="projects_images" />
          <h3>{data.title}</h3>
        </div>
            )
      }
      </div>
    </div>
  );
};

export default Portfolio;
