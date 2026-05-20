const xlsx = require('xlsx');
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } = require('docx');
const pptxgen = require('pptxgenjs');

/**
 * Office Mastery Toolbox for ECHO
 * High-standard implementation for professional office document management.
 */
const OfficeToolbox = {
    // --- 1. LARGE FILE HANDLING (Pre-screen & Split Reading) ---
    /**
     * Reads a large text-based file in chunks to avoid memory/token overflow.
     * @param {string} filePath 
     * @param {number} chunkSize - Max characters per chunk.
     * @returns {Promise<string[]>} Array of file chunks.
     */
    readLargeFile: async (filePath, chunkSize = 10000) => {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const chunks = [];
            for (let i = 0; i < content.length; i += chunkSize) {
                chunks.push(content.substring(i, i + chunkSize));
            }
            return chunks;
        } catch (error) {
            throw new Error(`Large File Read Error: ${error.message}`);
        }
    },

    // --- 2. PUBLICATION-READY DOCUMENTS (Word) ---
    /**
     * Creates a professional, publication-quality document.
     * @param {string} filePath 
     * @param {Array} sections - Array of { type: 'h1'|'h2'|'p', text: '...', align: 'left'|'center'|'right' }
     */
    createProfessionalDoc: async (filePath, sections) => {
        try {
            const doc = new Document({
                sections: [{
                    properties: {},
                    children: sections.map(s => {
                        const level = s.type === 'h1' ? HeadingLevel.HEADING_1 : (s.type === 'h2' ? HeadingLevel.HEADING_2 : HeadingLevel.NONE);
                        return new Paragraph({
                            heading: level,
                            alignment: s.align === 'center' ? AlignmentType.CENTER : (s.align === 'right' ? AlignmentType.RIGHT : AlignmentType.LEFT),
                            children: [new TextRun({ text: s.text, bold: s.type !== 'p' })],
                        });
                    }),
                }],
            });

            const buffer = await Packer.toBuffer(doc);
            fs.writeFileSync(filePath, buffer);
            return true;
        } catch (error) {
            throw new Error(`Professional Doc Error: ${error.message}`);
        }
    },

    // --- 3. EXCEL ANALYSIS & FORMATTING ---
    readExcel: (filePath) => {
        try {
            const workbook = xlsx.readFile(filePath);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            return xlsx.utils.sheet_to_json(worksheet);
        } catch (error) {
            throw new Error(`Excel Read Error: ${error.message}`);
        }
    },

    writeExcel: async (filePath, data) => {
        try {
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
            xlsx.writeFile(workbook, filePath);
            return true;
        } catch (error) {
            throw new Error(`Excel Write Error: ${error.message}`);
        }
    },

    /**
     * Logic helper for finding correct formulas (simulated logic)
     */
    analyzeFormula: (context) => {
        // This is a helper for the AI to decide which formula to use
        const patterns = {
            'sum': /jumlah|total|seluruh/i,
            'average': /rata-rata|mean/i,
            'lookup': /cari|temukan|vlookup/i,
            'if': /kondisi|jika|apabila/i
        };
        for (const [formula, regex] of Object.entries(patterns)) {
            if (regex.test(context)) return formula;
        }
        return 'custom';
    },

    // --- 4. NARRATIVE & OPTIMIZED PPT ---
    /**
     * Plans a PPT structure based on intended duration.
     * @param {number} durationMinutes 
     * @returns {Object} { slideCount, timePerSlide }
     */
    planPPTStructure: (durationMinutes) => {
        const timePerSlide = 4; // Target 4 minutes per slide
        const slideCount = Math.round(durationMinutes / timePerSlide);
        return {
            slideCount,
            timePerSlide,
            message: `Untuk durasi ${durationMinutes} menit, saya menyarankan ${slideCount} slide dengan rata-rata ${timePerSlide} menit per slide.`
        };
    },

    createNarrativePPT: async (filePath, slidesData) => {
        try {
            let pres = new pptxgen();
            
            slidesData.forEach(slideData => {
                let slide = pres.addSlide();
                // Title
                slide.addText(slideData.title, { x: 0.5, y: 0.5, w: '90%', h: 1, fontSize: 24, bold: true, color: '363636' });
                // Narrative Body (Professional layout)
                slide.addText(slideData.narrative, { x: 0.5, y: 1.5, w: '90%', h: 4, fontSize: 14, color: '666666', align: 'left', valign: 'top' });
                // Key Takeaways (Points)
                if (slideData.points) {
                    slide.addText(slideData.points.join('\n'), { x: 0.5, y: 5.5, w: '90%', h: 1, fontSize: 12, italic: true, color: '999999' });
                }
            });

            await pres.writeFile({ fileName: filePath });
            return true;
        } catch (error) {
            throw new Error(`Narrative PPT Error: ${error.message}`);
        }
    }
};

module.exports = OfficeToolbox;
