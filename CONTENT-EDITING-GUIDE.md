# ANRC Website Content Editing Guide

## Overview
This website uses a centralized content management system that allows collaborators to easily update all website text by editing a single file: `_data/content.yml`

## How to Edit Website Content

### 1. Locate the Content File
The master content file is located at:
```
_data/content.yml
```

### 2. Edit Content Sections
The file is organized into sections that correspond to the website sections:

#### Hero Section (Top of page)
```yaml
hero:
  title: "Welcome to ANRC"
  description: "Your description here..."
```

#### About Us Section
```yaml
about:
  title: "About Us"
  intro: "Section introduction text..."
  organization:
    title: "Our Organization"
    content: "Content for this subsection..."
  history:
    title: "History"
    content: "Content for this subsection..."
  vision:
    title: "Vision"
    content: "Content for this subsection..."
```

#### Mission Section
```yaml
mission:
  title: "Mission"
  intro: "Section introduction text..."
  our_mission:
    title: "Our Mission"
    content: "Content for this subsection..."
  goals:
    title: "Goals"
    content: "Content for this subsection..."
  values:
    title: "Values"
    content: "Content for this subsection..."
```

#### Research Section
```yaml
research:
  title: "Our Research"
  intro: "Section introduction text..."
  research_areas:
    title: "Research Areas"
    content: "Content for this subsection..."
  current_projects:
    title: "Current Projects"
    content: "Content for this subsection..."
  publications:
    title: "Publications"
    content: "Content for this subsection..."
```

#### Team Section
```yaml
team:
  title: "Team"
  intro: "Section introduction text..."
  content: "Main team section content..."
```

#### Contact Section
```yaml
contact:
  title: "Contact Us"
  intro: "Section introduction text..."
  content: "Main contact content..."
  email: "contact@anrc.org"
  address:
    line1: "123 Research Drive"
    line2: "Suite 456"
    line3: "Anytown, ST 12345"
```

### 3. Important Editing Rules

#### YAML Syntax
- **Indentation matters**: Use spaces (not tabs) and maintain consistent indentation
- **Quotes**: Wrap text content in quotes, especially if it contains special characters
- **Line breaks**: For long content, you can use the `|` character for multi-line text:
  ```yaml
  content: |
    This is a long paragraph that spans
    multiple lines and will be rendered
    as a single paragraph on the website.
  ```

#### Content Guidelines
- **Keep structure**: Don't change the section names (like `hero:`, `about:`, etc.)
- **Edit content only**: Change the text after the colons, not the field names
- **Test changes**: After editing, check that the website still works properly

### 4. How Changes Appear on the Website

When you edit `_data/content.yml`:
1. The changes are automatically pulled into the website when it rebuilds
2. Each section on the website will display the updated content
3. All formatting and styling remains the same - only the text content changes

### 5. Example Edit

To change the main hero title from "Welcome to ANRC" to "Welcome to Our Research Consortium":

**Before:**
```yaml
hero:
  title: "Welcome to ANRC"
```

**After:**
```yaml
hero:
  title: "Welcome to Our Research Consortium"
```

### 6. Getting Help

If you need help with editing:
- Make sure to maintain the exact same indentation and structure
- Don't change field names (the text before the colons)
- If something breaks, revert your changes and try again
- Contact the technical team if you encounter issues

## Team Members (Separate Management)

Team member profiles are managed separately in the `_members/` folder. Each team member has their own `.md` file that can be edited independently of the main content file.

---

**Important**: Always test your changes after editing to ensure the website still functions correctly!