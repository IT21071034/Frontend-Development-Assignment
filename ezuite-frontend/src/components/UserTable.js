import React from "react";

const UserTable = ({ activeTab }) => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      address: "123 Elm Street",
      mobile: "555-1234",
      email: "john.doe@example.com",
      department: "Sales",
      designation: "Manager",
      updated: "2024-05-08 1.45PM",
      number: "1",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Oak Avenue",
      mobile: "555-5678",
      email: "jane.smith@example.com",
      department: "Marketing",
      designation: "Director",
      updated: "2024-03-08 2.10PM",
      number: "2",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      address: "789 Pine Road",
      mobile: "555-8765",
      email: "michael.johnson@example.com",
      department: "Engineering",
      designation: "Engineer",
      updated: "2024-04-01 4:20PM",
      number: "3",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      address: "321 Maple Street",
      mobile: "555-4321",
      email: "emily.davis@example.com",
      department: "HR",
      designation: "HR Specialist",
      updated: "2024-02-15 11:30AM",
      number: "4",
    },
    {
      id: 5,
      firstName: "William",
      lastName: "Brown",
      address: "654 Cedar Lane",
      mobile: "555-6543",
      email: "william.brown@example.com",
      department: "Finance",
      designation: "Accountant",
      updated: "2024-06-18 9:45AM",
      number: "5",
    },
    {
      id: 6,
      firstName: "Olivia",
      lastName: "Taylor",
      address: "987 Birch Road",
      mobile: "555-9876",
      email: "olivia.taylor@example.com",
      department: "Support",
      designation: "Support Specialist",
      updated: "2024-01-22 3:15PM",
      number: "6",
    },
    {
      id: 7,
      firstName: "James",
      lastName: "Anderson",
      address: "123 Oak Street",
      mobile: "555-5432",
      email: "james.anderson@example.com",
      department: "Product",
      designation: "Product Manager",
      updated: "2024-08-12 12:05PM",
      number: "7",
    },
    {
      id: 8,
      firstName: "Sophia",
      lastName: "Martinez",
      address: "321 Pine Avenue",
      mobile: "555-2134",
      email: "sophia.martinez@example.com",
      department: "Design",
      designation: "UX Designer",
      updated: "2024-07-05 5:00PM",
      number: "8",
    },
    {
      id: 9,
      firstName: "Liam",
      lastName: "Wilson",
      address: "987 Cedar Lane",
      mobile: "555-8765",
      email: "liam.wilson@example.com",
      department: "IT",
      designation: "IT Specialist",
      updated: "2024-09-23 10:30AM",
      number: "9",
    },
    {
      id: 10,
      firstName: "Emma",
      lastName: "Clark",
      address: "456 Birch Road",
      mobile: "555-3456",
      email: "emma.clark@example.com",
      department: "Customer Support",
      designation: "Agent",
      updated: "2024-05-19 1:00PM",
      number: "10",
    },
    {
      id: 11,
      firstName: "Hentory",
      lastName: "Taylor",
      address: "456 Birch Road",
      mobile: "555-3456",
      email: "hentory.clark@example.com",
      department: "Quality Assurance",
      designation: "Inspector",
      updated: "2024-05-19 1:00PM",
      number: "11",
    },
    {
      id: 12,
      firstName: "Isabel",
      lastName: "Anderson",
      address: "456 Birch Road",
      mobile: "555-3456",
      email: "isabel.clark@example.com",
      department: "Logistic",
      designation: "Coordinator",
      updated: "2024-05-19 1:00PM",
      number: "12",
    },
  ];

  // Filter users based on activeTab here if needed
  const filteredUsers = users; // Example; adjust filtering logic as needed

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-1 px-2 border-b">First Name</th>
          <th className="py-1 px-2 border-b">Last Name</th>
          <th className="py-1 px-2 border-b">Address</th>
          <th className="py-1 px-2 border-b">Mobile</th>
          <th className="py-1 px-2 border-b">Email</th>
          <th className="py-1 px-2 border-b">Department</th>
          <th className="py-1 px-2 border-b">Designation</th>
          <th className="py-1 px-2 border-b">Updated</th>
          <th className="py-1 px-2 border-b">Number</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user, index) => {
          // Split updated string into date and time
          const [date, time] = user.updated.split(" ");
          // Determine row background color based on index
          const rowClass = index % 2 === 0 ? "bg-gray-100" : "bg-white"; // Ash color for odd rows
          return (
            <tr key={user.id} className={rowClass}>
              <td className="py-0.25 px-2 border-b">{user.firstName}</td>
              <td className="py-0.25 px-2 border-b">{user.lastName}</td>
              <td className="py-0.25 px-2 border-b">{user.address}</td>
              <td className="py-0.25 px-2 border-b">{user.mobile}</td>
              <td className="py-0.25 px-2 border-b">{user.email}</td>
              <td className="py-0.25 px-2 border-b">{user.department}</td>
              <td className="py-0.25 px-2 border-b">{user.designation}</td>
              <td className="py-0.25 px-2 border-b flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 text-white font-bold mr-4">
                  {user.firstName.charAt(0)} {/* Display the first letter */}
                </div>
                <div>
                  {date} <br /> {time}
                </div>
              </td>
              <td className="py-0.25 px-2 border-b">
                <a href={`#user-${user.id}`} className="underline">
                  {user.number}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
