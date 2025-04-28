export default function Profile({
  name,
  email,
  age,
}: {
  name: string;
  email: string;
  age: number;
}) {
  const proStyle = {
    border: "1px solid #00d8ff",
    boxShadow: "1px 1px 17px #00d8ff inset",
    margin: "20px",
    padding: "10px",
  };
  console.log(`The props  contain ${name}`);
  return (
    <div style={proStyle}>
      <h2> Hello {name}</h2>
      <p>Your email is {email}</p>
      <p>the age is {age}</p>
    </div>
  );
}
