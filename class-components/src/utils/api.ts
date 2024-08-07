// import { GetServerSideProps } from 'next';
// import { store } from '../store/store';
// import { planetsApi } from '../store/planetsApi';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const search = context.query.search || '';
//   const page = context.query.page || 1;

//   store.dispatch(
//     planetsApi.endpoints.getPlanets.initiate({
//       search: search as string,
//       page: page as number,
//     })
//   );

//   await Promise.all(store.dispatch(planetsApi.util.getRunningQueriesThunk()));

//   return {
//     props: {},
//   };
// };
