import { useState } from 'react';

function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [Order, setSortOrder] = useState('desc');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const text = e.target.text.value;
    const rating = parseInt(e.target.rating.value);

    const newReview = { 
      id: Date.now(),
      name, 
      text, 
      rating, 
      };


    setReviews([newReview, ...reviews]);
    e.target.reset();
  };

  const sortedReviews = [...reviews].sort((a, b) =>
  Order === 'asc' ? a.rating - b.rating : b.rating - a.rating
  );

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="text"
          placeholder="Write your review..."
          required
          className="w-full p-2 border rounded"></textarea>

        <select
          name="rating"
          required
          className="w-full p-2 border rounded">
          <option value="">Select Rating</option>

          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      <button type="submit" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">submit</button>
      </form>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Reviews</h2>
          <div>
            <button
              onClick={() => setSortOrder('asc')}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Lowest
            </button>
            {/* <button
              onClick={() => setSortOrder('desc')}
              className={`px-3 py-1 text-sm border rounded-r ${Order === 'desc' ? 'bg-blue-600 text-white' : 'bg-white'}`}>
              Highest
            </button> */}
            <button  onClick={() => setSortOrder('desc')} type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Highest</button>
          
          </div>
        </div>

        <div className="space-y-4">
          {
          sortedReviews.map((review) => (
            <div key={review.id} className="border p-4 rounded bg-blue-200">
              <div className="font-bold">{review.name}</div>
              <div className="text-yellow-500">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-gray-700 mt-2">{review.text}</p>
            </div>
          ))}
          {sortedReviews.length === 0 && (
            <p className="text-gray-500">No reviews yet. Be the first to add one!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;




// import React, { useState } from "react";

// const ReviewSection = () => {
//   const [reviews, setReviews] = useState([]);
//   const [username, setUsername] = useState("");
//   const [rating, setRating] = useState(0);
//   const [reviewText, setReviewText] = useState("");

//   const handleSubmit = () => {
//     if (reviewText.trim() === "" || username.trim() === "") return;

//     const newReview = {
//       id: Date.now(),
//       username,
//       rating,
//       text: reviewText,
//     };

//     setReviews([...reviews, newReview]);
//     setUsername("");
//     setReviewText("");
//     setRating(0);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Leave a Review</h2>
      
//       {/* User Name Input */}
//       <input
//         type="text"
//         className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
//         placeholder="Enter your name..."
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       {/* Rating Stars */}
//       <div className="flex space-x-2 mb-4">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             onClick={() => setRating(star)}
//             className={`text-2xl ${
//               rating >= star ? "text-yellow-400" : "text-gray-300"
//             }`}
//           >
//             ★
//           </button>
//         ))}
//       </div>

//       {/* Review Input */}
//       <textarea
//         className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//         rows="4"
//         placeholder="Write your review..."
//         value={reviewText}
//         onChange={(e) => setReviewText(e.target.value)}
//       ></textarea>

//       <button 
//         onClick={handleSubmit} 
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         Submit Review
//       </button>

//       {/* Display Submitted Reviews */}
//       {reviews.length > 0 && (
//         <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
//           <h3 className="text-lg font-semibold">User Reviews</h3>
//           {reviews.map((review) => (
//             <div key={review.id} className="mt-4 p-3 border rounded-lg bg-white">
//               <p className="font-bold text-blue-600">{review.username}</p>
//               <p className="font-bold">Rating: {review.rating} ★</p>
//               <p className="mt-2">{review.text}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReviewSection;


