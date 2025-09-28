
import React from 'react';
import type { Workflow } from '../types';
import { FracturedLoopLogo, ChatBubbleLeftRightIcon, ArrowRightOnRectangleIcon, CubeTransparentIcon } from './IconComponents';

interface LandingPageProps {
  workflows: Workflow[];
  onStartSandbox: () => void;
  onStartWorkflow: (workflow: Workflow) => void;
  onStartQuantumBox: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ workflows, onStartSandbox, onStartWorkflow, onStartQuantumBox }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center mb-12">
        <FracturedLoopLogo className="w-24 h-24 text-indigo-400 mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-gray-100">Fractured Loop</h1>
        <p className="text-xl text-gray-400 mt-2">Your AI Assistant Director</p>
      </header>
      
      <main className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Sandbox Mode */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-start hover:border-indigo-500 transition-colors duration-300">
            <div className="p-3 bg-indigo-600/20 rounded-lg mb-4">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-100">Sandbox Mode</h2>
            <p className="text-gray-400 my-4 flex-grow">
              Brainstorm freely. Chat about your ideas and we'll help you capture the essential creative details.
            </p>
            <button
              onClick={onStartSandbox}
              className="mt-auto w-full text-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Start Chat
            </button>
          </div>
          
          {/* Card 2: Workflows */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-start hover:border-fuchsia-500 transition-colors duration-300">
            <div className="p-3 bg-fuchsia-600/20 rounded-lg mb-4">
                <ArrowRightOnRectangleIcon className="w-8 h-8 text-fuchsia-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-100">Guided Workflows</h2>
            <p className="text-gray-400 my-4 flex-grow">
              Follow a step-by-step process for specific outcomes like character design or shot creation.
            </p>
            <div className="space-y-3 w-full mt-auto">
              {workflows.map((workflow) => (
                <button
                  key={workflow.id}
                  onClick={() => onStartWorkflow(workflow)}
                  className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-fuchsia-800/50 transition-colors duration-200 group"
                >
                  <p className="font-bold text-gray-200 group-hover:text-fuchsia-300">{workflow.name}</p>
                  <p className="text-sm text-gray-400">{workflow.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Card 3: Quantum Box */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-start hover:border-amber-500 transition-colors duration-300">
            <div className="p-3 bg-amber-600/20 rounded-lg mb-4">
                <CubeTransparentIcon className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-100">Quantum Box</h2>
            <p className="text-gray-400 my-4 flex-grow">
              Build a solar system of ideas. Visually connect concepts, define their weight, and orchestrate harmony or tension.
            </p>
             <button
              onClick={onStartQuantumBox}
              className="mt-auto w-full text-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Enter Workspace
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LandingPage;
