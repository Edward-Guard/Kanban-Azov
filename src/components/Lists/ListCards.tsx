import styles from './List.module.css';

type ListProps = {
  title: string
  children: React.ReactNode;
};

function ListCards({ title, children } : ListProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div className={ styles.list }>
        {children}
      </div>
    </div>
  );
}

export default ListCards;
