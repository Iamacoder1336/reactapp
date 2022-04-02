// import React from 'react'

// const MenuCard = ({ menuData }) => {
//     // console.log(menuData)
//     return (
//         <>
            
//             <section className="main-card--cointainer">
//                 {menuData.map((curElem) => {
//                     return (
//                         <>
//                             <div className="card-container">
//                                 <div className="card ">
//                                     <div className="card-body">
//                                         <span className="card-number card-circle subtle"></span>
//                                         <span className="card-author subtle"> </span>
//                                         <h2 className="card-title">kamal </h2>
//                                         <span className="card-description subtle">
//                                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                                             Repellat ipsum nostrum quam sed vel obcaecati animi ratione
//                                             voluptas natus consectetur. Nihil labore, nemo praesentium iure
//                                             voluptate commodi tempore itaque, sint, provident cupiditate laboriosam iusto.
//                                         </span>
//                                         <div className="card-read">Read</div>
//                                     </div>
//                                     <img src="" alt="images" className="card-media" />

//                                     <span className="card-tag  subtle">Order Now</span>
//                                 </div>
//                             </div>
//                         </>
//                     );
//                 })}
//             </section>
//         </>
//     );
// };

// export default MenuCard



import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {name}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;