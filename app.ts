import createHandler from "cleo-assignment-handler";
import axios from "axios";
import express from "express";

type FetchFunction = (id: number) => Promise<FetchResult>;
type FetchResult = { price: number; time: Date }[];

const fetchedData: FetchFunction = async (id: number) => {
  const response = await axios.get(`http://localhost:3001/${id}`);

  if (!response.data) {
    return;
  } else {
    const result = response.data.map((item: any) => ({
      price: item.price,
      time: new Date(item.time),
    }));
    return result;
  }
};

const app = express();
app.get("/api/:id", createHandler(60000, fetchedData));
app.listen(3000);
