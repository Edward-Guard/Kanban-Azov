type ListProps = {
  title: string
};

function ListCards({ title } : ListProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>Conteúdo</div>
    </div>
  );
}

export default ListCards;
