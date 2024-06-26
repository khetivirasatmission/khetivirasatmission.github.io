import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/kamaljeet-hayer.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>​A lawyer dons khadi </h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          Kamaljeet Hayer left his flourishing legal practice to grow food that
          nourish
        </p>
        <p>
          The most important thing that strikes you on meeting Kamaljeet Singh
          Hayer is the amount of information he doles out on farming.
          Nutrient-fixating crops, healing trees, cycle of life running through
          nature, he has insights on all this and more.
        </p>
        <p>
          And to know that he began farming just over four years back . Before
          that he was negotiating with clients in evenings, preparing notes at
          nights and arguing in the day time. Kamaljeet, a resident of Sohangarh
          (Rattewala) village near Guru Harsahai town in Ferozepur district, had
          a flourishing legal practice making lakhs every month. But today he
          dons khadi and toils in his farm starting early morning.
        </p>
        <p>
          It was in 2012 when his grandfather passed away at the age of 101,
          Kamaljeet wondered what made him live so long: “My father had passed
          away at 53 due to a massive heart attack and my younger brother died
          of brain tumour at age of 10 years. How could such a drastic shift
          come in our health within a generation?” He found the problem and the
          solution in farming. “We are what we eat. Nobody disputes that our
          ancestors had more nutritious food than us. They had lesser stress
          triggers than us because of the simple life they led. I wanted better
          health for my family but was not sure on how to achieve that,” he
          says. Kamaljeet started searching online and came across the website
          of Kheti Virasat Mission. He called up KVM’s executive president
          Umendra Dutt who asked him to attend a workshop being organised in a
          few days. Kamaljeet did not know that this one workshop will be the
          turning point of his life as he met famous scientist and inspiration
          for many organic farmers, Dr O P Rupela
        </p>
        <p>
          At the workshop, Dr Rupela asked why Punjabi farmers were not adopting
          organic farming, which reduces input costs without affecting yield. A
          consensus emerged that people won’t believe anything without seeing
          it. Dr Rupela then opined that setting up successful organic farm
          models in Punjab will help spread the idea. He decided to put all his
          experience and knowledge in this farm.
        </p>
        <p>
          Kamaljeet, despite being new to the group, offered his farm to be
          developed into a model, but a quick look at his profile made Dr Rupela
          reject him. “I had 50 acres which I always gave on lease. I knew
          nothing about farming, had a flourishing legal practice and my family
          was not supportive of this idea. Dr Rupela thought I would regret my
          decision later. But I was determined enough and kept pleading for
          months,” Kamaljeet says.
        </p>
        <p>
          Finally Dr Rupela agreed but told him to be aware of the stages of
          progress which will not only depend on his efforts but also reaction
          of people. First, they will ridicule you, then they will oppose you,
          then they will join you.
        </p>
        <p>
          Dr Rupela stayed for several days with Kamaljeet giving him deep
          insights about farming. Around 20 acres of his 50 acre farm was
          selected for developing this biodiversity-based natural farm model
          that aims to fulfill the needs of a family while providing a stable
          and substantial income. “Besides his knowledge Dr Rupela also took
          inputs from around 25 people. He always said that he got all his
          practical knowledge from farmers. When he passed away last year, it
          was a big shock for me and I am still trying to recover from that,”
          Kamaljeet says.
        </p>
        <p>
          But like a true student, the man has struck to his ambitions. The farm
          is an eye opener in the way it has been designed to recycle waste
          through continuous exchange of nutrients between various activities.
          Rows of trees of 120 varieties on the edges, a small pasture with
          herbs for highly nutritious milk, a pond that harvests rain and canal
          water for later use, combination of crops which complement each other
          for optimal growth in minimum resources, all these aspects makes this
          a unique farm.
        </p>
        <p>
          “Whatever Dr Rupela told me about stages of progress came true.
          Villagers and farm labourers mocked me at first, then neighbours tried
          to burn my trees and finally people are joining me,” he says proudly.
        </p>
        <p>
          He has two farmers with him who have taken to natural farming. In
          fact, they have joined hands to build a cooperative. “Between us we
          are growing 60 crop varieties on 50 acres throughout the year. We have
          started supplying healthy and nutritious food to interested families
          in Muktsar town around the year. That will help deal with marketing
          issues that mostly crop up with organic farming,” he informs.
        </p>
        <p>
          Two other farmers from neighbouring areas have also joined hands and
          are selling their produce from an outlet in Muktsar town under the
          name "Kudrat Hut". “We are making an income of Rs 60,000 every month
          and there are around 25 families who are regularly taking our
          produce,” Kamaljeet says. He’s now planning to introduce farm tourism
          for those interested in knowing more about natural farming. “I get
          many visitors from across Punjab every week who want to see the farm.
          Some of them have also evinced interest in staying for a couple of
          days and enjoy the village life,” he informs.
        </p>
        <p>
          Today, Kamaljeet has graduated to being a mentor for others and the
          lessons he has learnt are not easy to forget. “I came into natural
          farming to save my family. In race for making more money, we forgot
          that farming is not just about sowing seeds and reaping harvest for
          the market. It’s a unique amalgamation of soil, trees, birds, insects,
          animals and human being. By taking to chemical farming and
          monoculture, we have disturbed this relationship. But now I am a
          satisfied man,” Kamaljit infers.
        </p>
        <p>May his tribe grow.</p>
        <p>By Manu Moudgil</p>
        <p></p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => <SEO title="​A lawyer dons khadi " />;
