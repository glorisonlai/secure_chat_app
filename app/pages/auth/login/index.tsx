const LoginPage = () => {
  const handleSubmit = (event: FormEvent) => {
    console.log(event);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="username" />
      <input type="password" placeholder="password" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginPage;
