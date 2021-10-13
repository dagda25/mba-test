import './Summary.css';

export const Summary = () => {
  return (
    <div className="summary">
      <section className="practice">
        <h2 className="practice-title">Практические модули</h2>
        <p>
          Работа над собственными проектами: практика групповых взаимодействий,
          кейс-методы, эссе
        </p>
      </section>
      <section className="attestation">
        <h2 className="attestation-title">Итоговая аттестация</h2>
        <ul className="attestation-list">
          <li>
            Бизнес-проектирование (подготовка итоговой аттестационной работы,
            консультирование по бизнес-проектированию)
          </li>
          <li>Защита итоговой аттестационной работы</li>
        </ul>
      </section>
    </div>
  );
};
