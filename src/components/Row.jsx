import React, { useEffect, useState } from "react";
import axios from "axios";
import { getExactTime, getFullDate } from "../utils";
import { useGlobalContext } from "../context/context";
const Row = ({ item, index }) => {
  const [userInfo, setUserInfo] = useState();
  const { loading, setLoading, url } = useGlobalContext();
  useEffect(() => {
    const fetUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${url}/employee/${item.user}`);

        setUserInfo(res.data);
        // console.log(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetUser();
  }, [item._id]);

  if (loading || !userInfo) return <tr>Loading...</tr>;
  // console.log(userInfo);
  return (
    <tr key={item._id}>
      <th>{index + 1}</th>
      <td>{userInfo.name}</td>
      <td>{userInfo.department ? userInfo.department : "Not yet"}</td>
      <td>{getFullDate(item.createdAt)}</td>
      <td>{getExactTime(item.inTime)}</td>
      <td>{item.outTime ? getExactTime(item.outTime) : "Not yet"}</td>
    </tr>
  );
};

export default Row;
