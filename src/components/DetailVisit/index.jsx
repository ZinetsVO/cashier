"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { VISIT_URL } from "@/helpers/constants";
import css from "./style.module.css";
import classNames from "classnames";
import DetailPopup from "@/components/DetailPopup";
import DetailList from "./DetailList";
import toast, { Toaster } from "react-hot-toast";
import DetailComment from "../DetailComment";

const DetailVisit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [comment, setComment] = useState("")

  console.log(data);

  const fetchVisit = async () => {
    try {
      const response = await axios.get(`${VISIT_URL}/${id}`);
      if (response) {
        setData(response.data);
        setComment(response.data.comment)
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = async (id, formData) => {

    const newData = {...formData, comment: comment}
    console.log(newData);
    try {
      const response = await axios.put(`${VISIT_URL}/${id}`, newData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchVisit();
      toast.success("Successfully saved!");
      return response;
    } catch (error) {
      toast.error("Save error!");
    }
  };

  useEffect(() => {
    fetchVisit();
  }, []);

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="container">
      {!showPopup ? (
        <button
          className={classNames("blue__button", css.add__button)}
          onClick={handleShowPopup}
        >
          Add product
        </button>
      ) : (
        <DetailPopup
          data={data}
          setData={setData}
          setShowPopup={setShowPopup}
          id={id}
        />
      )}
      <button
        onClick={() => handleChange(id, data)}
        className={classNames("blue__button", css.save__button)}
      >
        Save changes
      </button>
      <Toaster position="top-center" reverseOrder={false} />
      <DetailList data={data} />
      <DetailComment comment={comment} setComment={setComment}/>
    </div>
  );
};

export default DetailVisit;
