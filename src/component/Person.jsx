import data from "./data";

const Person = () => {
  return (
    <>
      <div className="container">
        <h1>Albums</h1>
        <div className="box">
          {data.map((item) => {
            return (
              <div className="box1">
                <div className="img">
                  <figure>
                    <img src={item.src.large} alt="" />
                  </figure>
                </div>

                <p>{item.photographer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Person;
