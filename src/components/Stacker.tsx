import Card from "./Card";
import { cardObjects } from "../utils/interfaces";

interface StackerProps {
  data: cardObjects[];
}

const Stacker: React.FC<StackerProps> = ({ data }) => {
  return (
    <div className="flex card-stacker py-10">
      {data.map((item, index) => (
        <Card className={index !== 0 ? " -ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]" : ""} key={`${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
};

export default Stacker;
