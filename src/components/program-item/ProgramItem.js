import { useState } from 'react';
import './ProgramItem.css';

export const ProgramItem = ({ itemData }) => {
  const [isFirstModuleOpen, setIsFirstModuleOpen] = useState(false);
  const [isSecondModuleOpen, setIsSecondModuleOpen] = useState(false);

  const firstModuleHandler = () => {
    setIsFirstModuleOpen((prev) => !prev);
  };

  const secondModuleHandler = () => {
    setIsSecondModuleOpen((prev) => !prev);
  };
  return (
    <li className="program-item">
      <h2 className="program-item-title">{itemData.title}</h2>
      <div className="first-module">
        <h3 className="first-module-title">1 модуль</h3>
        <button
          className={
            isFirstModuleOpen
              ? 'first-module-button first-module-button--opened'
              : 'first-module-button'
          }
          onClick={firstModuleHandler}
        >
          1 модуль
        </button>
        <ul
          className={
            isFirstModuleOpen
              ? 'first-module-list first-module-list--opened'
              : 'first-module-list '
          }
        >
          {itemData.specializedSubjects.slice(0, 5).map((subj) => {
            return <li className="first-module-list-item">{subj}</li>;
          })}
        </ul>
      </div>
      <div className="second-module">
        <h3 className="second-module-title">2 модуль</h3>
        <button
          className={
            isSecondModuleOpen
              ? 'second-module-button second-module-button--opened'
              : 'second-module-button'
          }
          onClick={secondModuleHandler}
        >
          2 модуль
        </button>
        <ul
          className={
            isSecondModuleOpen
              ? 'second-module-list second-module-list--opened'
              : 'second-module-list '
          }
        >
          {itemData.specializedSubjects.slice(5, 10).map((subj) => {
            return <li className="second-module-list-item">{subj}</li>;
          })}
        </ul>
      </div>
    </li>
  );
};
