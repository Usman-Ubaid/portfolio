import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { CardBodyParams } from "./CardBody";

type CardParams = {
  header: string;
  cardContent: CardBodyParams["cardContent"];
};

const Card = ({ header, cardContent }: CardParams) => {
  return (
    <div className="card">
      <CardHeader header={header} />
      <CardBody cardContent={cardContent} />
    </div>
  );
};

export default Card;
