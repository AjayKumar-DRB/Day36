// Switch to a new MongoDB database
// use ZenClass;

// Insert sample data into the Users collection
db.users.insertMany([
    { "user_id": 1, "user_name": "Ajay Kumar", "user_email": "Ajay@doe.com", "batch_id": "WD1" },
    { "user_id": 2, "user_name": "Bob Smith", "user_email": "bob@example.com", "batch_id": "WD2" },
    { "user_id": 3, "user_name": "Alice Johnson", "user_email": "alice@example.com", "batch_id": "WD3" },
    { "user_id": 4, "user_name": "David Lee", "user_email": "david@example.com", "batch_id": "WD4" },
    { "user_id": 5, "user_name": "Emma Brown", "user_email": "emma@example.com", "batch_id": "WD5" },
    { "user_id": 6, "user_name": "John Doe", "user_email": "john@example.com", "batch_id": "WD1" },
    { "user_id": 7, "user_name": "Jane Smith", "user_email": "jane@example.com", "batch_id": "WD2" },
    { "user_id": 8, "user_name": "Michael Johnson", "user_email": "michael@example.com", "batch_id": "WD3" },
    { "user_id": 9, "user_name": "Samantha Lee", "user_email": "samantha@example.com", "batch_id": "WD4" },
    { "user_id": 10, "user_name": "Ryan Brown", "user_email": "ryan@example.com", "batch_id": "WD5" },
    { "user_id": 11, "user_name": "Sophia Martinez", "user_email": "sophia@example.com", "batch_id": "WD1" },
    { "user_id": 12, "user_name": "William Davis", "user_email": "william@example.com", "batch_id": "WD2" },
    { "user_id": 13, "user_name": "Olivia Harris", "user_email": "olivia@example.com", "batch_id": "WD3" },
    { "user_id": 14, "user_name": "James Wilson", "user_email": "james@example.com", "batch_id": "WD4" },
    { "user_id": 15, "user_name": "Isabella Brown", "user_email": "isabella@example.com", "batch_id": "WD5" },
    { "user_id": 16, "user_name": "Ethan Taylor", "user_email": "ethan@example.com", "batch_id": "WD1" },
    { "user_id": 17, "user_name": "Ava Anderson", "user_email": "ava@example.com", "batch_id": "WD2" },
    { "user_id": 18, "user_name": "Daniel Martinez", "user_email": "daniel@example.com", "batch_id": "WD3" },
    { "user_id": 19, "user_name": "Mia Jones", "user_email": "mia@example.com", "batch_id": "WD4" },
    { "user_id": 20, "user_name": "Alexander Garcia", "user_email": "alexander@example.com", "batch_id": "WD5" }
]
);


// Insert sample data into the Codekata collection
db.codekata.insertMany([
    { "problem_id": 1, "completed_users": [
        {1: "Completed"},
        {2: "Completed"},
        {3: "Completed"},
        {4: "Not Completed"},
        {5: "Not Completed"},
        {6: "Completed"},
        {7: "Completed"},
        {8: "Not Completed"},
        {9: "Not Completed"},
        {10: "Completed"},
        {11: "Completed"},
        {12: "Completed"},
        {13: "Not Completed"},
        {14: "Not Completed"},
        {15: "Completed"}
    ] },
    { "problem_id": 2, "completed_users": [
        {1: "Completed"},
        {2: "Completed"},
        {3: "Not Completed"},
        {4: "Completed"},
        {5: "Not Completed"},
        {6: "Not Completed"},
        {7: "Completed"},
        {8: "Completed"},
        {9: "Not Completed"},
        {10: "Not Completed"},
        {11: "Completed"},
        {12: "Not Completed"},
        {13: "Not Completed"},
        {14: "Completed"},
        {15: "Completed"}
    ]  },
    { "problem_id": 3, "completed_users": [
        {1: "Completed"},
        {2: "Not Completed"},
        {3: "Completed"},
        {4: "Not Completed"},
        {5: "Completed"},
        {6: "Completed"},
        {7: "Completed"},
        {8: "Not Completed"},
        {9: "Completed"},
        {10: "Not Completed"},
        {11: "Completed"},
        {12: "Not Completed"},
        {13: "Not Completed"},
        {14: "Not Completed"},
        {15: "Completed"}
    ]  },
    { "problem_id": 4, "completed_users": [
        {1: "Not Completed"},
        {2: "Completed"},
        {3: "Not Completed"},
        {4: "Completed"},
        {5: "Completed"},
        {6: "Not Completed"},
        {7: "Not Completed"},
        {8: "Completed"},
        {9: "Completed"},
        {10: "Not Completed"},
        {11: "Not Completed"},
        {12: "Completed"},
        {13: "Not Completed"},
        {14: "Completed"},
        {15: "Not Completed"}
    ]  },
    { "problem_id": 5, "completed_users": [
        {1: "Completed"},
        {2: "Not Completed"},
        {3: "Completed"},
        {4: "Not Completed"},
        {5: "Completed"},
        {6: "Not Completed"},
        {7: "Completed"},
        {8: "Not Completed"},
        {9: "Not Completed"},
        {10: "Completed"},
        {11: "Completed"},
        {12: "Not Completed"},
        {13: "Completed"},
        {14: "Not Completed"},
        {15: "Completed"}
    ]  }
]);


