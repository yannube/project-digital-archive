export type VeteranSection = {
  heading: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "center" | "right" | "left";
  bullets?: string[];
};

export type VeteranTimelineItem = {
  year: string;
  text: string;
};

export type Veteran = {
  slug: string;
  fullName: string;
  title: string;
  cardSubtitle: string;
  dateOfBirth?: string;
  profileImage: string;
  profileImageAlt: string;
  video?: string;
  videoPoster?: string;
  shortBio: string;
  sections: VeteranSection[];
  timeline: VeteranTimelineItem[];
};

export const veterans: Veteran[] = [
  {
    slug: "abdulla-rasheed",
    fullName: "Abdulla Rasheed",
    title: "A Lifelong Pillar of Scouting in the Maldives",
    cardSubtitle: "A Lifelong Pillar of Scouting in the Maldives",
    dateOfBirth: "15th December 1952",
    profileImage: "/images/veterans/abdulla-rasheed.jpg",
    profileImageAlt: "Portrait of Abdulla Rasheed",
    shortBio:
      "A lifelong pillar of Scouting in the Maldives, recognised for his leadership, national contribution, and service to the global Scout Movement.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Mr. Abdulla Rasheed stands as one of the most influential and respected figures in the history of the Maldivian Scouting movement. With a lifelong commitment spanning more than six decades, his leadership, vision, and dedication have shaped the direction of Scouting both nationally and internationally.",
          "His contributions have strengthened youth development, institutional growth, and global cooperation within the Scout Movement.",
        ],
        image: "/images/veterans/abdulla-rasheed-1.jpg",
        imageAlt: "Abdulla Rasheed receiving recognition",
        imagePosition: "center",
      },
      {
        heading: "Early Scouting Journey",
        body: [
          "Mr. Rasheed began his Scouting journey in 1960, joining the First Malé Scout Group at Majeediyya School, one of the earliest and most prominent Scout groups in the Maldives.",
          "From a young age, he embraced the core values of Scouting: discipline, service, leadership, and responsibility.",
        ],
      },
      {
        heading: "Founding Leadership and National Impact",
        body: [
          "Recognising the importance of a unified national structure for Scouting, Mr. Rasheed played a pivotal role in the establishment of the Scout Association of Maldives in 1984.",
          "His service as Deputy Chief Commissioner and later Chief Commissioner helped strengthen governance, training, and programme delivery within the movement.",
        ],
        image: "/images/veterans/abdulla-rasheed-2.jpg",
        imageAlt: "Abdulla Rasheed with Scout leaders",
        imagePosition: "right",
        bullets: [
          "Development of policy, organisation, and rules for a standardised national framework.",
          "Initiation of the first National Scout Jamboree, promoting unity and shared learning.",
          "Strengthening national governance and programme delivery within the movement.",
        ],
      },
      {
        heading: "Global Representation and International Leadership",
        body: [
          "One of Mr. Rasheed’s most significant achievements was leading the successful effort for the Maldives to become a full member of the World Organization of the Scout Movement.",
          "He later served as Regional Director of the World Scout Bureau — Asia-Pacific Region, strengthening cooperation and leadership across many countries.",
        ],
        image: "/images/veterans/abdulla-rasheed-3.jpg",
        imageAlt: "Abdulla Rasheed at an international recognition ceremony",
        imagePosition: "right",
      },
      {
        heading: "Recognition and Honors",
        body: [
          "In recognition of his extraordinary service and lifelong dedication to Scouting, Mr. Abdulla Rasheed was awarded the Bronze Wolf Award in 2013 by the World Scout Committee.",
          "This is the highest honour in world Scouting, presented only to individuals who have rendered exceptional service to the global Scout Movement.",
        ],
      },
      {
        heading: "Legacy and Inspiration",
        body: [
          "Today, Mr. Abdulla Rasheed is widely regarded as a foundational pillar of Scouting in the Maldives.",
          "His unwavering commitment to youth empowerment, community development, and international cooperation continues to inspire generations of Scouts and leaders.",
        ],
      },
    ],
    timeline: [
      { year: "1960", text: "Joined the First Malé Scout Group at Majeediyya School" },
      { year: "1984–1990s", text: "Served as Deputy Chief Commissioner and later Chief Commissioner" },
      { year: "2002–2013", text: "Regional Director, World Scout Bureau Asia-Pacific Region" },
      { year: "2013", text: "Awarded the Bronze Wolf Award" },
      { year: "2014–2018", text: "Advisor to the Secretary General, WOSM" },
    ],
  },
  {
    slug: "ahmed-ali-manik",
    fullName: "Ahmed Ali Manik",
    title: "A Visionary Leader and Champion of Scouting Excellence",
    cardSubtitle: "A Visionary Leader and Champion of Scouting Excellence",
    profileImage: "/images/veterans/ahmed-ali-manik.jpg",
    profileImageAlt: "Portrait of Ahmed Ali Manik",
    shortBio:
      "A visionary leader respected for his commitment to Scouting excellence, youth development, and institutional growth in the Maldives.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Mr. Ahmed Ali Manik is a distinguished figure in the history of Scouting in the Maldives, widely respected for his leadership, vision, and lifelong dedication to youth development.",
          "His service has played a significant role in shaping the national Scouting movement, strengthening its institutional foundations, and elevating its presence on both regional and global platforms.",
        ],
        image: "/images/veterans/ahmed-ali-manik-1.jpg",
        imageAlt: "Ahmed Ali Manik with Scout leaders",
        imagePosition: "center",
      },
      {
        heading: "Early Journey in Scouting",
        body: [
          "Mr. Manik began his Scouting journey in 1965 as a Scout at Majeediyya School, one of the most prominent centres of early Scouting in the Maldives.",
          "From his formative years, he demonstrated strong leadership qualities and a deep commitment to the core values of Scouting service, responsibility, environmental awareness, and community development.",
        ],
        image: "/images/veterans/ahmed-ali-manik-2.jpg",
        imageAlt: "Young Scout connected to Ahmed Ali Manik’s Scouting journey",
        imagePosition: "right",
      },
      {
        heading: "Leadership and National Contributions",
        body: [
          "Following the formal establishment of the Scout Association of Maldives, Mr. Manik assumed key leadership roles within the Association.",
          "In his role as Treasurer and later through leadership responsibilities, he contributed to organisational stability, training, and national visibility.",
        ],
        image: "/images/veterans/ahmed-ali-manik-3.jpg",
        imageAlt: "Ahmed Ali Manik with Scouts",
        imagePosition: "left",
      },
      {
        heading: "Achievements and Institutional Growth",
        body: [
          "Under Mr. Manik’s leadership, the Scout Association of Maldives achieved significant national recognition.",
          "His leadership helped position Scouting as a respected contributor to national development efforts.",
        ],
        bullets: [
          "National Award of Recognition for Public Service.",
          "Green Leaf Award recognising commitment to environmental protection and sustainability initiatives.",
        ],
      },
      {
        heading: "International Engagement and Recognition",
        body: [
          "Mr. Manik also played a key role in strengthening the Maldives’ presence within the global Scouting community.",
          "Through active participation in international forums and collaboration with regional partners, he helped ensure that the Maldivian Scout Movement maintained a strong and respected global voice.",
        ],
      },
      {
        heading: "Legacy and Impact",
        body: [
          "Through decades of dedicated service, Mr. Ahmed Ali Manik has contributed significantly to shaping the modern identity of Scouting in the Maldives.",
          "His leadership promoted integrity, sustainability, and international collaboration, leaving a lasting impact on the movement.",
        ],
      },
    ],
    timeline: [
      { year: "1965", text: "Joined Scouting at Majeediyya School" },
      { year: "1988", text: "Appointed Treasurer of the Scout Association of Maldives" },
      { year: "Chief Commissioner", text: "Served two terms totaling nine years" },
    ],
  },
  {
    slug: "ahmed-imaad-mohamed",
    fullName: "Ahmed Imaad Mohamed",
    title: "A Founding Educator and Lifelong Contributor to Scouting in the Maldives",
    cardSubtitle: "A Founding Educator and Lifelong Contributor to Scouting in the Maldives",
    dateOfBirth: "18th June 1950",
    profileImage: "/images/veterans/ahmed-imaad-mohamed.jpg",
    profileImageAlt: "Portrait of Ahmed Imaad Mohamed",
    video: "/videos/veterans/ahmed-imaad-mohamed.mp4",
    videoPoster: "/images/veterans/ahmed-imaad-mohamed.jpg",
    shortBio:
      "A founding educator and lifelong contributor to Scouting in the Maldives, remembered for his service, training, and dedication to youth development.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Mr. Ahmed Imaad Mohamed stands as a pioneering educator and one of the most influential figures in the history of Scouting in the Maldives.",
          "His lifelong dedication to youth development, leadership training, and educational service has left a lasting impact on the national Scouting movement.",
        ],
        image: "/images/veterans/ahmed-imaad-mohamed-1.jpg",
        imageAlt: "Ahmed Imaad Mohamed in a Scouting ceremony",
        imagePosition: "center",
      },
      {
        heading: "Early Journey in Scouting",
        body: [
          "Mr. Imaad’s journey in Scouting began in 1960, during his studies at Wesley College in Sri Lanka.",
          "Even at a young age, he demonstrated a deep commitment to the principles of discipline, service, and leadership.",
        ],
        image: "/images/veterans/ahmed-imaad-mohamed-2.jpg",
        imageAlt: "Scout ceremony connected to Ahmed Imaad Mohamed",
        imagePosition: "right",
      },
      {
        heading: "International Experience and Leadership Development",
        body: [
          "He later continued his academic and Scouting journey at Al Azhar University in Egypt, where he became an active member of the university’s Scout Group.",
          "During this time, he successfully completed his Leader Training, strengthening his leadership skills and gaining exposure to international Scouting practices.",
        ],
      },
      {
        heading: "Pioneering Scouting in the Maldives",
        body: [
          "Upon returning home, Mr. Imaad made history by becoming the first Maldivian Scout Master of Majeediyya School, one of the most significant institutions in the country’s educational and Scouting heritage.",
          "His leadership at Majeediyya marked a major milestone in the structured growth of Scouting in the Maldives.",
        ],
        image: "/images/veterans/ahmed-imaad-mohamed-3.jpg",
        imageAlt: "Ahmed Imaad Mohamed at a Scout event",
        imagePosition: "right",
      },
      {
        heading: "Regional and International Contributions",
        body: [
          "In 1993, Mr. Imaad’s expertise was recognised beyond national borders when he was appointed to the Asia-Pacific Regional Sub-Committee on Training.",
          "Through this role, he contributed to regional leadership development initiatives and helped strengthen cooperation among Scout organisations across the Asia-Pacific region.",
        ],
      },
      {
        heading: "Recognition and Honors",
        body: [
          "In recognition of his lifelong dedication and service, Mr. Imaad received the Asia-Pacific Regional Chairman’s Award in 2000 for his outstanding contributions to Scouting in the region.",
          "He also received the Bronze Coconut Award from the Scout Association of Maldives, honouring his enduring service and impact on national Scouting development.",
        ],
      },
      {
        heading: "Legacy: Imaad’s Scout Library",
        body: [
          "One of Mr. Imaad’s most enduring contributions is the establishment of Imaad’s Scout Library.",
          "This resource centre was created to provide Scouts and leaders with access to essential literature, training materials, and historical documentation.",
        ],
      },
      {
        heading: "Enduring Impact",
        body: [
          "Through decades of unwavering service, Mr. Ahmed Imaad Mohamed has helped shape the intellectual, moral, and structural foundations of Scouting in the Maldives.",
          "His legacy continues to inspire leaders, empower youth, and guide the future of the movement.",
        ],
      },
    ],
    timeline: [
      { year: "1960", text: "Began Scouting journey at Wesley College, Sri Lanka" },
      { year: "Early 1960s", text: "Active Scout and Leader Trainee at Al Azhar University, Egypt" },
      { year: "1960s–1970s", text: "Appointed first Maldivian Scout Master of Majeediyya School" },
      { year: "1993", text: "Appointed to the Asia-Pacific Regional Sub-Committee on Training" },
      { year: "2000", text: "Awarded Asia-Pacific Regional Chairman’s Award" },
    ],
  },
];

export const featuredVeteranSlug = "ahmed-imaad-mohamed";