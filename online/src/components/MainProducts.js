import { useNavigate } from "react-router-dom";

function MainProducts(props) {
  let navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          navigate("/eachDetail/" + props.bed.id);
        }}
        src={process.env.PUBLIC_URL + "/image/bed" + props.bed.id + ".jpg"}
        width="80%"
        alt="์นจ๋"
      />
      <div className="productName">{props.bed.title}</div>{" "}
      <p>{props.bed.price.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}์</p>
    </div>
  );
}

export default MainProducts;
