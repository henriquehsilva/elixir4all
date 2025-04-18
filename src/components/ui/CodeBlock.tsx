import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const escapeHTML = (str: string) =>
    str.replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;');

  const highlightElixir = (code: string) => {
    const keywords = ['defmodule', 'def', 'do', 'end', 'if', 'else', 'true', 'false', 'nil'];
    const builtins = ['IO', 'String', 'puts', 'gets', 'trim', 'pipe_through'];

    return escapeHTML(code)
      .split('\n')
      .map((line) => {
        // Comentários
        if (line.trim().startsWith('#')) {
          return `<span class="text-gray-500 dark:text-gray-400">${line}</span>`;
        }

        let processedLine = line;

        // Strings (todas as ocorrências)
        processedLine = processedLine.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="text-green-600 dark:text-green-400">"$1"</span>');

        // Palavras-chave
        keywords.forEach(keyword => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'g');
          processedLine = processedLine.replace(regex, `<span class="text-purple-600 dark:text-purple-400">${keyword}</span>`);
        });

        // Funções e módulos
        builtins.forEach(fn => {
          const regex = new RegExp(`\\b${fn}\\b`, 'g');
          processedLine = processedLine.replace(regex, `<span class="text-indigo-600 dark:text-indigo-400">${fn}</span>`);
        });

        return processedLine;
      })
      .join('\n');
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 transition-all duration-300">
      <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300">
          exemplo.exs
        </span>
      </div>
      <div className="px-4 py-4 overflow-x-auto">
        <pre className="text-sm font-mono whitespace-pre-wrap">
          <code
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightElixir(code) }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
