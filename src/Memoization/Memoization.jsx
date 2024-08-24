import { useMemo, useState } from "react";

const initialFriends = [
  "John Smith",
  "Jane Doe",
  "Michael Johnson",
  "Emily Davis",
  "Sarah Brown",
  "David Wilson",
  "Laura Moore",
  "Daniel Taylor",
  "Sophia Anderson",
  "James Thomas",
  "Olivia Jackson",
  "Benjamin White",
  "Emma Harris",
  "Liam Martin",
  "Ava Thompson",
  "Noah Garcia",
  "Isabella Martinez",
  "Lucas Robinson",
  "Mia Clark",
  "Elijah Rodriguez",
  "Charlotte Lewis",
  "Mason Lee",
  "Amelia Walker",
  "Logan Hall",
  "Harper Allen",
  "Alexander Young",
  "Evelyn King",
  "Henry Wright",
  "Ella Scott",
  "Sebastian Adams",
  "Grace Baker",
  "Matthew Gonzalez",
  "Chloe Nelson",
  "Samuel Carter",
  "Victoria Mitchell",
  "Gabriel Perez",
  "Zoe Roberts",
  "Jackson Turner",
  "Lily Phillips",
  "Lucas Campbell",
  "Hannah Parker",
  "Jacob Evans",
  "Mila Edwards",
  "Levi Collins",
  "Elizabeth Stewart",
  "Owen Sanchez",
  "Scarlett Morris",
  "Ethan Rivera",
  "Penelope Cook",
  "Jack Morgan",
  "Nora Reed",
  "William Murphy",
  "Riley Bailey",
  "Oliver Bell",
  "Sofia Foster",
  "Leo Gray",
  "Maya Howard",
  "Benjamin Ward",
  "Hazel Simmons",
  "Elijah Butler",
  "Aurora Peterson",
  "James Bryant",
  "Luna Wood",
  "Aiden Coleman",
  "Aria Russell",
  "Carter Powell",
  "Layla Perry",
  "Isaac Long",
  "Mila Patterson",
  "Gabriel Hughes",
  "Eleanor Price",
  "Henry Bennett",
  "Lucy Russell",
  "Wyatt Sanders",
  "Lila Myers",
  "Dylan Reed",
  "Abigail James",
  "Caleb Anderson",
  "Ellie Collins",
  "Nathan Gray",
  "Savannah Stewart",
  "Aaron Edwards",
  "Avery Howard",
  "Joshua Gonzalez",
  "Grace Robinson",
  "Luke Scott",
  "Lily Harris",
  "Andrew Young",
  "Violet Walker",
  "Joseph Phillips",
  "Stella Lewis",
  "Connor Johnson",
  "Ruby Wright",
  "Ryan Turner",
  "Alice Perez",
  "Hunter Cook",
  "Scarlett Mitchell",
  "Adam Bell",
  "Luna Campbell",
  "Joseph Foster",
  "Isabella Morgan",
  "Asher Parker",
];

function Memoization() {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState(initialFriends);
  const [filter, setFilter] = useState("");

  // * Without memoization
  // const visibleFriends = friends.filter(
  //   friend => friend.toLowerCase().includes(filter),
  //   console.log("render visibleFriends", new Date().toLocaleTimeString()),
  // );

  // * With memoization
  const visibleFriends = useMemo(() => {
    console.log(
      "render memoizedVisibleFriends ",
      new Date().toLocaleTimeString(),
    );
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [filter, friends]);

  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>
        Total counts: {count}
      </button>
      <input
        type="text"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {visibleFriends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </>
  );
}

export default Memoization;
