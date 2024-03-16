//1. Find all the topics and tasks which are thought in the month of October
//Topics taught in the month of October
db.topics.find({ "topic_date": { $gte: "2020-10-01", $lte: "2020-10-31" } }, {"_id": 0, "topic_id": 0});
//Tasks due in the month of October
db.tasks.find({ "due_date": { $gte: "2020-10-01", $lte: "2020-10-31" } }, {"_id": 0, "task_id": 0, "description": 0, "completed_users": 0 });

//2. Find all the company drives which appeared between 15-Oct-2020 and 31-Oct-2020
db.company_drives.find({ "drive_date": { $gte: "2020-10-15", $lte: "2020-10-31" } }, { "_id": 0, "drive_id": 0, "drive_link": 0, "user_id": 0 });

//3. Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
    {   
        //Access users collection  to get student details
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "user_id",
            as: "students"
        }
    },
    {
        $project: {
            _id: 0,
            drive_title: 1,
            user_names: "$students.user_name"
        }
    }
]);

//4. Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    { $unwind: "$completed_users" },
    { 
        $project: {
            completed_users: { $objectToArray: "$completed_users" },
            user_id: 1,
            problem_id: 1 // Include the problem_id field
        }
    },
    { 
        $unwind: "$completed_users"// Unwind the completed_users array and match documents where the completed_users.v value is "Completed"
    },
    { 
        $match: { "completed_users.v": "Completed" }
    },
    {
        $group: {
            _id: "$completed_users.k",
            user_id: {$first: "$completed_users.k"},
            total_questions_solved: { $sum: 1 }, // Count the number of completed questions
            problem_id: { $push: "$problem_id" } // Retrieve the problem_id
        }
    },
    { 
        $project: {
            _id: 0,
            user_id: 1, // Use _id as user_id
            total_questions_solved: 1,
            problem_id: 1
        }
    },
    { $sort: { "user_id": 1 } } // Sort by user_id in ascending order
]);


//5. Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([
    {
        $project: {
            _id: 0,
            mentor_id: "$id",
            mentor_name: "$mentor_name",
            student_count: { $size: "$mentee" }
        }
    },
    {
        $match: {
            student_count: { $gt: 15 } 
        }
    }
]);

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
//Number of students absent
db.attendance.aggregate([
    { $unwind: "$attendance" },
    { $match: { "attendance.status": "Absent", "attendance.date": { $gte: "2020-10-15", $lte: "2020-10-31" } } },
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "user_id",
            as: "user"
        }
    },
    { $unwind: "$user" },
    {
        $group: {
            _id: "$attendance.date",
            date: { $first: "$attendance.date" },
            user_name: { $push: "$user.user_name" },
            total_users_absent: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
           date: 1,
           user_name: 1,
           total_users_absent: 1
        }
    },
    {
        $sort: { "date": 1 }
    }
]);

//Number of tasks not submitted
db.tasks.aggregate([
    { $unwind: "$completed_users" },
    {
        $project: {
            completed_users: { $objectToArray: "$completed_users" },
            task_id: 1,
            due_date: 1
        }
    },
    { $unwind: "$completed_users" },
    { $match: { "completed_users.v": "Not Completed" } },
    {
        $addFields: {
            "completed_users.k": { $toInt: "$completed_users.k" } // Convert k to integer
        }
    },
    {
        $lookup: {
            from: "users",
            localField: "completed_users.k",
            foreignField: "user_id",
            as: "user"
        }
    },
    { $unwind: "$user" },
    {
        $group: {
            _id: "$task_id",
            task_id: { $first: "$task_id" },
            due_date: { $first: "$due_date" },
            unsubmitted_users: { $push: "$user.user_name" },
            unsubmitted_users_count: { $sum: 1 }
        }
    },
    { 
        $project: {
            _id: 0,
            task_id: 1,
            due_date: 1,
            unsubmitted_users: 1,
            unsubmitted_users_count: 1
        }
    },
    { $sort: { "task_id": 1 } }
]);