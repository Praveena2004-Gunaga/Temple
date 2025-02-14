import React, { useState } from "react";

export default function History_b() {
  const [expandedCard1, setExpandedCard1] = useState(false);
  const [expandedCard2, setExpandedCard2] = useState(false);

  const textCard1 = `The Shree Shantika Parameshwari Temple in Devarhakkal, Kumta, has a rich history and deep spiritual significance. Since ancient times, places where sages, monks, and devotees performed penance have been considered sacred. Kumta is one such place that holds a special place in Karnataka’s history, not only as a center of trade and commerce but also as a place of great religious and cultural heritage. Among the many temples in this region, the Shree Shantika Parameshwari Temple is one of the most important and revered.

This temple has been a place of worship for centuries, and devotees believe that the goddess Shree Shantika Parameshwari blesses them with peace, prosperity, and protection from evil. The temple’s history is deeply connected to the traditions and beliefs of the people, and many religious texts and historical records mention its significance. The temple has been a center for performing "Dharma Karyas," which are righteous and charitable activities that bring prosperity not only to the devotees but to the entire region.

Shree Shantika Parameshwari is considered an incarnation of Adishakti, the primordial goddess who represents divine energy and power. She is worshipped with great devotion, and many people visit the temple seeking her blessings. Along with her, several other deities have also been consecrated in the temple. Shree Mahaganapati, the remover of obstacles, Shree Mangaladevi, who is associated with prosperity and well-being, and Shree Mookambika, known for wisdom and power, are among the gods worshipped here. One of the unique features of this temple is the presence of a sacred Udbhava Linga, a self-manifested Shiva Linga, which is believed to hold immense spiritual power.

Apart from these main deities, the temple also has shrines dedicated to Shree Kshetrapala, the guardian deity, Shree Kalabhairava, a fierce form of Lord Shiva, and the Navagrahas, the nine celestial deities who influence human life according to Hindu beliefs. With so many powerful deities in one place, the temple is considered extremely sacred and important for worship.

Over the years, the temple has been the site of many religious and cultural events. Festivals are celebrated with great enthusiasm, drawing devotees from various places. Many spiritual gatherings and rituals take place here, keeping the traditions alive. The temple trust and local devotees have taken efforts to renovate and expand the temple, ensuring that it continues to serve as a place of devotion and faith for future generations.

The Shree Shantika Parameshwari Temple in Devarhakkal, Kumta, stands as a beacon of spirituality, faith, and tradition. Devotees strongly believe in the power of the goddess, and her blessings are said to bring peace and prosperity to all who worship her with devotion. The temple continues to be a sacred place where people find solace, strength, and divine guidance. May the blessings of Shree Shantika Parameshwari always be upon everyone, and may this temple continue to shine as a symbol of devotion and righteousness forever.`;

  const textCard2 = `The town of Kumta has a deep historical and spiritual background, known for its religious significance since ancient times. Many saints and sages have performed penance here, making the land sacred. Over time, Kumta has been influenced by various rulers and dynasties, each leaving its mark on the region’s culture and traditions. The town is renowned for its temples, which have been centers of devotion and faith for generations. Among them, the Shree Shantika Parameshwari Temple, located in Devarhakkal, holds a special place as a divine and powerful religious site.  

The Shree Shantika Parameshwari Temple is one of the most revered temples in the region. Devotees believe that the goddess Shree Shantika Parameshwari is a powerful form of Adishakti, the supreme divine energy, who blesses her devotees with peace, prosperity, and protection. Many religious texts and historical records mention this temple, proving its deep-rooted significance in the cultural and spiritual life of the people. The temple is considered a source of divine grace, where countless devotees seek blessings for their well-being and success in life.  

The temple is not only dedicated to Shree Shantika Parameshwari but also houses several other important deities. Among them are Shree Mahaganapati, who is worshipped as the remover of obstacles and the lord of wisdom; Shree Mangaladevi, a powerful form of the divine mother, worshipped for her protection and blessings; and Shree Mookambika, the goddess of wisdom, power, and knowledge, highly revered by scholars and devotees. One of the most unique and sacred features of the temple is the presence of a "Udbhava Linga," which is a naturally formed Shiva Linga. This Linga is considered to have immense spiritual power and is believed to be self-manifested, making it highly significant for devotees of Lord Shiva. The temple also has shrines dedicated to Shree Kshetrapala, the guardian deity of the region, Shree Kalabhairava, a fierce form of Lord Shiva, and the Navagrahas, the nine planetary deities who influence human life according to Hindu beliefs.  

The Shree Shantika Parameshwari Temple has been a center for religious and cultural activities for generations. Many sacred rituals, prayers, and festivals are conducted here, bringing together large numbers of devotees. The temple follows traditional Vedic practices, ensuring that every ritual is performed with the utmost devotion and authenticity. Special ceremonies are held on auspicious occasions, attracting people from different parts of the region. Apart from daily worship, the temple trust and devotees actively engage in Dharma Karyas, such as organizing religious discourses, feeding the poor, and supporting community welfare programs. These activities reflect the temple's commitment to spiritual and social well-being. The temple also plays an essential role in preserving cultural traditions by conducting annual festivals, music and dance performances, and other devotional events.  

Over the years, devotees and temple authorities have taken significant steps to maintain and enhance the temple structure. Renovation work has been carried out to preserve its divine essence while improving facilities for visitors. The efforts of the temple trust and the contributions of devotees have ensured that the temple remains a sacred space for worship, meditation, and spiritual growth. Many devotees have come forward to support the development of the temple, making it a well-maintained and welcoming place of devotion.  

The Shree Shantika Parameshwari Temple in Devarhakkal, Kumta, is not just a place of worship but a spiritual sanctuary that continues to inspire faith and devotion. It is believed that those who visit the temple and seek the blessings of Shree Shantika Parameshwari experience peace, happiness, and success in their lives. The temple stands as a timeless symbol of divine grace and cultural heritage, drawing people from near and far. With its sacred history and ongoing religious activities, this temple will continue to be a beacon of faith and devotion for generations to come. May the blessings of Shree Shantika Parameshwari be upon all!`;

  const previewLength = 300;

  return (
    <div style={{ padding: "20px", maxWidth: "90%", margin: "auto" }}>
      {/* Reusable Card Component */}
      {[{ title: "Introduction", text: textCard1, expanded: expandedCard1, setExpanded: setExpandedCard1 },
        { title: "Temple History", text: textCard2, expanded: expandedCard2, setExpanded: setExpandedCard2 }].map((card, index) => (
        <div
          key={index}
          className="card"
          style={{
            marginBottom: "20px",
            border: "2px solid #F8F0E3",
            borderRadius: "15px",
            padding: "20px",
            background: "linear-gradient(to right,rgb(150, 0, 25),rgb(198, 98, 115)",
            boxShadow: "4px 4px 15px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h2 style={{ color: "#F8F0E3", fontWeight: "bold", textAlign: "center" }}>
            {card.title}
          </h2>
          <p
            style={{
              color: "#F8F0E3",
              whiteSpace: "pre-line",
              textAlign: "justify",
              fontSize: "1rem",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            {card.expanded ? card.text : `${card.text.slice(0, previewLength)}...`}
          </p>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button
              onClick={() => card.setExpanded(!card.expanded)}
              style={{
                background: "none",
                border: "none",
                color: "#F8F0E3",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
                padding: "8px",
                textDecoration: "underline",
                transition: "color 0.2s ease-in-out",
              }}
            >
              {card.expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
