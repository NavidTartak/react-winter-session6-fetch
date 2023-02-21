import axios from "axios";
import config from "./config.json";
const GetProducts = (id = 0, name = "", setData) => {
  setData({
    isLoading: true,
    productsData: [],
  });
  const fetch = async () => {
    await axios
      .get(
        `${config.apiUrl}Product/GetProducts?ProductId=${id}&ProductName=${name}`
      )
      .then((res) => {
        if (res.data !== undefined) {
          if (res.data.success === undefined) {
            setData({
              isLoading: false,
              productsData: res.data,
            });
          } else {
            setData({
              isLoading: false,
              productsData: [],
            });
          }
        } else {
          setData({
            isLoading: false,
            productsData: [],
          });
        }
      })
      .catch(() => {
        setData({
          isLoading: false,
          productsData: [],
        });
      });
  };
  fetch();
};
export default GetProducts;
