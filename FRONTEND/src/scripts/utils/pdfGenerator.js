// src/scripts/utils/pdfGenerator.js
import { jsPDF } from "jspdf";

export const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Set Font & Text
    doc.setFontSize(20);
    doc.text("Halo, ini PDF dari Astro!", 10, 10);
    
    doc.setFontSize(12);
    doc.text("Dibuat menggunakan jsPDF dan Bootstrap Layout.", 10, 20);
    
    // Download
    doc.save("contoh-dokumen.pdf");
};