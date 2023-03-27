const GenericExample = () => {
  const genericObjectNumber = 5;
  const genericObjectString = "Hola I am string";

    function printMe<T>(genericObject: T): T {
      
    return genericObject;
  }
  return (
    <>
      <p>{printMe(genericObjectNumber)}</p>
      <p>{printMe(genericObjectString)}</p>
    </>
  );
};

export default GenericExample;
