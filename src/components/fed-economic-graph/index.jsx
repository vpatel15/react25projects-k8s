import React from "react";
import { useFetch } from "../../hooks/useFetch";

const FedEconomicGraph = () => {
  // api key: 163ef85e4c0c197b6f57d2f175057a30
  // https://api.stlouisfed.org/fred/series/observations?series_id=GDPCA&frequency=a&observation_start=1999-04-15&observation_end=2021-01-01&file_type=json&api_key=163ef85e4c0c197b6f57d2f175057a30
  const { data, error, loading } = useFetch(
    "/api/observations?series_id=GDPCA&frequency=a&observation_start=1999-04-15&observation_end=2021-01-01"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Fed economic component only works in container or by disabling cors</p>;
  return (
    <>
      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default FedEconomicGraph;

// {
//   "realtime_start": "2024-09-04",
//   "realtime_end": "2024-09-04",
//   "observation_start": "1999-04-15",
//   "observation_end": "2021-01-01",
//   "units": "lin",
//   "output_type": 1,
//   "file_type": "json",
//   "order_by": "observation_date",
//   "sort_order": "asc",
//   "count": 23,
//   "offset": 0,
//   "limit": 100000,
//   "observations": [
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "1999-01-01",
//       "value": "13543.774"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2000-01-01",
//       "value": "14096.033"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2001-01-01",
//       "value": "14230.726"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2002-01-01",
//       "value": "14472.712"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2003-01-01",
//       "value": "14877.312"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2004-01-01",
//       "value": "15449.757"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2005-01-01",
//       "value": "15987.957"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2006-01-01",
//       "value": "16433.148"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2007-01-01",
//       "value": "16762.445"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2008-01-01",
//       "value": "16781.485"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2009-01-01",
//       "value": "16349.11"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2010-01-01",
//       "value": "16789.75"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2011-01-01",
//       "value": "17052.41"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2012-01-01",
//       "value": "17442.759"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2013-01-01",
//       "value": "17812.167"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2014-01-01",
//       "value": "18261.714"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2015-01-01",
//       "value": "18799.622"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2016-01-01",
//       "value": "19141.672"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2017-01-01",
//       "value": "19612.102"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2018-01-01",
//       "value": "20193.896"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2019-01-01",
//       "value": "20692.087"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2020-01-01",
//       "value": "20234.074"
//     },
//     {
//       "realtime_start": "2024-09-04",
//       "realtime_end": "2024-09-04",
//       "date": "2021-01-01",
//       "value": "21407.692"
//     }
//   ]
// }
