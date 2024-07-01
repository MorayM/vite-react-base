import usePeople from '../hooks/usePeople';

function PeopleList() {
  const { data, isLoading } = usePeople();

  if (isLoading) return <h1>Loading</h1>;
  if (!data?.results.length) return <h1>No data</h1>;

  return (
    <div>
      <h2>Star Wars People</h2>
      <ul>{data?.results.map((p) => <li key={p.url}>{p.name}</li>)}</ul>
    </div>
  );
}

export default PeopleList;
