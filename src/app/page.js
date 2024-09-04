import styles from "./page.module.css";

export default function Home() {
  const persons = [
    { name: "Max", age: 25, city: "Berlin", jobTitle: "Software Engineer" },
    { name: "Sara", age: 30, city: "Hamburg", jobTitle: "Data Scientist" },
    { name: "John", age: 22, city: "Munich", jobTitle: "Product Manager" },
    { name: "Anna", age: 28, city: "Berlin", jobTitle: "UX Designer" },
    { name: "Tom", age: 35, city: "Cologne", jobTitle: "Marketing Specialist" },
    { name: "Lisa", age: 40, city: "Frankfurt", jobTitle: "HR Manager" },
    { name: "Paul", age: 29, city: "Berlin", jobTitle: "DevOps Engineer" },
    { name: "Sophie", age: 33, city: "Hamburg", jobTitle: "Graphic Designer" },
    { name: "David", age: 27, city: "Munich", jobTitle: "Business Analyst" },
    { name: "Emma", age: 24, city: "Cologne", jobTitle: "Frontend Developer" }
  ];

// Ausgabe der Liste der Personen
  console.log("Originale Liste:");
  console.log(persons);

  return (
    <div>
      <h1>Personenliste</h1>
      {persons.map((person, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{person.name}</h2>
          <p>Alter: {person.age}</p>
          <p>Stadt: {person.city}</p>
          <p>Beruf: {person.jobTitle}</p>
        </div>
      ))}
    </div>
  )
}
