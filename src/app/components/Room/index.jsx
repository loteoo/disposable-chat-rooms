import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Item from '../Item'

const ALL_USERS = gql`
  {
    items {
      id
      name
    }
  }
`;

export default () => {

  const { loading, error, data } = useQuery(ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    console.log(data);


  return (
    <div className="room">
      {data.items.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}
