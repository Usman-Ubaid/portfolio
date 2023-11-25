export type CardBodyParams = {
  cardContent: {
    id: number;
    imgSrc: string;
    cardText: string;
  }[];
};

const CardBody = ({ cardContent }: CardBodyParams) => {
  return (
    <div className="card-content">
      {cardContent.map((item) => (
        <div key={item.id} className="card-item">
          <img src={item.imgSrc} />
          <p>{item.cardText}</p>
        </div>
      ))}
    </div>
  );
};

export default CardBody;
