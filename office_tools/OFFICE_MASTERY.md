# SKILL: Office Mastery (Enterprise Grade)

This skill enables ECHO to handle complex office documentation with professional standards suitable for public distribution and high-level executive presentations.

## 🛠 Capabilities

### 1. Large Document Processing
- **Pre-screening:** Scans file structure before full processing.
- **Chunked Reading:** Uses `readLargeFile` to split documents into manageable chunks, ensuring 100% data capture without context loss.

### 2. Publication-Ready Documents
- **Professional Layout:** Uses `createProfessionalDoc` to generate Word files with clear hierarchies (H1, H2, P), professional alignment, and clean styling.
- **Standard:** Output is designed to be "Print-Ready" or "Ebook-Ready".

### 3. Advanced Excel Intelligence
- **Formula Analysis:** Uses `analyzeFormula` to suggest the best mathematical or logical function based on data requirements.
- **Formatting:** Ensures professional cell and table formatting for clean data presentation.

### 4. Strategic PowerPoint Design
- **Narrative-First Approach:** Moves beyond bullet points to include a cohesive narrative for each slide.
- **Timing Optimization:** 
    - Uses `planPPTStructure` to align slide count with presentation duration.
    - **Target:** 3-5 minutes per slide.
    - **Protocol:** Must ask for `durationMinutes` before generation.

## ⚙️ Implementation Details
- **Core Tool:** `C:\Users\Marketing\.openclaw\workspace\office_tools\office_toolbox.js`
- **Dependencies:** `xlsx`, `docx`, `pptxgenjs`, `fs`.
