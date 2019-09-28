import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Item from '../Item'

const ADD_ITEM = gql`
  mutation addItem($name: String!) {
    addTodo(name: $name) {
      id
      name
    }
  }
`;

const ALL_ITEMS = gql`
  {
    items {
      id
      name
    }
  }
`;

export default () => {

  const { loading, error, data } = useQuery(ALL_ITEMS);

  const [addItem, {result}] = useMutation(ADD_ITEM)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;



  return (
    <div className="room">
      {data.items.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}
