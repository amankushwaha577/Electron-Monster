const { app } = require('electron');
const fs = require('fs');

app.on('ready', () => {
  // XML content
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <root>
    <person>
      <name>John Doe</name>
      <age>30</age>
    </person>
    <person>
      <name>Jane Smith</name>
      <age>25</age>
    </person>
  </root>`;

  // File path
  const filePath = 'data.xml';

  // Write XML content to file
  fs.writeFile(filePath, xmlContent, (err) => {
    if (err) {
      console.error('Error writing XML file:', err);
    } else {
      console.log('XML file created successfully:', filePath);
    }
  });
});
