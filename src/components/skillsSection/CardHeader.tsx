type CardHeader = {
  header: string;
};

const CardHeader = ({ header }: CardHeader) => {
  return (
    <div className="card-header">
      <h3>{header}</h3>
    </div>
  );
};

export default CardHeader;