// Insert sample data into the Attendance collection
db.attendance.insertMany([
    {
        "user_id": 1,
        "attendance": [
            { "mentor_id": 1, "date": "2020-10-20", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-21", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-22", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-23", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-24", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-25", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-26", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-27", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-28", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-29", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-30", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-31", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-01", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-02", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-03", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-04", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-05", "status": "Present" }
        ]
    },
    {
        "user_id": 2,
        "attendance": [
            { "mentor_id": 1, "date": "2020-10-20", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-21", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-22", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-23", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-24", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-25", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-26", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-27", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-28", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-29", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-30", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-31", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-01", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-02", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-03", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-04", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-05", "status": "Present" }
        ]
    },
    {
        "user_id": 3,
        "attendance": [
            { "mentor_id": 1, "date": "2020-10-20", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-21", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-22", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-23", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-24", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-25", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-26", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-27", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-28", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-29", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-30", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-31", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-01", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-02", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-03", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-04", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-05", "status": "Present" }
        ]
    },
    {
        "user_id": 4,
        "attendance": [
            { "mentor_id": 1, "date": "2020-10-20", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-21", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-22", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-23", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-24", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-25", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-26", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-27", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-28", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-29", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-30", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-31", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-01", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-02", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-03", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-04", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-05", "status": "Present" }
        ]
    },
    {
        "user_id": 5,
        "attendance": [
            { "mentor_id": 1, "date": "2020-10-20", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-21", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-22", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-10-23", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-24", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-25", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-26", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-27", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-28", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-29", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-30", "status": "Present" },
            { "mentor_id": 1, "date": "2020-10-31", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-01", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-02", "status": "Absent" },
            { "mentor_id": 1, "date": "2020-11-03", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-04", "status": "Present" },
            { "mentor_id": 1, "date": "2020-11-05", "status": "Present" }
        ]
    }
]);


// Insert sample data into the Topics collection
db.topics.insertMany([
    { "topic_id": 1, "topic_name": "Introduction to HTML", "topic_date": "2020-10-20" },
    { "topic_id": 2, "topic_name": "CSS Basics", "topic_date": "2020-10-21" },
    { "topic_id": 3, "topic_name": "JavaScript Fundamentals", "topic_date": "2020-10-22" },
    { "topic_id": 4, "topic_name": "MongoDB Essentials", "topic_date": "2020-10-23" },
    { "topic_id": 5, "topic_name": "Express.js Basics", "topic_date": "2020-10-24" },
    { "topic_id": 6, "topic_name": "Advanced HTML5 Features", "topic_date": "2020-10-25" },
    { "topic_id": 7, "topic_name": "CSS Flexbox Layout", "topic_date": "2020-10-26" },
    { "topic_id": 8, "topic_name": "Asynchronous JavaScript", "topic_date": "2020-10-27" },
    { "topic_id": 9, "topic_name": "MongoDB Data Modeling", "topic_date": "2020-10-28" },
    { "topic_id": 10, "topic_name": "RESTful APIs with Express.js", "topic_date": "2020-10-29" },
    { "topic_id": 11, "topic_name": "JavaScript Promises", "topic_date": "2020-10-30" },
    { "topic_id": 12, "topic_name": "CSS Grid Layout", "topic_date": "2020-10-31" },
    { "topic_id": 13, "topic_name": "React.js Fundamentals", "topic_date": "2020-11-01" },
    { "topic_id": 14, "topic_name": "Authentication in Express.js", "topic_date": "2020-11-02" },
    { "topic_id": 15, "topic_name": "MongoDB Aggregation Pipeline", "topic_date": "2020-11-03" }
]
);

// Insert sample data into the Tasks collection
db.tasks.insertMany([
    { "task_id": 1, "task_name": "sample task 1", "description": "This is a sample description for the first task.", "due_date": "2020-10-28", "completed_users": [
        { 1: "Completed" },
        { 2: "Not Completed" },
        { 3: "Completed" },
        { 4: "Not Completed" },
        { 5: "Completed" },
        { 6: "Not Completed" },
        { 7: "Completed" },
        { 8: "Not Completed" },
        { 9: "Completed" },
        { 10: "Not Completed" },
        { 11: "Completed" },
        { 12: "Not Completed" },
        { 13: "Completed" },
        { 14: "Not Completed" },
        { 15: "Completed" }
    ] },
    { "task_id": 2, "task_name": "sample task 2", "description": "This is a sample description for the second task.", "due_date": "2020-10-29", "completed_users": [
        { 1: "Not Completed" },
        { 2: "Completed" },
        { 3: "Not Completed" },
        { 4: "Completed" },
        { 5: "Not Completed" },
        { 6: "Completed" },
        { 7: "Not Completed" },
        { 8: "Completed" },
        { 9: "Not Completed" },
        { 10: "Completed" },
        { 11: "Not Completed" },
        { 12: "Completed" },
        { 13: "Not Completed" },
        { 14: "Completed" },
        { 15: "Not Completed" }
    ] },
    { "task_id": 3, "task_name": "sample task 3", "description": "This is a sample description for the third task.", "due_date": "2020-10-30", "completed_users": [
        { 1: "Completed" },
        { 2: "Completed" },
        { 3: "Not Completed" },
        { 4: "Not Completed" },
        { 5: "Completed" },
        { 6: "Completed" },
        { 7: "Not Completed" },
        { 8: "Not Completed" },
        { 9: "Completed" },
        { 10: "Completed" },
        { 11: "Not Completed" },
        { 12: "Not Completed" },
        { 13: "Completed" },
        { 14: "Completed" },
        { 15: "Not Completed" }
    ] },
    { "task_id": 4, "task_name": "sample task 4", "description": "This is a sample description for the fourth task.", "due_date": "2020-10-31", "completed_users": [
        { 1: "Not Completed" },
        { 2: "Not Completed" },
        { 3: "Completed" },
        { 4: "Completed" },
        { 5: "Not Completed" },
        { 6: "Not Completed" },
        { 7: "Completed" },
        { 8: "Completed" },
        { 9: "Not Completed" },
        { 10: "Not Completed" },
        { 11: "Completed" },
        { 12: "Completed" },
        { 13: "Not Completed" },
        { 14: "Not Completed" },
        { 15: "Completed" }
    ] },
    { "task_id": 5, "task_name": "sample task 5", "description": "This is a sample description for the fifth task.", "due_date": "2020-11-01", "completed_users": [
        { 1: "Completed" },
        { 2: "Not Completed" },
        { 3: "Completed" },
        { 4: "Completed" },
        { 5: "Not Completed" },
        { 6: "Not Completed" },
        { 7: "Completed" },
        { 8: "Completed" },
        { 9: "Not Completed" },
        { 10: "Not Completed" },
        { 11: "Completed" },
        { 12: "Completed" },
        { 13: "Not Completed" },
        { 14: "Not Completed" },
        { 15: "Completed" }
    ] }
]
);


// Insert sample data into the Company_Drives collection
db.company_drives.insertMany([
    {
        "drive_id": 1,
        "drive_title": "Sample Drive Title 1",
        "drive_link": "https://www.google.com/drive/folders/abcdefg123456789",
        "company_name": "Demo Company 1",
        "drive_date": "2020-10-26",
        "user_id": [1, 2, 3, 4, 5]
    },
    {
        "drive_id": 2,
        "drive_title": "Sample Drive Title 2",
        "drive_link": "https://www.google.com/drive/folders/abcdefg987654321",
        "company_name": "Demo Company 2",
        "drive_date": "2020-10-27",
        "user_id": [6, 7, 8, 9, 10, 11]
    },
    {
        "drive_id": 3,
        "drive_title": "Sample Drive Title 3",
        "drive_link": "https://www.google.com/drive/folders/abcdefg567890123",
        "company_name": "Demo Company 3",
        "drive_date": "2020-10-28",
        "user_id": [12, 13, 14]
    },
    {
        "drive_id": 4,
        "drive_title": "Sample Drive Title 4",
        "drive_link": "https://www.google.com/drive/folders/abcdefg321098765",
        "company_name": "Demo Company 4",
        "drive_date": "2020-10-29",
        "user_id": [1, 2, 3, 4, 5, 6, 7]
    },
    {
        "drive_id": 5,
        "drive_title": "Sample Drive Title 5",
        "drive_link": "https://www.google.com/drive/folders/abcdefg456789012",
        "company_name": "Demo Company 5",
        "drive_date": "2020-10-30",
        "user_id": [8, 9, 10, 11, 12]
    }
]);

// Insert sample data into the Mentors collection
db.mentors.insertMany([
    { "id": 1, "mentor_name": "Akash", "mentee": [1, 2, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 18, 19, 20] },
    { "id": 2, "mentor_name": "Bella", "mentee": [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 17, 18, 19, 20] },
    { "id": 3, "mentor_name": "Chris", "mentee": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { "id": 4, "mentor_name": "David", "mentee": [1, 2, 14, 15, 16, 17, 20] },
    { "id": 5, "mentor_name": "Ella", "mentee": [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19, 20] }
]);