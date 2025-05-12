interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description, ...props }) => {
  return (
    <div className="p-4 border rounded-md shadow-md" {...props}>
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
