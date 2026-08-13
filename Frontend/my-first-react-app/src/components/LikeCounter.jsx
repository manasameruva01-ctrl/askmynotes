import { useState } from "react";

function LikeCounter() {
  //State is set
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    /*Write code here */
    setLikes(likes + 1);//Update State
  };

  const handleReset = () => {
    setLikes(0);
  };


  return (
    <div>
      <h1>Like Button Application</h1>

      <p>Likes: {likes}</p>

      <button onClick={handleLike}>
        Like
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default LikeCounter;