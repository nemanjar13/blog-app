import React from "react";
import IMG from "../images/img.jpeg";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={IMG} alt="" />
        <div className="user">
          <img src={IMG} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Title of the Post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea
          molestiae amet, iste quaerat neque facilis magnam blanditiis delectus
          soluta unde quo qui? Eligendi deleniti dolor nisi cumque. Fuga, eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid
          iusto, eius at impedit voluptatem, obcaecati ducimus, possimus tempore
          deleniti fuga blanditiis cum voluptates dolorum! Tempore dolor qui
          eaque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis voluptate magnam temporibus? Distinctio ducimus iste officia
          quaerat incidunt quam, vel optio quia mollitia aliquid illum provident
          pariatur sint iusto eveniet! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quidem, doloribus optio. Sequi quas perferendis
          necessitatibus! Qui quam error eius animi inventore maxime nobis cum
          magnam voluptates optio quae, assumenda doloribus. Nostrum autem a
          laudantium illo cupiditate nam eligendi, facilis ipsum sunt
          reprehenderit quibusdam, velit esse? Quidem facilis ducimus eaque
          cupiditate corrupti consequuntur quaerat earum amet minima, voluptate
          maiores illo repellendus. Laborum dignissimos saepe sequi dicta
          sapiente illum perspiciatis quia ipsum architecto? Tenetur hic
          sapiente eaque esse mollitia beatae magnam cum. Sit consequatur
          assumenda, maxime alias cumque facilis obcaecati itaque non! Vitae
          quam voluptatibus autem aliquam corporis, ab eaque sunt laudantium
          minima repellendus nam quasi sint fugit unde! Ad, aliquid, deleniti
          quas rem cum sunt sint consequatur vero harum quidem atque. Natus
          adipisci enim distinctio id. Repudiandae ipsum consequatur modi
          obcaecati, animi sit ullam non officia error similique explicabo quo
          corrupti accusamus sapiente, illo quis possimus veniam. Sunt sint
          officia a.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SinglePost;
