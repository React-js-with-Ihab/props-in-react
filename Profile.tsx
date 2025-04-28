type Props = {
  name: string;
  email: string;
  age: number;
  article?: string;
  children?: React.ReactNode;
};
export default function Profile({
  name,
  email,
  age,
  article = "No article",
  children,
}: Props) {
  const proStyle = {
    border: "1px solid #00d8ff",
    boxShadow: "1px 1px 17px #00d8ff inset",
    margin: "20px",
    padding: "10px",
  };
  return (
    <div style={proStyle}>
      <h2> Hello {name}</h2>
      <p>Your email is {email}</p>
      <p>the age is {age}</p>
      <hr />
      <p> {article}</p>
      <div>{children}</div>
    </div>
  );
}
