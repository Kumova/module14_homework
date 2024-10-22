
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlString, "text/xml");

const list = [];

xmlDom.querySelectorAll("student").forEach((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute("lang");
  const firstName = nameNode.querySelector("first").textContent;
  const lastName = nameNode.querySelector("second").textContent;
  const age = studentNode.querySelector("age").textContent;
  const prof = studentNode.querySelector("prof").textContent;

  list.push({ 
    name: `${firstName} ${lastName}`,
    age: age,
    prof: prof,
    lang: langAttr,
     });
});

const result  = {list: list}

console.log(result);


