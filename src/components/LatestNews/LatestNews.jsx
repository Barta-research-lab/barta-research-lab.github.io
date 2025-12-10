const LatestNews = () => {
  const news = [
    {
      id: 14,
      title: "Dr. Ahmedul Kabir Presents at IMLI International Seminar",
      date: "2025-11-25",
      category: "Conference",
      summary: "Our Co-Director Dr. Ahmedul Kabir presented an article on \"The use of AI for Language Documentation\" at the International Seminar of International Mother Language Institute (IMLI)."
    },
    {
      id: 13,
      title: "Paper Presented at Big Data & ML in Healthcare 2025",
      date: "2025-12-09",
      category: "Publication",
      summary: "BARTA Research Lab's paper \"Voices of Care: Actor-Centric Analysis of Alzheimer's and Dementia Discourse on Reddit\" by Umme Kulsum Tumpa, Nazifa Tasnim Hia, Md Shahrar Fatemi, Dr. Md. Mahbubul Alam Joarder, and Dr.Shebuti Rayana has been Presented to IEEE Workshop on Big Data & ML in Healthcare: Emerging Challenges (BDML 2025)."
    },
    {
      id: 12,
      title: "Dr. Kabir speaks at National Defence College",
      date: "2025-11-05",
      category: "Conference",
      summary: "Our Co-Director Dr. Ahmedul Kabir delivered an invited lecture on \"Artificial Intelligence: Concepts, Applications and Global Trends\" at the National Defence College, Dhaka."
    },
    {
      id: 10,
      title: "Paper Accepted at Big Data & ML in Healthcare 2025",
      date: "2025-11-12",
      category: "Publication",
      summary: "BARTA Research Lab's paper \"Voices of Care: Actor-Centric Analysis of Alzheimer's and Dementia Discourse on Reddit\" by Umme Kulsum Tumpa, Nazifa Tasnim Hia, Md Shahrar Fatemi, Dr. Md. Mahbubul Alam Joarder, and Dr.Shebuti Rayana has been accepted to IEEE Workshop on Big Data & ML in Healthcare: Emerging Challenges (BDML 2025)."
    },
    {
      id: 1,
      title: "Paper Accepted to BLP at AACL 2025",
      date: "2025-11-05",
      category: "Publication",
      summary: "BARTA Research Lab's paper \"Exploring Cross-Lingual Knowledge Transfer via Transliteration-Based MLM Fine-Tuning for Critically Low-resource Chakma Language\" by Adity Khisa, Nusrat Jahan Lia, Tasnim Mahfuz Nafis, Zarif Masud, Tanzir Pial, Dr. Shebuti Rayana, and Dr. Ahmedul Kabir has been accepted to BLP at AACL 2025."
    },
    {
      id: 11,
      title: "IMLI Adopts BARTA's Bangla Trending Words Analytics Tool",
      date: "2025-09-14",
      category: "Collaboration",
      summary: "International Mother Language Institute (IMLI) has started using BARTA Research Lab's Bangla Trending Words Analytics Tool to track and analyze trending words used in Bangla print and social media."
    },
    {
      id: 2,
      title: "BARTA Presents at ICJR 2025",
      date: "2025-07-27",
      category: "Conference",
      summary: "BARTA Research Lab presented a work on \"Temporal Analysis of the Gap Between Media Narratives and Public Sentiment During Bangladesh's July Revolution\" at the ICJR, 2025."
    },
    {
      id: 3,
      title: "Collaboration with Accident Research Institute (ARI), BUET",
      date: "2025-07-19",
      category: "Collaboration",
      summary: "BARTA Lab is working with Accident Research Institute (ARI), BUET to build software to improve road safety in Bangladesh"
    },
    {
      id: 4,
      title: "Presenting at July Conference 2025",
      date: "2025-07-01",
      category: "Conference",
      summary: "We will be presenting our work on \"Temporal Analysis of the Gap Between Media Narratives and Public Sentiment During Bangladesh's July Revolution\" at the July Conference, 2025."
    },
    {
      id: 5,
      title: "Dr. Ahmedul Kabir Presents at IMLI Seminar",
      date: "2025-06-25",
      category: "Conference",
      summary: 'Our Co-Director Dr. Ahmedul Kabir presented an article on "Using AI for the preservation of indigenous languages and culture" at the International Mother Language Institute (IMLI).'
    },
    {
      id: 6,
      title: "Collaboration with International Mother Language Institute (IMLI)",
      date: "2025-05-01",
      category: "Collaboration",
      summary:
        "BARTA Lab is working in collaboration with International Mother Language Institute (IMLI) on developing an innovative app to show the trending words used in Bangla print and social media.",
    },
    {
      id: 7,
      title: "Collaboration with Physically-challenged Development Foundation (PDF)",
      date: "2025-05-01",
      category: "Collaboration",
      summary:
        "BARTA Lab is working with Physically-challenged Development Foundation (PDF) to develop training programs and software for physically-challenged university students.",
    },
    {
      id: 8,
      title: "BARTA Alumni Mashiat Amin Farin Accepted to UT Dallas",
      date: "2025-03-01",
      category: "Alumni",
      summary:
        "BARTA alumni and founding member Mashiat Amin Farin has been accepted for the PhD program at University of Texas, Dallas.",
    },
    {
      id: 9,
      title: 'Dr. Ahmedul Kabir Presents at IMLI National Seminar',
      date: "2025-02-23",
      category: "Conference",
      summary:
        'Our Co-Director Dr. Ahmedul Kabir presented an article on "The use of technology for mother tongue-based multilingual learning" at the National Seminar of International Mother Language Institute (IMLI).',
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Sort news by date in descending order (most recent first)
  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-gray-800">Latest News</h2>
        
        <ul className="divide-y divide-gray-200">
          {sortedNews.map((item) => (
            <li key={item.id} className="py-2 lg:py-4">
              <div className="flex flex-col">
                <div className="flex items-center text-sm mb-1">
                  <span className="text-green-secondary font-bold mr-2">
                    {item.category}
                  </span>
                  <span>•</span>
                  <span className="ml-2 text-gray-800">{formatDate(item.date)}</span>
                </div>
                
                <h3 className="text-md font-semibold text-green-primary mb-1">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-700 mb-1">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 text-center hidden">
          <a 
            href="/news" 
            className="text-xs text-blue-primary hover:text-green-primary transition-colors"
          >
            View all news →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;