import moment from "moment";
import React from "react";

const Posts = ({ myData, loading,count }) => {
  console.log("sdsdsd", myData);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {myData.map((item, index) => {
        return (
          <tbody key={item._id}>
            <tr
              key={index}
              className="tableRow"
              style={{ backgroundColor: "#EEF1FF" }}
            >
              <td>{count++}</td>
              <td>{item.user?.name}</td>
              <td>{item.user?.email}</td>
              <td>{moment(item.createdAt).format("DD-MM-YYYY")}</td>
              {item.cart.map((subItem, index) => {
                return (
                  <>
                    <tr className="tableRow">
                      <td className="SpecificRows">{subItem.name}</td>
                      <td className="SpecificRows">
                        {subItem.price} * {subItem.quantity}
                      </td>
                      <td className="SpecificRows">
                        {subItem.price * subItem.quantity}Rs
                      </td>
                      {/* <td style={{border:"2px solid red",height:"20px" , width:"150px"}}> * {subItem.quantity}</td> */}
                    </tr>
                  </>
                );
              })}

              <td style={{ width: "100px" }}>
                Rs:{item.cart.reduce((total, cur) => total + cur.total, 0)}
              </td>

              <td>
                <select id="action">
                  <option value="Pending" className="pending">
                    Pending
                  </option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default Posts;
