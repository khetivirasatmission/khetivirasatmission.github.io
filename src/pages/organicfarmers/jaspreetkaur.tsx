import { Card, Col, Row } from "antd";
import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../../components/layouts/PageLayout";
import SEO from "../../components/Seo";
import Profile from "../../components/Profile";
import farmer from "../../images/farmers/jaspreet-kaur.jpg";

const Page: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <h1>​Jaspreet Kaur, Chungha, Barnala</h1>

      <Row gutter={18}>
        <Col xs={24} md={24} lg={24}>
          <Profile designation="" image={farmer} />
        </Col>
      </Row>

      <Card title="" bordered={false}>
        <p>
          Jaspreet Kaur, is 20 years old and is in the final year of her
          graduation from Barnala District. She is actively involved in
          cultivating the vegetable kitchen garden in her house and feels
          passionately about the need for promoting organic cultivating. It has
          been three years since she along with her mother started cultivating
          vegetables organically, and her father and brother also occasionally
          help them out. She says, “earlier all of our family’s land was given
          out on rent since my father had a job, and before that my grandfather
          was also employed in the army. Women in cur households cannot go to
          the farms even if they want to. So we would sometimes grow flowers at
          home, but that’s about it. In the summer every year, all of us were
          afflicted with all kinds of diseases – particularly stomach
          infections. So after attending KVM meeting in our village , we decided
          to experiment and grow our own vegetables. When they talked about
          adverse health effects of vegetables laced with chemicals, it
          resonated with us”. She adds, “I also enjoy the work and like taking
          care of the plants. My mother and I cultivate the plot, but everyone
          else in the family is supportive as well.”
        </p>
        <p>
          “In the first year itself, we had high yields, so we were inspired to
          continue with it. The KVM activists gave us seeds that year. Then we
          bought hybrid seeds from the market, but now we make and store seeds
          for the next season. We tie fully dried seeds in a cloth and store
          them in a plastic box. Then before sowing we sort out the good seeds
          by dipping them in a solution of milk and water, and remove the ones
          that float up to the surface. The plot was prepared using cow dung
          manure. And we use a solution made with dried cow dung cakes and sour
          buttermilk to get rid of pests. The pest attacks happen generally
          during the summer, but ladybugs eat them, so there is no need to spray
          anything at all most of the time.”
        </p>
        <p>
          “The vegetables cook quickly unlike the ones brought from the market
          and they taste much better. Our health improved visibly since we
          started eating home grown vegetables. Now we just eat pulses or these
          vegetables in our meals, and avoid buying anything from outside. About
          two years ago, my mother bought cauliflower from the market. My
          brother and I were really upset and asked her not to ever buy any
          vegetables again. We just want to eat what we can grow in our own
          plot.”
        </p>
        <p>
          She believes that organic farming can be carried on a larger scale in
          the farms, by first encouraging people to carry out experiments on a
          smaller scale, like the kitchen garden where they can grow food for
          their own families. “Yields are less but the produce can be sold at
          higher prices. We get organic wheat from a farmer in our village.The
          biggest problem I think is that people do not want to take on hard
          work that is time-consuming. In the beginning I did not care for it
          much either. I just wanted to come home and watch television, but then
          slowly I developed an interest. Now, I constantly think about how I
          can make improvements. I ask people I meet if they have new seeds or
          plants, so that I can experiment with them in our plot. This time we
          even tried growing saffron between November and March”, she says with
          excitement. “A relative sent us the seeds. They grew three foot tall.
          We will send it to a vaid, to check whether it is of good quality or
          not. I am also thinking about growing some plants in plastic bottles.”
        </p>
        <p>
          “There is demand within the village for practical demonstrations of
          organic methods that are really helpful. I have started reading a lot
          about organic cultivation in magazines and whatever other reading
          material I can find. When I have any problems, I ask my father for
          help. I went to the fair organized by KVM in Bathinda in 2013 and that
          was a really useful experience since there were farmers from different
          parts of the country. I learnt a lot, particularly, the stall from
          Andhra Pradesh was really interesting.”
        </p>
        <p>
          “I would love to grow vegetables on our 8-acre farm as well, but as
          you know women do not work in Punjab in the fields. It is also
          difficult to go to the farm everyday to bring vegetables home for
          cooking. Only wheat and paddy is sown on our farm. Not many girls of
          my age in the village grow vegetables or take an interest in farming.
          They are too busy studying and many do not have the kucca yard space
          in their houses. People prefer to have concrete floors these days
          because they are cleaner. Most women do not want to take on the burden
          and say it’s a lot of work. When they spray chemicals they get three
          pumpkins at one time. What they do not realize is that without
          chemicals, the plant bears fruit gradually but for a long time. People
          are greedy and care about short-term gains. In our organic plot,
          plants like chilli and eggplant do not even have to be sown in the
          next season. They just bear fruit next year when the time comes. In
          the summer we grow chillies, pumpkins, different varieties of gourds,
          mint, beans, okra, capsicum, cucumber, eggplant and petha. In the
          winter, there is cauliflower, cabbage, carrot, radish, greens,
          coriander, eggplant, potatoes, onions, garlic, tomatoes and peas.
          There are about 275 houses in this village, and the ones that do have
          some kucca space inside the house grow something or the other. When we
          meet each other, our conversation often revolves around the vegetables
          – how much has grown and if someone is having a problem they will ask
          for solutions.”
        </p>
      </Card>
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <SEO title="​Jaspreet Kaur, Chungha, Barnala" />
);
