import { Card, Col, Row } from "antd";
import React from "react";

import Profile from "../../components/Profile";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
// import start from "../images/trinjan/start.jpg";

const Page: React.FC<PageProps> = () => (
  <PageLayout>
    <h1>Anna's Journey with KVM</h1>

    {/* <Row gutter={18}>
      <Col xs={24} md={24} lg={24}>
        <Profile designation="" image={start} />
      </Col>
    </Row> */}

    <Card title="Joining" bordered={false}>
      <p>
        Anna Helfers(from Germany) joined KhetiVirasat Mission (KVM)in August
        2018 for a project on straw management in Punjab. The project was run by
        KVM,Center for Sustainable Agriculture (CSA) and the Swiss-based
        institute RanasMosler. Within the project Anna collected data for her
        master thesis in environmental psychology. She first joined KVM for some
        weeks at the head office in Jaitu before leaving for a 5 weeks journey
        through Punjab. I spent two wonderful months working with KVM at Jaitu
        in a project on rice straw management in Punjab. In the following, I
        would like to share my experiences on arriving in India, staying at KVM
        and travelling through Punjab.
      </p>
    </Card>

    <Card title="Journey" bordered={false}>
      <p>
        The journey to Jaitu takes quite a while. I arrived early morning at
        Delhi airport and took theFirozpur Shatabti Express from New Delhi
        Railway Station to KotKapura. At the airport you can directly buy a
        local Sim-Card. Airtel works best for Punjab and charges 999 Rupees,
        providing 1.4 GB per day for the following 3 month. I would strongly
        recommend to get a Sim-Card, as free Wifi is not very common in India.
        (It takes some hours until the card is activated!)For transportation
        within Delhi, I recommend using the metro. It is cheap, fast and clean.
        Also, you can escape the smog and metropoles’ hectic pace for some
        minutes. In the metro you find “women only” coaches in the front or back
        of the train, which is especially nice if you are travelling alone. If
        you travel with baggage, taking a cab might be more convenient. You can
        book Ola-Cabs in advance and pay the fixed price online. You will
        identify your driver using a code, provided by the application. My train
        ticket was booked in advance, including seat reservation and a veg meal,
        so I only had to find the platform and my coach in the mess of New Delhi
        Railway Station. The Delhi-trash-belt ends after approximately one hour
        drive. The train speeds up now and rushes through bright green rice
        fields. While the sun is setting, you can see buffalos taking their
        evening bath in ponds next to the railway.Arriving late at night at
        KotKapura Railway Station, Rupsi from KVM were already waiting to bring
        me “home”.
      </p>
    </Card>

    <Card title="Living at KVM" bordered={false}>
      <p>
        The house is located in a quiet and decent part of the small town. Even
        if the crowded market is only 10 minutes’ walk away, it feels like
        living on a small island here. In the evening, kids are playing on the
        streets, letting their kites fly in the warm evening breeze.From the
        rooftop – a nice place to be alone for some time – you can see the
        surrounding fields. While joining Rupsi for her daily evening walk, I
        slowly got to know the whole neighborhood, stopping here and there for a
        small chat. KVM’s house itself is a co-living-and-working space.
        Currently Umendra Dutt and Rupsi Garg are the main inhabitants of this
        house. The walls are plastered with newspaper articles about organic
        agriculture, the MSP and the big transformation Punjab’s society is
        running through. In the book shelfs you find books on farming in India,
        traditional knowledge and political theory. On the billboard upcoming
        events like “mushroom workshops” or “discussion on rice straw burning”
        are announced. The environment inspires to discuss about society, nature
        and human values, finding strong discussion partners and inspiring
        practitioners within KVM’s staff. At daytime, there is always a rush of
        staff members and volunteers going in and out. They are working in the
        office, sorting seeds in one of the rooms, processing crops at the
        rooftop, and planning upcoming projects... Manju, the housekeeper, is
        coming every morning to cook tasty homemade organic food for the day,
        sometimes offering an extra banana-shake and of course some tasty Chai.
        I shared the room with Rupsi and in the evening hours I could join her
        for some Gandhi-like spinning.
      </p>
    </Card>

    <Card title="Travelling in Punjab" bordered={false}>
      <p>
        After two weeks, the field phase of our study began. We left for a
        5-weeks road trip across Punjab. Our core team consisted of eight
        enumerators (students from the Amritsar College of Engineering and
        Technology), Rupsi and me. For some days we were accompanied by members
        of the projects’ partner organizations. In total, we interviewed
        approximately 700 rice farmers.The trip was organized and coordinated by
        Rupsi, making sure we would always have a decent headquarter to stay and
        to regenerate after long days in the field.We learned a lot about
        agricultural techniques and the challenges, farmers face in the
        different regions of Punjab. KVM has a broad network all over the state.
        So, we had the chance to meet some KVM-associated farmers in different
        villages. It was very impressive and inspiring to discuss with them and
        to learn how they decided to step away from chemical farming.Working and
        travelling in India is of course sometimes challenging, but travelling
        in the team helped me a lot to feel safe and comfortable. Farewell: Time
        was flying. After eight weeks I already had to leave back home. Leaving
        India was hard. I am already missing the friends I found within this
        short but intensive time. I hope to see all of them again one day. Thank
        you, Umendra ji and Rupsi ji, for having such an inspiring time at your
        organization. I would love to come back one day, to get a deeper insight
        in KVM’s other projects, to learn about the women-run kitchen garden
        project, to join for some seed conservation workshops and all the other
        inspiring projects and ideas KVM is engaged in. Whoever is considering
        to join KVM for volunteering, an internship or work:You will not only
        find “a job”, but people who are passionate about their work and who
        know to combine hard work with a lot enthusiasm and fun.
      </p>
    </Card>
  </PageLayout>
);

export default Page;

export const Head: HeadFC = () => (
  <SEO title="Anna's Journey with KVM" description="" lang="en" />
);
