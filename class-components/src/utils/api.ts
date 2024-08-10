import { getPlanets, getRunningQueriesThunk } from '../store/planetsApi';
import { wrapper } from '../store/store';

export const fetchData = wrapper.getServerSideProps((store) => async (context) => {
  const search = context.query.search || '';
  const page = context.query.page || '1';

  if (page) {
    await store.dispatch(getPlanets.initiate({ search: search as string, page: page as string }));
  } else {
    await store.dispatch(getPlanets.initiate({ search: search as string }));
  }
  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {},
  };
});
