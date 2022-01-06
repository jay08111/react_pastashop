import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setReviewValue,
  addReviews,
  setCommentValue,
} from "../redux/liquorSlice";
import { ReviewComment, Nocomment } from "../components/index";

function Review() {
  const dispatch = useDispatch();
  const { reviewList, reviewNameValue, reviewCommentValue } = useSelector(
    (state) => state.liquor
  );
  if (reviewList.length === 0) {
    return <Nocomment />;
  }
  return (
    <>
      <Wrapper>
        <h1>Reviews</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          {reviewList.map((reviews) => {
            return <ReviewComment key={reviews.id} {...reviews} />;
          })}
          <div className="review__inputField">
            <input
              type="text"
              placeholder="name"
              value={reviewNameValue}
              onChange={(e) => dispatch(setReviewValue(e.target.value))}
            />
            <textarea
              type="text"
              placeholder="comment"
              value={reviewCommentValue}
              onChange={(e) => dispatch(setCommentValue(e.target.value))}
            />
          </div>
          <button
            className="review__btn btn"
            type="submit"
            onClick={() => {
              dispatch(addReviews());
            }}
          >
            comment
          </button>
        </form>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 90vh;
  background-image: url("https://images.getbento.com/accounts/b407703cbc06b7de17a1aab05567665c/media/images/90545bg_finished.png");
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
    color: #fff;
  }
  .review__inputField {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-end;
    margin-top: 2rem;
    input {
      width: 50vw;
      min-height: 30px;
      padding: 5px;
    }
    input[type="text"]::placeholder {
      text-align: left;
    }
    input[type="text"],
    textarea[type="text"] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 20px;
    }

    textarea {
      resize: none;
      min-height: 60px;
      padding: 5px;
      width: 50vw;
    }
    textarea[type="text"]::placeholder {
      text-align: left;
    }
  }
  .review__btn {
    background-color: #cba779;
    padding: 1rem;
    margin-top: 1rem;
    transition: all 0.5s;
    &:hover {
      background-color: #e57124;
    }
  }
`;
export default Review;
