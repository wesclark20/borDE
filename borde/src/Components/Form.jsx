import React from "react";
import { saveAs } from "file-saver";

// make a function, create whole form, press submit, get info to json data, and then make a post request

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const jsonString = JSON.stringify(formData);
    const file = new Blob([jsonString], {type: 'application/json'});
    saveAs(file, 'userInput.json');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={formData.title}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phone"
        value={formData.date}
        onChange={handleInputChange}
      />
      <button type="submit">Save JSON</button>
    </form>
  );
}
