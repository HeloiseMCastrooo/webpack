import soma from "./calc.js";
import Heading from "./components/heading.js";

console.log("Testando o webpack");

soma(10,20);
soma(4,2);

////npx serve para o codigo rodar na versao final (processa)
//loaders
const heading = new Heading();

////////////////////////////////////////////////////
heading.create("Este título é dinâmico");
heading.create("Hot reload");