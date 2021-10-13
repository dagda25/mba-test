import './App.css';
import { API_URL } from './const/const';
import { useCallback, useEffect, useState } from 'react';
import { ProgramList } from './components/program-list/ProgramList';
import { Summary } from './components/summary/Summary';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const uniquePrograms = [];

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Произошла ошибка!');
      }

      const result = await response.json();

      result.data.forEach((element) => {
        if (
          uniquePrograms.length < 5 &&
          element.specializedSubjects.length > 9
        ) {
          let unique = true;
          for (let el of uniquePrograms) {
            if (el.title === element.title) {
              unique = false;
            }
          }
          if (unique) {
            uniquePrograms.push(element);
          }
        }
      });

      setData(uniquePrograms);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  let programContent = <p>Программ не найдено.</p>;

  if (data && data.length > 0) {
    programContent = <ProgramList data={data} />;
  }

  if (error) {
    programContent = <p className="error">{error}</p>;
  }

  if (isLoading) {
    programContent = <p className="loading">Загрузка данных...</p>;
  }
  return (
    <main className="main-page">
      <section className="programs">
        <h1 className="programs-title">Специализированные дисциплины</h1>
        {programContent}
      </section>

      <Summary />
    </main>
  );
}

export default App;
