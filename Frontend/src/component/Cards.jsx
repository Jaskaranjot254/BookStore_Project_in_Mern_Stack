import React from "react";

function Cards({item}) {
   
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 border bg-base-100 dark:bg-slate-900 dark:text-white shadow-xl hover:scale-105 duration-200">
          <figure>
            <img className="h-96"
              src={item.image}
              alt="images"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{item.price} Rs.</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border[2] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
