// React app id made up of components->piece of UI having own logic and implementation.
// React component is JS function that returns Promise.

//Rules:
//1. Component name starts with capital letter
//2. It shuould be closed with / Eg: <MyButton />

// Ques. Why do we wrap JSX code in div or empty fragmanet?
// Component coon't be run with multiple JSX Tages.

// We use className attribute to style element as per class, same lie we use class in HTML


//JSX helps us to put Mark UP into HTML

//Displaying data
// user- object, data can be displayed using . operator included in curly braces (JSX: since we are writing HTML)
// {user.name}

//Conditional Rendering
// based on the condition we apply rendering
// let islogin = true
// if(islogin){
//     <admin />
// }else{
//     <admin />
// }
//We can also store component invocation in a variable and then render it as a js variable:
//Eg: 
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
// return (
//   <div>
//     {content}
//   </div>
// );

//using ternary operator
/* <div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div> */

//we don't else
/* <div>
  {isLoggedIn && <AdminPanel />}
</div> */

//Rendering lists
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];


  const listItem = product.map(item=> <li>{item.title}</li>)
  return (<ul>{listItem}</ul>)

