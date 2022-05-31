import React from 'react';
import { useSelector } from 'react-redux';
import seancesSelector from '@store/seances/seances-selectors';
import '@feature/SeancesPage/index.css';

const SeancesPage = () => {
  const getDatesForFilm = useSelector(seancesSelector.getCurrentDates);
  const getSeances = useSelector(seancesSelector.getAllSeances);

  return (
    <div>
      {getSeances.map((seances, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={i}>
          <section className="seance-film-date">
            <p>{getDatesForFilm[i]}</p>
          </section>
          {seances.map((data, j) => (
            // eslint-disable-next-line react/no-array-index-key
            <section key={j} className="seances-page-current-hall">
              <p>{data.hall}</p>
              <p>{data.time}</p>
            </section>
          ))}
        </section>
      ))}
    </div>
  );
};

export default SeancesPage;
