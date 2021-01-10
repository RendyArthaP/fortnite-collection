import React, { useEffect, useState} from 'react';

const ItemDetail = ({ match} ) => {
  const [itemDetail, setItemDetail] = useState({});
  const [background, setBackground] = useState({});
  const [rating, setRating] = useState({})

  useEffect(() => {
    fetchItemDetail();
  },[])

  const fetchItemDetail = async () => {
    const dataDetail = await fetch (
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.itemId}`
    )
    const item = await dataDetail.json()
  
    setItemDetail(item.data.item);
    setBackground(item.data.item.images);
    setRating(item.data.item.ratings);
  }

  return (
    <div className="bg-gray-100 shadow-xl flex flex-col justify-center border w-64 mt-32 rounded mx-auto">
      <img src={background.background} alt=""className="w-64 px-2" />
      <div className="text-left px-2">
        <h1 className="">{itemDetail.name}</h1>
        <p>{itemDetail.description}</p>
        <div className="flex flex-row">
          <p>Rarity: </p>
          <p>{itemDetail.rarity}</p>
        </div>
        <div className="flex flex-row">
          <p>Rating: </p>
          <p>{rating.avgStars} / 5.0</p>
        </div>
      </div>
    </div>
  );
}
 
export default ItemDetail;