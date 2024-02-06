document.addEventListener('DOMContentLoaded', function () {
  const giftItems = document.querySelectorAll('.gift li');
  const descriptions = document.querySelectorAll('.gift-description');
  const bottomContainer = document.querySelector('.bottom-container');

  giftItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      showGiftDescription(index);
    });
  });

  // Add click event listener to the .gift-description sections
  descriptions.forEach((description, index) => {
    description.addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        const selectedSubGift = event.target.textContent;
        displaySubGiftMessage(index, selectedSubGift);
      }
    });
  });

  function showGiftDescription(index) {
    // Hide all descriptions
    descriptions.forEach(description => {
      description.style.display = 'none';
    });

    // Show the selected description
    descriptions[index].style.display = 'block';
  }

  function displaySubGiftMessage(giftIndex, subGift) {
    const messages = {
      'Knowledge': {
        'Critical Thinking: The analysis of given information to make a judgement.': '1) Work Hard: Continue to work hard to hone my strength in critical thinking. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Analyze: Break down information to ingest and understand information easier. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Make Decisions: Practice decision making based on logical decisions. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Seek Feedback: Be more open to constructive criticism to refine my thinking/ideas. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Debate and Discuss: Engage in discussions with others to improve ideas or see different perspectives.', 
        'Problem Solving: Finding solutions to make something easier to understand or do.': '1) Root Cause: Identify root causes to understand why it is an issue and how to address it. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Brainstorm: Try to find more solutions to address and troubleshoot problems. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Continous Improvement: Continue to look towards improving problem solving abilities to optimize and hone it. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Embrace Challenges: Continue to embrace challenges and not give up so early so I can continue to grow. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Resilient: Maintain composure when there is a challenge.'
      },
      'Empathy': {
        "Emotional Awareness: The ability to conceptualize and describe one's own emotions and those of others.": '1) Why?: When I feel a type of way, ask myself why I feel this way and reflect. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Mind-Body Practice: Practice doing yoga to connect my mind and body. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Actively Listen: Pay close attention to others when they are speaking to understand their perspective. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Get Involved: Engage in activites that will expose me to different cultures and communities. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Ask Open Ended Questions: These questions could invite a conversation for a deeper understanding.',
        'Patience: The ability to tolerate an issue.': '1) Practice Mindfullness: Being Mindful can help me become more aware of my thoughts and awareness. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Count to 10: When I feel impatience rising, take a moment to count to 10 before reacting. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Deep Breaths: Deep, slow breaths can help relax my mind and body to reduce feelings of impatience and frustration. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Visualize Success: Picture a positive outcome to shift focus away from immediate concerns. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Seek Perspectives: Acknowledge where I am to take the next step forward.'
      },
      'Experience': {
        'Adaptability: The quality of being able to adjust to new conditions.': '1) Embrace Change: Change is inevitable, and embracing it is the first thing to becoming adaptable. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Continuous Learning: Learning new materials will make me suited to becoming adaptable. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Stay Agile: Continue to keep the ability of being able to pivot quickly. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Physical and Mental Habits: Having bad physical and mental habits could transfer over to being less adaptable. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Network: By having a diverse network, I can be provided with different valuable insights when facing a challenge.  ',
        'Learning: The way to gain knowledge and skills through study or experience.': '1) Stay Curious: Ask questions and see how things are done the way they are. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Set Goals: Having clear objectives will give me a direction and motivation to complete this. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Learning Plan: Develop a strucutre learning plan to continue understanding new things. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Embrace Different Learning Styles: Recognize my learning style, but also apply other learning styles to different things. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Apply Knowledge Actively: Apply what I have learned in real-life situations. Actively using what I have learned with reinforce my knowledge.'
      },
      'Skills': {
        'Versatility: Being able to adapt.': '1) Diversify Skill Set: Continuously acquire and refine a diverse skill set. This means having technical, but also soft skills to contribute effectively. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Seek Exposure: Expose myself in different environments so I can learn different ways things are done. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Cross Train: Acquire skills outside of my main focus to gain more experience with other material/indsutries. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Stay Curious: Be curious to broaden knwoledge. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Show Initiative: Take the initiative to learn new things by doing more projects, and taking more opportunities. ',
        'Proficiency: Being accurate and precise.': "1) Invest Time and Effort: Stay proactive and do not procrasinate so I can complete things accurately on a timely manner. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Priortize Skills: Focus the skills I want to improve on so I can enchance these skills. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Quality Resources: Use either professionals in the field to get a more accurate understanding, or use high quality learning resources to make my knowledge precise. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Practice: In order to be proficient, I have to keep practicing my skills to make sure I do not get rusty. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Teach Others: By teaching others, I solidify my own knowledge."
      },
      'Curiosity': {
        'Continuous Learning: The want to know more.': '1) Self-Motivation: Continue to have the motivation to learn and improve so it can drive me to want to continuously learn. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Be Resilient: Being resilient, will make me be able to bounce back from any setbacks. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Pacing and Balance: If I am to learn too much in a short amount of time, I will burn out. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Acknowledgement: Acknowledge that there is much more to learn and that I do not know everything. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Reflect: Take the time to reflect on what I have learned and what else I need to learn.',
        'Self Reflection: Ability to recognize cognitive, emotional, and behavorial processes.': '1) Self-Awareness: Recognize and understand my thoughts and emotions so I do not push myself to burnout. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 2) Honesty: Be honest with myself so I can that to fuel my motivation to reach where I want to be at. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3) Consistency: Be consistent to reflecting so I do not get rusty and start beating myself down. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4) Goals: Align reflections based on my goals. //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 5) Learn From Mistakes: Look over mistakes and take it as an opportunity to learn and understand why it was a mistake.  '
      }
    };

    const selectedMessage = messages[giftItems[giftIndex].textContent][subGift];

    if (selectedMessage !== undefined) {
      // Create a new message container
      const messageContainer = document.createElement('div');
      messageContainer.className = 'message-container';

      // Replace "/" with a span having white text color
      selectedMessageWithWhiteSlash = selectedMessage.replace(/\//g, '<span class="white-slash">/</span>');

      // Set the modified message content
      messageContainer.innerHTML = selectedMessageWithWhiteSlash;

      // Remove any existing messages
      bottomContainer.innerHTML = '';

      // Append the new message container to the bottom
      bottomContainer.appendChild(messageContainer);
    }
  }
});
