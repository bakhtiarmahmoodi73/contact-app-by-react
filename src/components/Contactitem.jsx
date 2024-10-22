function Contactitem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>ee</span> {email}
      </p>
      <p>
        <span>pp {phone}</span>
      </p>
      <button onClick={() => deleteHandler(id)}>delete</button>
    </li>
  );
}

export default Contactitem;
