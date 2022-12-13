export default function page({ params }) {
  const { id } = params;

  return (
    <div>posts {id}</div>
  );
}
