type Props = {
  items: { id: number; title: string }[];
  isLoading?: boolean;
};
export const Articles = ({ items, isLoading }: Props) => {
  if (isLoading) {
    return <p>...loading</p>;
  }
  return (
    <div>
      <h2>기사 목록</h2>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`/articles/${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>게재된 기사가 없습니다</p>
      )}
    </div>
  );
};
