import "./FlatDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const FlatDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      fetch(`https://apartment-flat.herokuapp.com/flat/${id}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res);
          console.log(`abcd ${id.resident}`);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const backToPrev = () => {
    navigate(-1);
  };

  return (
    <div id="flatDetailDiv">
      <div id="imgDiv">
        <img src={data.image} alt="NA" />
      </div>
      <div id="flatData">
        <h1 className="thead">Flat Details</h1>
        <table>
          <tr>
            <td> Block</td>
            <td>{data.block}</td>
          </tr>
          <tr>
            <td>Flat Number</td>
            <td>{data.flat_number}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{data.type}</td>
          </tr>
          <tr>
            <td>No. of Residents</td>
            <td>{data.residents}</td>
          </tr>
        </table>

        <h1 className="thead">Resident Details</h1>
        <table>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{data.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{data.gender}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
