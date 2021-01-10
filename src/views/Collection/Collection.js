import React, { useEffect, useState} from 'react';
import Card from '../../components/Card/Card';

const Collection = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItem();
  },[])

  const fetchItem = async () => {
    const data = await fetch (
      'https://fortnite-api.theapinetwork.com/store/get'
    )
    const itemsData = await data.json()
    console.log(itemsData.data);
    setItems(itemsData.data)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-10 pt-4 text-center">
      {items.map(item => (
          <Card 
          key={item.itemId}
          id={item.itemId}
          name={item.item.name}
          image={item.item.images.background}
        />
      )
      )}
    </div>
  );
}
 
export default Collection;