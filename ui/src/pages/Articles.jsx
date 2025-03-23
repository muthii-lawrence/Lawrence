import React, { useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  const articles = [
    {
      id: 1,
      title: "Climate Action",
      description: "What would be the impact of climate if...",
      content: "Climate change remains one of the greatest challenges...",
    },
    {
      id: 2,
      title: "Focus on SDG Goal 6",
      description: "We wil have a broader look at Goal 6 Generally...",
      content: "Sustainable Development Goal (SDG) 6: Clean Water and Sanitation aims...",
    },
    {
      id: 3,
      title: "Focus on SDG Goal 14",
      description: "Lets Look at this Giant that no one talks about...",
      content: "The world's oceans are vital for life on Earth, providing food...",
    },
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      setReviews([...reviews, reviewText]);
      setReviewText("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Articles</h1>

      {/* Articles Section */}
      <div className="grid gap-6">
        {articles.map((article) => (
          <div key={article.id} className="p-5 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.description}</p>
            <Link to={`/article/${article.id}`}>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Review Section */}
      <div className="mt-10 p-5 border-t">
        <h2 className="text-2xl font-semibold mb-3">Leave a Review</h2>
        <form onSubmit={handleReviewSubmit} className="flex flex-col gap-3">
          <textarea
            className="border p-3 rounded-md w-full"
            rows="3"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit Review
          </button>
        </form>

        {/* Display Reviews */}
        {reviews.length > 0 && (
          <div className="mt-5">
            <h3 className="text-xl font-semibold">Reviews:</h3>
            <ul className="mt-2 list-disc list-inside">
              {reviews.map((review, index) => (
                <li key={index} className="text-gray-700 bg-gray-100 p-2 rounded-md mt-2">
                  {review}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
