import ActionCard from "./ActionCard";
import DecisionCard from "./DecisionCard";
import DisagreementCard from "./DisagreementCard";
import EventCard from "./EventCard";
import JokesCard from "./JokesCard";
import QuestionCard from "./QuestionCard";
import ReminderCard from "./ReminderCard";

export default function RenderCards({ cardType, cardData }) {
  switch (cardType) {
    case "Actions":
      return (
        <ActionCard bgColor={getTypeColor(cardType)} cardData={cardData} />
      );
    case "Events":
      return <EventCard bgColor={getTypeColor(cardType)} cardData={cardData} />;
    case "Jokes":
      return <JokesCard bgColor={getTypeColor(cardType)} cardData={cardData} />;
    case "Questions":
      return (
        <QuestionCard bgColor={getTypeColor(cardType)} cardData={cardData} />
      );
    case "Reminders":
      return (
        <ReminderCard bgColor={getTypeColor(cardType)} cardData={cardData} />
      );
    case "Decisions":
      return (
        <DecisionCard bgColor={getTypeColor(cardType)} cardData={cardData} />
      );
    case "Disagreements":
      return (
        <DisagreementCard bgColor={getTypeColor(cardType)} cardData={cardData} />
      );
    default:
      console.log(cardType);
  }
}

function getTypeColor(type) {
  switch (type) {
    case "Actions":
      return "#3B82F6"; // blue
    case "Events":
      return "#D946EF"; // purple
    case "Jokes":
      return "#FACC15"; // yellow
    case "Summaries":
      return "#6EE7B7"; // green
    case "Questions":
      return "#FB7185"; // pink
    case "Reminders":
      return "#5EEAD4"; // teal
    case "Decisions":
      return "#F97316"; // orange
    case "Disagreements":
      return "#A78BFA"; // violet
    case "TopicClusters":
      return "#A78BFB";
    case "Humor and Banter":
      return "#A78BFC";
    default:
      return "#E5E7EB"; // gray
  }
}
