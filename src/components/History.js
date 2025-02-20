"import React from react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="container" id="history">
        <div className="card">
    <div className="card-header" style={{background: "linear-gradient(to right, rgb(89, 0, 17), rgb(176, 89, 110))", color:"#F8F0E3" , display:"flex" , padding:"1rem"}}>
     <h1><b>History</b></h1>
    </div>
    <div className="card-body" style={{backgroundColor:"#F8F0E3"}}>
      <h5 className="card-title">Special title treatment</h5>
      <p className="card-text" style={{color:"rgb(150, 0, 25)"}}>The Shree Shantika Parameshwari Temple in Devarhakkal, Kumta, has a rich history and deep spiritual significance. Since ancient times, places where sages, monks, and devotees performed penance have been considered sacred. Kumta is one such place that holds a special place in Karnataka’s history, not only as a center of trade and commerce but also as a place of great religious and cultural heritage. Among the many temples in this region, the Shree Shantika Parameshwari Temple is one of the most important and revered.

This temple has been a place of worship for centuries, and devotees believe that the goddess Shree Shantika Parameshwari blesses them with peace, prosperity, and protection from evil. The temple’s history is deeply connected to the traditions and beliefs of the people, and many religious texts and historical records mention its significance. The temple has been a center for performing "Dharma Karyas," which are righteous and charitable activities that bring prosperity not only to the devotees but to the entire region.

Shree Shantika Parameshwari is considered an incarnation of Adishakti, the primordial goddess who represents divine energy and power. She is worshipped with great devotion, and many people visit the temple seeking her blessings. Along with her, several other deities have also been consecrated in the temple. Shree Mahaganapati, the remover of obstacles, Shree Mangaladevi, who is associated with prosperity and well-being, and Shree Mookambika, known for wisdom and power, are among the gods worshipped here. One of the unique features of this temple is the presence of a sacred Udbhava Linga, a self-manifested Shiva Linga, which is believed to hold immense spiritual power.

Apart from these main deities, the temple also has shrines dedicated to Shree Kshetrapala, the guardian deity, Shree Kalabhairava, a fierce form of Lord Shiva, and the Navagrahas, the nine celestial deities who influence human life according to Hindu beliefs. With so many powerful deities in one place, the temple is considered extremely sacred and important for worship.

Over the years, the temple has been the site of many religious and cultural events. Festivals are celebrated with great enthusiasm, drawing devotees from various places. Many spiritual gatherings and rituals take place here, keeping the traditions alive. The temple trust and local devotees have taken efforts to renovate and expand the temple, ensuring that it continues to serve as a place of devotion and faith for future generations.

The Shree Shantika Parameshwari Temple in Devarhakkal, Kumta, stands as a beacon of spirituality, faith, and tradition. Devotees strongly believe in the power of the goddess, and her blessings are said to bring peace and prosperity to all who worship her with devotion. The temple continues to be a sacred place where people find solace, strength, and divine guidance. May the blessings of Shree Shantika Parameshwari always be upon everyone, and may this temple continue to shine as a symbol of devotion and righteousness forever.</p>
      <Link to="/siteHistory" className="btn" style={{background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)"}}>Go somewhere</Link>
    </div>
  </div></div>
    
  );
};

export default History;
