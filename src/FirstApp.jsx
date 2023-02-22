/*const newMessage = {
    message: 'Hola Mundo',
    title: 'El Rodry'
};*/

const getMessage = () => {
  return "Keep Going";
};

export const FirstApp = () => {
  return (
    <>
      <h1>{getMessage()}</h1>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      <p>soy lo que soy</p>
    </>
  );
};
