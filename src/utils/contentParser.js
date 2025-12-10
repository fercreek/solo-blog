/**
 * Parsea contenido de texto con formato markdown para listas de objetivos
 * @param {string} content - Contenido en formato markdown
 * @returns {Array} Array de secciones con objetivos parseados
 */
export const parseImpossibleListContent = (content) => {
  if (!content || typeof content !== 'string') {
    return [];
  }
  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;
  let currentSubsection = null;
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Section headers (# Title)
    if (trimmedLine.startsWith('# ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: trimmedLine.replace('# ', '').trim(),
        goals: []
      };
      currentSubsection = null;
    }
    // Subsection headers (## Title) - ignore them, they're just organizational
    else if (trimmedLine.startsWith('## ')) {
      currentSubsection = trimmedLine.replace('## ', '').trim();
    }
    // Goals (- text or - ✅ text)
    else if (trimmedLine.startsWith('- ')) {
      if (currentSection) {
        const goalText = trimmedLine.replace('- ', '').trim();
        const isCompleted = goalText.includes('✅');
        const cleanText = goalText.replace(/✅\s*/g, '').trim();
        
        // Check if this is a sub-goal (indented with 2 spaces)
        if (line.startsWith('  - ')) {
          // Add as sub-goal to the last goal
          const lastGoal = currentSection.goals[currentSection.goals.length - 1];
          if (lastGoal) {
            if (!lastGoal.subGoals) lastGoal.subGoals = [];
            lastGoal.subGoals.push({
              text: cleanText,
              completed: isCompleted
            });
          }
        } else {
          // Add as main goal
          currentSection.goals.push({
            text: cleanText,
            completed: isCompleted,
            subGoals: []
          });
        }
      }
    }
  });
  
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return sections;
};

/**
 * Obtiene el icono apropiado para una sección basado en su título
 * @param {string} title - Título de la sección
 * @returns {JSX.Element} Componente de icono de React
 */
export const getSectionIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('completed') || lowerTitle.includes('check-in')) {
    return 'FaCheckCircle';
  }
  if (lowerTitle.includes('current') || lowerTitle.includes('focuses')) {
    return 'FaClock';
  }
  return 'FaBullseye';
};

/**
 * Parsea contenido markdown simple para páginas de información
 * @param {string} content - Contenido en formato markdown
 * @returns {Array} Array de párrafos y elementos parseados
 */
export const parseMarkdownContent = (content) => {
  if (!content || typeof content !== 'string') {
    return [];
  }
  
  const lines = content.split('\n');
  const elements = [];
  let currentParagraph = [];
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Headers
    if (trimmedLine.startsWith('# ')) {
      if (currentParagraph.length > 0) {
        elements.push({ type: 'paragraph', content: currentParagraph.join(' ') });
        currentParagraph = [];
      }
      elements.push({ type: 'h1', content: trimmedLine.replace('# ', '') });
    }
    else if (trimmedLine.startsWith('## ')) {
      if (currentParagraph.length > 0) {
        elements.push({ type: 'paragraph', content: currentParagraph.join(' ') });
        currentParagraph = [];
      }
      elements.push({ type: 'h2', content: trimmedLine.replace('## ', '') });
    }
    else if (trimmedLine.startsWith('### ')) {
      if (currentParagraph.length > 0) {
        elements.push({ type: 'paragraph', content: currentParagraph.join(' ') });
        currentParagraph = [];
      }
      elements.push({ type: 'h3', content: trimmedLine.replace('### ', '') });
    }
    // Lists
    else if (trimmedLine.startsWith('- ')) {
      if (currentParagraph.length > 0) {
        elements.push({ type: 'paragraph', content: currentParagraph.join(' ') });
        currentParagraph = [];
      }
      elements.push({ type: 'listItem', content: trimmedLine.replace('- ', '') });
    }
    // Empty lines
    else if (trimmedLine === '') {
      if (currentParagraph.length > 0) {
        elements.push({ type: 'paragraph', content: currentParagraph.join(' ') });
        currentParagraph = [];
      }
    }
    // Regular text
    else {
      currentParagraph.push(trimmedLine);
    }
  });
  
  // Add remaining paragraph
  if (currentParagraph.length > 0) {
    elements.push({ type: 'paragraph', content: currentParagraph.join(' ') });
  }
  
  return elements;
};

/**
 * Procesa texto para convertir markdown básico a HTML
 * @param {string} text - Texto con markdown
 * @returns {string} Texto con HTML
 */
export const processMarkdownText = (text) => {
  if (!text || typeof text !== 'string') {
    return '';
  }
  
  return text
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic text
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Code
    .replace(/`([^`]+)`/g, '<code>$1</code>');
};