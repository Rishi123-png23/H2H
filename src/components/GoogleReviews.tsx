import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Real Google Reviews data
    const fallbackReviews = [
      {
        author_name: "JAMPALA RISHI KRISHNA",
        rating: 5,
        text: "Excellent service and best quality hair patches available in Hyderabad",
        relative_time_description: "3 weeks ago"
      },
      {
        author_name: "ROHIT KUMAR VEERAVALLI",
        rating: 5,
        text: "I recently visited Hair 2 Hair Studio and had an incredible experience! The staff was welcoming, the ambiance was inviting, and the stylists were truly skilled. My haircut surpassed expectations—precise and tailored perfectly.",
        relative_time_description: "a year ago"
      },
      {
        author_name: "Doravari Srikanth",
        rating: 5,
        text: "Best hair patch studio in Hyderabad",
        relative_time_description: "a week ago"
      },
      {
        author_name: "Fire Ravi",
        rating: 5,
        text: "Good service satish",
        relative_time_description: "4 weeks ago"
      },
      {
        author_name: "New Evergreen",
        rating: 5,
        text: "Very Good Service and with well trained people you can get a better service at reasonable price .it's a top nutch .Must visit",
        relative_time_description: "a year ago"
      },
      {
        author_name: "uttej kumar",
        rating: 5,
        text: "This review is after using patch from a month..I have done my hair patch service in Hair 2 Hair Studio and Completed my first servicing today.. My Experience: Recieving and explanation is good and clearing our doubts",
        relative_time_description: "2 years ago"
      }
    ];

    function displayReviews() {
      // Display fallback reviews (frontend only)
      const reviewSummary = document.getElementById("review-summary");
      if (reviewSummary) {
        reviewSummary.innerHTML = "Based on 86 Google reviews";
      }
      
      const container = document.getElementById("reviews-container");
      if (container) {
        container.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            ${fallbackReviews
              .map(r => `
                <div class="bg-white text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      ${r.author_name.charAt(0)}
                    </div>
                    <div class="flex-1">
                      <p class="font-semibold text-gray-800 text-sm">${r.author_name}</p>
                      <div class="flex items-center gap-1">
                        <div class="flex text-yellow-400">
                          ${'★'.repeat(r.rating)}
                        </div>
                        <span class="text-xs text-gray-500 ml-2">${r.relative_time_description}</span>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-700 text-sm leading-relaxed flex-grow">${r.text}</p>
                </div>
              `)
              .join('')}
          </div>
        `;
      }
    }

    displayReviews();
  }, []);

  return null; // This component only handles the side effect
}
