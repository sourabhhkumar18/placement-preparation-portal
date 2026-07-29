import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const exportNotesPDF = (notes) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(30, 64, 175);
  doc.text("Placement Preparation Notes", 14, 20);

  doc.setFontSize(11);
  doc.setTextColor(120);
  doc.text(
    `Generated on: ${new Date().toLocaleDateString()}`,
    14,
    28
  );

  const tableData = notes.map((note) => [
    note.title,
    note.category,
    note.priority,
    new Date(note.createdAt).toLocaleDateString(),
    note.content.length > 60
      ? note.content.substring(0, 60) + "..."
      : note.content,
  ]);

  autoTable(doc, {
    startY: 35,

    head: [
      [
        "Title",
        "Category",
        "Priority",
        "Created",
        "Content",
      ],
    ],

    body: tableData,

    styles: {
      fontSize: 9,
      cellPadding: 3,
      overflow: "linebreak",
    },

    headStyles: {
      fillColor: [37, 99, 235],
      textColor: 255,
      fontStyle: "bold",
    },

    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
  });

  doc.save("Placement_Notes.pdf");
};

export default exportNotesPDF;