import React, { useState } from 'react'
import AboutCityCard from '../main/AboutCityCard'

export default function AboutCity() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Полоцк звание культурной столицы Беларуси 2010",
      description: "Почётное право первому носить титул «Культурной столицы Беларуси 2010 года» досталось древнему Полоцку как духовному центру Беларуси"
    },
    {
      id: 2,
      title: "Полоцк молодёжная столица Беларуси 2017",
      description: "Полоцк по итогам республиканского конкурса выбран молодежной столицей Беларуси 2017. Полоцк стал самым благоприятным по благоустройству территории, образованию, отдыху, и другие.и"
    },
    {
      id: 3,
      title: "Полоцк географический центр Европы",
      description: "Памятник «Географический центр Европы» в Полоцке был торжественно презентован жителям и гостям города 31 мая 2008 года в рамках празднования Дня города"
    },
    {
      id: 4,
      title: "Полоцк самое большое количество музеев в Беларуси",
      description: "В Полоцк насчитывается 11 различных и интереснейших муззев. Посетив которые можно по лучше узнать историю, архитектуру, зарождение и развитие Полоцка"
    },
  ])
  
  return (
    <section className='aboutCity' >
      <h2 className="aboutCity__title" id='photo'>О ГОРОДЕ</h2>
      <hr className="aboutCity__hr" />
      <p className="aboutCity__description">События и факты моего города</p>
      <div className="aboutCity__content">
        {data.map((item, index) => 
            <AboutCityCard data={item}/>
        )}
      </div>
    </section>
  )

}
