import React from "react";
import { useParams, Link } from "react-router-dom";

const articles = [
  { id: 1, title: "The Impact of a 1% Annual Positive Climate Change", pdf: "climate.pdf" },
  { id: 2, title: "SDG Goal 6 Focus", pdf: "Goal 6.pdf" },
  { id: 3, title: "SDG Goal 14", pdf: "Goal 14.pdf" },
];

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articles.find((art) => art.id === parseInt(id));

  if (!article) {
    return <h2 className="text-center text-red-600">Article not found!</h2>;
  }

  const pdfPath = `/articles/${article.pdf}`; // Ensure PDFs are in the "public/articles" folder

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold">{article.title}</h1>

      {/* Embed PDF */}
      <div className="mt-5">
        <iframe
          src={pdfPath}
          className="w-full h-[600px] border rounded-md shadow-lg"
        ></iframe>
      </div>

      <Link to="/articles">
        <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Back to Articles
        </button>
      </Link>
    </div>
  );
};

export default ArticleDetails;
