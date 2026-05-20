# Administration & Document Tooling Strategy

This document outlines the tools and methods ECHO will use to handle company administration and Office documents.

## 🛠 Tool Mapping

| Task Type | Tool / Method | Purpose |
| :--- | :--- | :--- |
| **Structured Data / Knowledge Base** | `GitHub (ai-learning repo)` | Centralized Markdown-based storage for CRM, SOPs, and project tracking. |
| **Complex Workflows** | `TaskFlow` | Managing multi-step admin processes (e.g., invoice $\rightarrow$ approval $\rightarrow$ payment). |
| **Process Mapping** | `Diagram Maker` | Creating flowcharts for sales funnels and admin SOPs. |
| **Web-based Office Tasks** | `Browser Automation` | Interacting with Google Workspace, Microsoft 365, and web forms. |
| **Excel/CSV Processing** | `OfficeToolbox (xlsx)` | Professional spreadsheet management with formula analysis and formatting. |
| **Word Doc Generation** | `OfficeToolbox (docx)` | Creating publication-quality documents (ebook/print-ready standards). |
| **PPT Presentation** | `OfficeToolbox (pptxgenjs)` | Generating narrative-driven, timing-optimized presentations. |

## 🌟 GOLD STANDARDS (Operational Excellence)

To ensure premium output, I follow these protocols:

### 📄 Document Processing (Large Files)
- **Pre-screening:** Scan document structure before deep processing.
- **Chunked Reading:** Implement split-reading (chunking) to respect context limits, ensuring 100% coverage of the source.

### ✍️ Content & Formatting Standards
- **Publication Quality:** Word/PDF outputs must follow ebook/print-ready standards (clean hierarchy, professional tone, consistent styling).
- **Excel Intelligence:** Don't just input data; analyze requirements to suggest/apply correct formulas and ensure professional cell formatting.
- **PPT Narrative Logic:** 
    - Avoid "bullet-only" slides. Include meaningful narrative context.
    - **Slide Optimization:** Target 3-5 minutes of delivery per slide.
    - **Mandatory Check:** Always ask the user for the **intended presentation duration** before generating slides to ensure the right amount of content.

## 🚀 Implementation Plan

1. **Environment Setup:** DONE. Installed `xlsx`, `docx`, and `pptxgenjs`. Implemented `office_toolbox.js`.
2. **Infrastructure Build:** Organize and structure the `ai-learning` repository for optimal knowledge retrieval.
3. **SOP Documentation:** Map out current administrative flows using Diagram Maker.
4. **Automation:** Implement TaskFlow jobs for recurring admin duties.

## 🛠 Technical Implementation (Office)
All Office operations are handled by `C:\Users\Marketing\.openclaw\workspace\office_tools\office_toolbox.js`.
- `readExcel(path)`: Returns JSON array of rows.
- `writeExcel(path, data)`: Takes JSON array and writes to .xlsx.
- `createWordDoc(path, contentArray)`: Takes array of strings (paragraphs) and writes to .docx.
- `createPPT(path, slidesArray)`: Takes array of `{title, body}` objects and writes to .pptx.

## 🎯 Quality Standards
- **Accuracy:** Every piece of data processed must be verified.
- **Professionalism:** Documents must follow company branding and semi-formal tone.
- **Efficiency:** Use automation for repetitive tasks to ensure speed.
