import React from 'react';
import Overview from 'modules/shared/Overview';

// eslint-disable-line quotes, max-len
const text = `
  <p>Obsessed with the idea of empowering the travelers with best vacation deals, TravelTriangle is a product of <strong>Holiday Triangle Travel Pvt. Ltd.</strong> We are an online marketplace that connects a traveler to multiple local travel agents. With the help of these 650+ local <strong>travel</strong> experts TravelTriangle has been able to cater to the needs of over 10 Lac travelers on international tour holidays as well as domestic India tours. \r\n To provide the best tour and travel experiences, our packages are customizable at the time of booking. From a backpacker’s needs to a honeymooner’s demands, TravelTriangle crafts the best vacation deals for holiday destinations in India as well as abroad. Amongst our best selling packages, our Mauritius honeymoon package guarantees personalized memories for newlyweds and our Mauritius holiday package offers an exceptional family getaway at the most reasonable costs. From the other international travel deals that we offer, Sri Lanka Tour packages, Maldives packages and Singapore packages sell like hot cakes. For tourist destinations in India, our Kerala Tour Packages are as enriching as the land of gods itself. Leh-Ladakh tour packages and Kashmir holiday packages at TravelTriangle know no limits of customization, as we have got an extremely experienced family of agents residing in the Himalayas. Book your holiday with us and we show you the world like you have never seen it before. From adventures in Ladakh to a crazy vacation in Amsterdam to romancing in the backwaters of Munnar and Venice, TravelTriangle is your ideal travel buddy.</p>
  <p>At TravelTriangle, we know that a <strong>holiday</strong>, ideally, should not be all about planning, finding and making bookings. In fact, it should be some time away from the daily hustle bustle that keeps you busy. If planning your entire tour sounds like a burden, we are the strongest shoulders to cry on. We don’t just provide well-planned and even better-executed itineraries, but also offer you a chance to customize it as per your whims and fancies. A <a href=https://traveltriangle.com/solo-tour-packages target=”_blank”>solo tour</a> on your mind? We got you covered! Planning to whisk your life partner to an uber-romantic destination? We have a huge list, and some honeymoon freebies! Taking along the family for a much needed summer break? Our list is endless, and you can also find places where kids can enjoy separate activities from adults. And what about a holiday with friends? For your gang of amigos, we have handpicked the most happening places with activities that are sure to titillate all your senses.</p>

  <p>Spend some time in the verdant environs of Bali, with the swaying rice fields giving the stunning sunrise a run for its money. Or how about enjoying a couple of days in the hyped-up atmosphere of Phuket, with sun-kissed beaches and an active nightlife to keep you company? Chances are you will also love to explore the ancient beauty and splendid architecture of various European cities, such as Athens, Rome, Paris; and the list could go on. We have added plenty more international destinations to our kitty, so that you can have your pick of amazing holidays, and travel stories to tell.</p>

  <p>If you have something a little close to home in mind, then why not spend some time exploring the luscious other-worldly beauty of the Andamans, where white-sand beaches, rocky outcrops and a colonial lifestyle await you! In case you are not a beach baby, the rolling hills of Himachal and Uttarakhand can appease your wanderlust, where a more simplistic lifestyle and friendly locals ensure a relaxing holiday. In fact, India is a great place to start quenching your thirst for travel. Whether you are looking for beaches, mountains, rivers, lakes, forests or man-made wonders to explore, India is sure to have the answer for you. And who else can cater to your travel requirements, within India as well as outside, than us! </p>

  <p>Be it a <a href=https://traveltriangle.com/budget-tour-packages target=”_blank”>budget tour</a> that you are looking for, or a super luxurious one, <strong>TravelTriangle</strong> is forever ready to plan your holiday for you, whatever the destination might be.</p>
`;

const SEOBlock = () => (
  <div className="at_whoweare">
    <h2 className="f20 fw9 m0 mb24">Who We Are?</h2>
    <Overview
      //className="pfc4"
      //title="Overview"
      description={text}
    />
  </div>
);

export default SEOBlock;
