const GenericExample = () => {
  const genericObjectNumber = 5;
  const genericObjectString = "Hola I am string";

  function doSomething<T>(genericObject: T): T {
    return genericObject;
  }
  return (
    <>
      <p>{doSomething(genericObjectNumber)}</p>
      <p>{doSomething(genericObjectString)}</p>
    </>
  );
};

export default GenericExample;
