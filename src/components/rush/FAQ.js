import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import './style/faq.css'


function Faq() {
  return (
    <div className = "faq-container">
      <div className = "faq-header">
        <h1 className = "faq-title"> FAQ </h1>
      </div>
      <Accordion className = 'faq-questions'>
        <Accordion.Item className = 'faq-question-item' eventKey="0">
          <Accordion.Header className = 'faq-question-title'>What are fraternities and sororities?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
            Fraternities and sororities are what many people refer to "Greek Life"— societies that induct members for lifetime membership. Sororities are all-female greek organizations, while fraternities can be both all-male and co-ed organizations. Each organization has certain rules and values that make each one unique; however, they are often considered either "social" or "professional" groups. Professional greek organizations have strong focus on developing their members professionally as well as creating a strong brotherhood or sisterhood.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="1">
          <Accordion.Header className = 'faq-question-title' >What kind of Greek organization is Theta Tau?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
            Theta Tau is a co-ed professional engineering fraternity. This makes us a professional fraternity, which means we value the professional development and conduct of our members more than a social fraternity might. We are also composed of members that have an interest in engineering, which unites us as another common focus. Finally, we are co-ed, and accept members of all genders.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="2">
          <Accordion.Header className = 'faq-question-title'>What is rushing?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          Rushing is an interesting term to describe the first interactions you have with a greek organization. Theta Tau's rush week is designed to introduce you to the fraternity and it's members. You don't have to be an engineer to attend Theta Tau rush events, and you are allowed to rush other greek fraternities and sororities while rushing Theta Tau.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="3">
          <Accordion.Header className = 'faq-question-title'>I've heard that fraternities haze their members. Does Theta Tau do this as well?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          Theta Tau absolutely does not tolerate hazing. For that matter, we are also a dry fraternity, and do not spend money on alcohol nor do we permit alcohol at our events, including rush events. We uphold a strict risk management policy and conduct ourselves in a professional manner.          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="4">
          <Accordion.Header className = 'faq-question-title'>Do I need to be an engineer to join?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          We do not require you to be an engineer to rush with us. And once you are brother, you won't lose your membership if you decide to leave the college of engineering or pursue another major. The only condition we do require is that you are in the college of engineering at the time of your initiation (January for a pledge fall class and April for a winter pledge class). This means if you are in the process of applying to the college, you shouldn't count yourself out!          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="5">
          <Accordion.Header className = 'faq-question-title'>How is Theta Tau different from an honor society?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          Honor societies are great for being around people that share an academic interest with you. These are excellent groups for furthering your interests in a topic, but the benefits often stop there. Because Theta Tau is a brotherhood, you will a join a group of people that take friendships beyond the classroom and even the campus, and treat you like part of a family. You will connect with a group of people that have a diverse range of interests, which helps you diversify the kinds of contacts you make, and opens up opportunities beyond your major. And yet, Theta Tau will provide you with some of the greatest memories in college, 4 years that you don't want to just spend stuck in a textbook.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="6">
          <Accordion.Header className = 'faq-question-title'>How do I join Theta Tau?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          Joining Theta Tau itself is a great experience. First, attend our rush events. There, you'll get to introduce yourself to our brothers and get a feel for what the fraternity is like. Our rush events are typically low-stress, and simple activities that provide ample opportunity to hang out with brothers. Then, you will be given a bid, which is an invitation to become a pledge with the fraternity. After accepting your bid, you will become a pledge and start the process to becoming a brother!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="7">
          <Accordion.Header className = 'faq-question-title'>What can I expect at rush events?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          Rush is typically at the beginning of the academic semester. Rush events are low-stress, simple activities that are designed to help get exposure to the fraternity, and for brothers to meet you. Our first rush events are typically information sessions where our rush chairs will give you an in-depth explanation of the process to becoming a brother of Theta Tau. Other rush events will be a mix of fun and professional events that vary from semester to semester. You definitely want to introduce yourself to as many brothers and other rushees as you can at every rush event. This is the best way to show your interest in the fraternity. Relax and have fun! Many rushees walk away from rush with some unexpected but important friendships.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="8">
          <Accordion.Header className = 'faq-question-title'>What kind of time commitment is Theta Tau?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          Rush is intended to be low time commitment activity, and usually only about 4-6 hours per week (this is about the same as 1 credit class). Once you move further in the process and become a pledge, more commitment will be expected of you. Your time commitment may average closer to 8-10 hours, however your time will be well spent developing meaningful relationships with brothers and fellow pledges. Note that rushing and pledging are more rewarding the more time you invest in them. It is ultimately up to you to manage your time in a way to make the proper time commitment to the fraternity.          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="9">
          <Accordion.Header className = 'faq-question-title'>Am I eligibile to join?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          As a quick checklist, you are eligible to join Theta Tau as long as long you can meet the following criteria at the time of your initiation (January for a fall pledge class and April for a winter pledge class):
          <ul>
            <li>
                - Enrolled at the College of Engineering
            </li>
            <li>
                - Have at least 6 months before graduation
            </li>
            <li>
                - Have a minimum (passing GPA) of 2.0
            </li>
            <li>
                - Not be a member of a competing Fraternity or Sorority
            </li>
          </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className = 'faq-question-item' eventKey="10">
          <Accordion.Header className = 'faq-question-title'>How do I pronounce "Theta Tau"?</Accordion.Header>
          <Accordion.Body className = 'faq-question-ans'>
          THAY-Ta TAH. Notice the pronunciation of "Tau" differs from the typical pronunciation you might hear in a math class. This is not by mistake, but rather a greek grammatical rule.         </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
