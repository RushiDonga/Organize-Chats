const sampleResponse = `{
  "Actions": [
    {
      "who": "Riya Sharma",
      "what": "Finalize the poster design",
      "due_when": "Today",
      "context": "Riya initiated the task to ensure the poster design is completed."
    },
    {
      "who": "Sameer Patel",
      "what": "Work on the third draft of the poster",
      "due_when": "Today",
      "context": "Sameer confirmed he is currently working on it."
    },
    {
      "who": "Riya Sharma",
      "what": "Check the budget for printing posters",
      "due_when": "Today",
      "context": "Karan requested an update on the budget."
    },
    {
      "who": "Riya Sharma",
      "what": "Update the marketing team about the finalized event name",
      "due_when": "After finalizing",
      "context": "Riya will notify the marketing team once they settle on the event name."
    },
    {
      "who": "Riya Sharma",
      "what": "Bring up the idea of inviting alumni with the organizers",
      "due_when": "Before the event",
      "context": "Karan suggested inviting alumni, and Riya agreed to handle it."
    },
    {
      "who": "Riya Sharma",
      "what": "Arrange responsibilities for the event",
      "due_when": "Before the event",
      "context": "They assigned roles: Karan - logistics, Riya - outreach, Sameer - design."
    },
    {
      "who": "Sameer Patel",
      "what": "Submit your poster ideas",
      "due_when": "3 PM today",
      "context": "He reminded the group about this deadline."
    }
  ],
  "Events": [
    {
      "description": "Spring Pulse 2025 Event",
      "when": "May 27th, 4 PM",
      "where": "Hall A, Student Center",
      "who": "Group members and possibly alumni",
      "context": "The primary event they're organizing."
    }
  ],
  "Jokes": [
    {
      "message": "Haha, sounds like a gardening show.",
      "why_funny": "Riya humorously pointed out that the name 'Spring Pulse 2025' sounded like an advertisement for gardening rather than an event.",
      "who": "Riya Sharma",
      "context": "Response to Sameer's suggestion about changing the event name."
    },
    {
      "message": "Karan wins the roast of the day!",
      "why_funny": "Riya joked about Karan's comment regarding the name suggesting he was clever in roasting the previous suggestion.",
      "who": "Karan Mehta",
      "context": "Response to Riya's joke about the name."
    },
    {
      "message": "Let’s hope it’s not like last time when the mic didn’t work.",
      "why_funny": "Sameer recalled a previous event's mishap with the microphone, bringing humor to past mishaps.",
      "who": "Sameer Patel",
      "context": "Reflecting on previous events and tech failures."
    },
    {
      "message": "Don’t jinx it bro",
      "why_funny": "Karan playfully warned Sameer about speaking ill about future events based on past experiences.",
      "who": "Karan Mehta",
      "context": "Responding to Sameer’s concern about the microphone."
    }
  ],
  "Summaries": "The group chat centered around planning an upcoming event named 'Spring Pulse 2025'. Riya initiated the conversation to finalize the poster design and gather availability from group members. They confirmed the event date, time, and location while discussing ideas for inviting alumni. Riya also checked the budget for poster printing and allocated responsibilities for organizing the event. The chat included moments of humor related to the event name and technical mishaps from previous events, which served to lighten the planning process.",
  "Questions": [
    {
      "question": "What time is the event again?",
      "who": "Karan Mehta",
      "answered_by": "Riya Sharma",
      "answer": "May 27th, 4 PM at Hall A, Student Center."
    },
    {
      "question": "Should we also invite alumni?",
      "who": "Karan Mehta",
      "answered_by": "Riya Sharma",
      "answer": "Good idea, I’ll bring it up with the organizers."
    }
  ],
  "Reminders": [
    {
      "reminder": "Update your availability for the event next week.",
      "who": "Anjali Verma",
      "for_whom": "Group members",
      "when": "Before the event",
      "context": "Anjali prompted the group to make sure they provided their availability."
    },
    {
      "reminder": "Submit your poster ideas by 3 PM today!",
      "who": "Sameer Patel",
      "for_whom": "Group members",
      "when": "3 PM today",
      "context": "To ensure everyone contributes to the poster design."
    }
  ],
  "Decisions": [
    {
      "decision": "Event name finalized as 'Spring Pulse 2025'",
      "who": "Riya Sharma",
      "agreed_by": "Anjali Verma, Karan Mehta, Sameer Patel",
      "context": "The group collectively agreed on the event name after discussion."
    },
    {
      "decision": "Responsibilities assigned for the event preparations",
      "who": "Riya Sharma",
      "agreed_by": "Karan Mehta, Sameer Patel, Anjali Verma",
      "context": "They agreed on specific roles for each member regarding logistics and outreach."
    }
  ],
  "Disagreements": [
    {
      "topic": "Event name",
      "parties": "Sameer Patel vs. Riya Sharma, Anjali Verma, Karan Mehta",
      "summary": "Sameer initially suggested 'Bloom Fest' while the others liked 'Spring Pulse 2025'. After some banter, they settled on the latter.",
      "resolved": "Yes",
      "context": "The group humorously debated the name before agreeing on 'Spring Pulse 2025'."
    }
  ],
  "TopicClusters": {
    "Event Planning": {
      "title": "Organizing 'Spring Pulse 2025'",
      "description": "The group discussed various aspects of the upcoming event including design, budget, invitation lists, and responsibilities.",
      "messages": [
        "Hey guys, don’t forget we need to finalize the poster design today.",
        "I’m working on the third draft now.",
        "Also, reminder to update your availability for the event next week.",
        "What time is the event again?",
        "May 27th, 4 PM at Hall A, Student Center.",
        "I’m free after 3 PM. Count me in.",
        "Riya, can you check the budget for printing posters?",
        "Sure, I’ll confirm with the finance team and update.",
        "Let’s finalize the event name today too: “Spring Pulse 2025”? 😄",
        "“Spring Pulse 2025” sounds energetic! I’m in.",
        "Wait, wasn’t it “Bloom Fest”? 🤔",
        "Haha, sounds like a gardening show. 😄",
        "Karan wins the roast of the day!",
        "Okay so, “Spring Pulse 2025” it is then?",
        "Yup, let's lock it. I’ll update the marketing team.",
        "Good idea, I’ll bring it up with the organizers.",
        "Let’s cluster the responsibilities now: Karan - logistics, Riya - outreach, Sameer - design.",
        "Agreed.",
        "Sounds good to me.",
        "All set! Let's make this event awesome."
      ]
    },
    "Humor and Banter": {
      "title": "Light-Hearted Banter",
      "description": "The group shared some laughs, particularly around the event name and common technical issues from previous events.",
      "messages": [
        "Haha, sounds like a gardening show. 😄",
        "😂 Riya wins the roast of the day!",
        "Let’s hope it’s not like last time when the mic didn’t work 😅",
        "Don’t jinx it bro 😂"
      ]
    }
  }
}`;

export default sampleResponse;
