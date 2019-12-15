const data = [
  {
    subject: "Computer Science",
    courses: [
      {
        crn: "10257",
        title: "CUS1102",
        name: "Software Application",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "5:00pm-6:25pm" },
          { date: "Friday", time: "5:00pm-6:25pm" }
        ],
        instructor: "Barry Lieberman",
        seats: "18",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "11501",
        title: "CUS1115",
        name: "Computer Prog Fund I",
        credits: "3",
        schedule: [
          { date: "Monday", time: "09:05am-10:30am" },
          { date: "Thursday", time: "09:50am-10:30am" }
        ],
        instructor: "Joan DeBello",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "12329",
        title: "CUS1116",
        name: "Computer Prog Fund I",
        credits: "3",
        schedule: [
          { date: "Monday", time: "12:15pm-1:40pm" },
          { date: "Thursday", time: "12:15pm-1:40pm" }
        ],
        instructor: "Bonnie Mackellar",
        seats: "10",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
 {
        crn: "15476",
        title: "CUS1150",
        name: "Systems Programming in Linux",
        credits: "3",
        schedule: [
          { date: "Monday", time: "10:40am-12:05pm" },
          { date: "Thursday", time: "10:40am-12:05pm" }
        ],
        instructor: "Bonnie Mackellar",
        seats: "7",
        prerequiste: "None",
        lecture_type: "Lecture"
      
    
  },
      {
        crn: "12560",
        title: "CUS1156",
        name: "Software Design Methods",
        credits: "3",
        schedule: [{ date: "Thursday", time: "5:00pm-6:25pm" }],
        instructor: "Nikhil Yadav",
        seats: "1",
        prerequiste: "CUS1126",
        lecture_type: "Hybrid-Classroom & Online"
      },
      {
        crn: "12948",
        title: "CUS1166",
        name: "Software Engineering",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "1:50pm-4:40pm" }],
        instructor: "TBA",
        seats: "3",
        prerequiste: "CUS1156",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "13802",
        title: "CUS1186",
        name: "Theory of Computation",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "5:00pm-7:50pm" }],
        instructor: "Ronald Fechter",
        seats: "12",
        prerequiste: "CUS1126",
        lecture_type: "Lecture"
      }
    ]
  },
  {
    subject: "Computer Security Systems",
    courses: [
      {
        crn: "13323",
        title: "CSS1005",
        name: "Fundamentals of Cyber Security",
        credits: "3",
        schedule: [{ date: "Friday", time: "10:40am-12:05pm" }],
        instructor: "Erald Troja",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "13858",
        title: "CSS1008",
        name: "Healthcare Info Security",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "5:00pm-6:25pm" }],
        instructor: "Sajed Naseem",
        seats: "16",
        prerequiste: "CSS1005 or HCI1001",
        lecture_type: "Hybrid-Classroom & Online"
      },
      {
        crn: "15411",
        title: "CSS1018",
        name: "SQL & Cloud Database Security",
        credits: "3",
        schedule: [{ date: "Monday", time: "7:10pm-10:00pm" }],
        instructor: "Anil Chacko",
        seats: "2",
        prerequiste: "CSS1005 or CUS1165",
        lecture_type: "Lectue/Lab"
      },
      {
        crn: "13913",
        title: "CSS1006",
        name: "Mgmt of Information Security",
        credits: "3",
        schedule: [
          { date: "Monday", time: "10:40am-12:05pm" },
          { date: "Thursday", time: "10:40am-12:05pm" }
        ],
        instructor: "Geoffrey Dick",
        seats: "1",
        prerequiste: "CSS1005",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "13856",
        title: "CSS1011",
        name: "Network Security",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "1:50pm-3:15pm" }],
        instructor: "Suzanna Schmeelk",
        seats: "5",
        prerequiste: "CSS1005 or NET1011",
        lecture_type: "Hybrid-Classroom & Online"
      },
      {
        crn: "14986",
        title: "CSS1015",
        name: "Wireless Security",
        credits: "3",
        schedule: [{ date: "Monday", time: "09:05am-10:30am" }],
        instructor: "Suzanna Schmeelk",
        seats: "0",
        prerequiste: "CSS1011",
        lecture_type: "Hybrid-Classroom & Online"
      }
    ]
  },
  {
    subject: "Healthcare Informatics",
    courses: [
      {
        crn: "15413",
        title: "HCI1002",
        name: "Healthcare Info & Data Mgmt",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "12:15pm-13:40pm" },
          { date: "Friday", time: "12:15pm-1:40pm" }
        ],
        instructor: "Syed Ahmed Chan Bukhari",
        seats: "14",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },
      {
        crn: "15630",
        title: "HCI1015",
        name: "Data Standards/Vocab in HLTHCR",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "7:10pm-10:00pm" }],
        instructor: "Syed Ahmed Chan Bukhari",
        seats: "23",
        prerequiste: "HCI1001",
        lecture_type: "Lecture"
      },
      {
        crn: "11881",
        title: "HCI1021",
        name: "Healthcare Database Mgmt Sys",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "10:40am-1:30pm" }],
        instructor: "Syed Ahmed Chan Bukhari",
        seats: "4",
        prerequiste: "HCI1002 & CUS1116",
        lecture_type: "Lecture"
      }
    ]
  },
  {
    subject: "Information Technology",
    courses: [
      {
        crn: "13136",
        title: "IT1011",
        name: "Info Technology for Business",
        credits: "3",
        schedule: [
          { date: "Monday", time: "07:30am-08:55am" },
          { date: "Thursday", time: "07:30am-08:55am" }
        ],
        instructor: "Geoffrey Dick",
        seats: "19",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      }
    ]
  },
  {
    subject: "Mathematics",
    courses: [
      {
        crn: "14054",
        title: "MTH1009",
        name: "Calculus I",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "3:25pm-4:50pm" },
          { date: "Friday", time: "3:25pm-4:50pm" }
        ],
        instructor: "Abdel Aziz Elmrini",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "10747",
        title: "MTH1009",
        name: "Calculus I",
        credits: "3",
        schedule: [
          { date: "Tuesday", time: "3:25pm-4:50pm" },
          { date: "Friday", time: "3:25pm-4:50pm" }
        ],
        instructor: "Michael Vaisfeld",
        seats: "22",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "10031",
        title: "MTH1010",
        name: "Calculus II",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "0730-1020" }],
        instructor: "Frank Servas",
        seats: "15",
        prerequiste: "MTH1009",
        lecture_type: "Lecture"
      },
      {
        crn: "11661",
        title: "MTH1013",
        name: "Probaility & Statistics I",
        credits: "3",
        schedule: [{ date: "Tuesday", time: "09:50am-10:30am" }],
        instructor: "Frank Servas",
        seats: "12",
        prerequiste: "None",
        lecture_type: "Lecture"
      },
      {
        crn: "11518",
        title: "MTH1014",
        name: "Probability & Statistics II",
        credits: "3",
        schedule: [
          { date: "Monday", time: "3:25pm-4:50pm" },
          { date: "Thursday", time: "3:25pm-4:50pm" }
        ],
        instructor: "Satyanand Singh",
        seats: "1",
        prerequiste: "MTH1013",
        lecture_type: "Lecture"
      },
 {
        crn: "12571",
        title: "MTH1022",
        name: "Discrete Mathematics",
        credits: "3",
        schedule: [
          { date: "Monday", time: "5:00pm-6:25pm" },
          { date: "Thursday", time: "5:00pm-6:25pm" }
        ],
        instructor: "Satyanand Singh",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture"
      }
    ]
  },
     
  {
    subject: "Networking",
    courses: [
      {
        crn: "11882",
        title: "Net1011",
        name: "Introduction to Networks",
        credits: "3",
        schedule: [{ date: "Wednesday", time: "10:40am-1:30pm" }],
        instructor: "Maxine Greenidge",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Lecture/Lab"
      },

      {
        crn: "12768",
        title: "Net1061",
        name: "Advanced Network Routing",
        credits: "3",
        schedule: [{ date: "Saturday", time: "08:30am-11:20am" }],
        instructor: "John Rullan",
        seats: "25",
        prerequiste: "Net1015",
        lecture_type: "Lecture/Lab"
      },
 {
        crn: "11336",
        title: "Net1091",
        name: "Networking Internship",
        credits: "3",
        schedule: [{ date: "None", time: "None" }],
        instructor: "Nikhil Yadav",
        seats: "0",
        prerequiste: "None",
        lecture_type: "Internship"
      }
    ]
  }
];

exports.module=data;
 
