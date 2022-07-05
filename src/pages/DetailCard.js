import React from "react";
import Navbar from "../components/Navbar";

const DetailCard = () => {
  return (
    <div>
      <Navbar />
      <div className="detail_page">
        <div className="detail_part_left">
          <h1 className="title">Titre du film</h1>
          <div className="film_poster">
            <img
              className="resp"
              src="https://www.ecranlarge.com/uploads/image/001/121/8nx8sttha1zidt73sbnncvfswqk-989.jpg"
              alt="Affiche du film"
            />
          </div>
          <div className="buttons">
            <button>Science-fiction</button>
            <button>Divertissement</button>
          </div>
          <p className="stars">⭐️⭐️⭐️⭐️⭐️</p>
          <p className="heart">❤️</p>
        </div>
        <div className="detail_part_right">
          <div>
            <p className="movie_detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, voluptas soluta maiores quod dolore magnam labore vitae
              omnis dolores reiciendis sunt ut amet vero. Eius, voluptatibus!
              Suscipit officiis eligendi recusandae.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident, voluptas soluta maiores
              quod dolore magnam labore vitae omnis dolores reiciendis sunt ut
              amet vero. Eius, voluptatibus! Suscipit officiis eligendi
              recusandae.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident, voluptas soluta maiores quod dolore magnam labore
              vitae omnis dolores reiciendis sunt ut amet vero. Eius,
              voluptatibus! Suscipit officiis eligendi recusandae.Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Provident, voluptas
              soluta maiores quod dolore magnam labore vitae omnis dolores
              reiciendis sunt ut amet vero. Eius, voluptatibus! Suscipit
              officiis eligendi recusandae.
            </p>
          </div>
          <input className="comment_zone" type="text" />
          <button className="valid_button">Poster</button>
          <p className="old_comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae minima quo illo? In consequatur obcaecati laudantium,
            veritatis sapiente praesentium aperiam facere quibusdam. Inventore
            aperiam doloribus modi, nobis quasi labore laudantium.
          </p>
          <p className="old_comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae minima quo illo? In consequatur obcaecati laudantium,
            veritatis sapiente praesentium aperiam facere quibusdam. Inventore
            aperiam doloribus modi, nobis quasi labore laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
