// Simplified Gemini service for initial setup
// TODO: Properly integrate Google Generative AI once basic setup is working

import type { BuildType, NodeGraph, Workflow } from '../types';

export const createSandboxChatSession = (weights: Record<string, number>, rigidity: number, isWeightingEnabled: boolean): any => {
  console.warn('Gemini service not yet configured - this is a placeholder implementation');
  return {
    send: async (message: string) => ({
      text: 'AI service is not yet configured. Please add your Google AI API key.'
    })
  };
};

export const generateSuggestQuestion = async (context: Record<string, string>, workflow: Workflow | null): Promise<string> => {
  console.warn('Gemini service not yet configured');
  return "What aspect of your project would you like to explore next?";
};

export const runBuild = async (
    buildType: BuildType, 
    answers: Record<string, string>, 
    context: Record<string, string>,
    weights: Record<string, number>,
    rigidity: number
): Promise<string> => {
  console.warn('Gemini service not yet configured');
  return JSON.stringify({ 
    message: 'AI service is not yet configured. Please add your Google AI API key to enable full functionality.',
    buildType,
    context
  });
};

export const generateFromQuantumBox = async (
    graph: NodeGraph,
    context: { id: string; name: string; value: string; size: number; distance: number }[],
    harmonyLevel: number,
    weights: Record<string, number>,
    rigidity: number,
    outputType: string
): Promise<string> => {
  console.warn('Gemini service not yet configured');
  return 'AI service is not yet configured. Please add your Google AI API key to enable full functionality.';
};