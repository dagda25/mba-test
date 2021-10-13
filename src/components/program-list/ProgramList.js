import { ProgramItem } from '../program-item/ProgramItem';
import './ProgramList.css';

export const ProgramList = ({ data }) => {
  return (
    <ul className="program-list">
      {data.map((itemData) => {
        return <ProgramItem key={itemData._id} itemData={itemData} />;
      })}
    </ul>
  );
};
